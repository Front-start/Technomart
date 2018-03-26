import React from "react";
import Info from "./Info.jsx";
import Nav from "./Nav.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";
import Filter from "./Filter.jsx";
import ItemRender from "./ItemRender.jsx";

import ReactPaginate from "react-paginate";

import { connect } from "react-redux";
import actions from "./actions.jsx";

class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.setPagination = this.setPagination.bind(this);

    this.state = { selectedPage: 0, itemsPerPage: 9, pageCount: 0 };
  }
  sort(e) {
    console.log(e.target.dataset.id);
  }

  componentWillMount() {
    this.props.getCat(
      this.props.match.params.id,
      this.props.match.params.subid
    ); //Приготовить данные в хранилище
    this.props.buildFilterList(); //Приготовить фильтры в хранилище
    this.props.gatherFilteredItems(); //
    this.setPagination();
    this.props.pageChange(0, this.state.itemsPerPage);
  }

  handlePageClick(e) {
    this.setState({ selectedPage: e.selected });
    this.props.pageChange(
      e.selected * this.state.itemsPerPage,
      (e.selected + 1) * this.state.itemsPerPage
    );
  }

  setPagination() {
    let pageCount = Math.ceil(
      //Количество страниц, необходимое для отображения товаров
      this.props.activeCategory.filteredGoods.length / this.state.itemsPerPage
    );
    if (pageCount == 0) {
      //Если нет товаров, то чтобы пагинация не пропала, пусть будет 1 страница
      pageCount = 1;
    }
    if (pageCount != this.state.pageCount) {
      //Если общее количество страниц изменилось, обновим
      this.setState({
        pageCount: pageCount
      });

      if (this.state.selectedPage + 1 > pageCount) {
        //Если пользователь при этом был на последней странице, переместим на предпоследнюю
        this.setState({
          selectedPage: this.state.selectedPage - 1
        });
        this.props.pageChange(
          //И выведем товары
          this.state.selectedPage - 1 * this.state.itemsPerPage,
          this.state.selectedPage * this.state.itemsPerPage
        );
      }
    }
  }

  componentDidUpdate() {
    this.setPagination();
  }

  render() {
    if (this.props.activeCategory.id > 0) {
      return (
        <div className="main">
          <Nav />
          <Breadcrumbs location={this.props.location} />
          <div className="catalogue-component">
            <div className="catalogue">
              <div className="catalogue-title">
                <h1>{this.props.activeCategory.subCatName}</h1>
              </div>
              <div className="catalogue-main-wrapper">
                <div className="catalogue-left-col">
                  <div className="catalogue-left-col-header">Фильтр:</div>
                  <div className="filter-list">
                    <Filter
                      selectedPage={this.state.selectedPage}
                      itemsPerPage={this.state.itemsPerPage}
                    />
                  </div>
                </div>
                <div className="catalogue-right-col">
                  <div className="catalogue-right-col-header">
                    сортировка:
                    <ul className="sort-fields">
                      {this.props.activeCategory.fields.map(item => {
                        if (!!item.sort) {
                          return (
                            <li
                              key={item.id}
                              data-id={item.id}
                              onClick={this.sort}
                            >
                              {item.name}
                            </li>
                          );
                        }
                      })}
                    </ul>
                    <div className="sort-buttons">
                      <div className="sort-asc" />
                      <div className="sort-desc" />
                    </div>
                  </div>
                  <div className="catalogue-right-col-items">
                    {this.props.activeCategory.goodsToDisplay.length > -1
                      ? this.props.activeCategory.goodsToDisplay.map(item => (
                          <div className="catalogue-item" key={item.id}>
                            <ItemRender item={item} />
                          </div>
                        ))
                      : "Нет товаров в этой (под)категории"}
                  </div>
                </div>
                <div className="pagination">
                  <ReactPaginate
                    previousLabel={"Предыдущая"}
                    nextLabel={"Следующая"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    forcePage={this.state.selectedPage}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    disabledClassName={"disabled"}
                  />
                </div>
              </div>
            </div>
            <Info />
          </div>
        </div>
      );
    } else return <p>Данные не получены...</p>;
  }
}

function mapStateToProps(state) {
  return {
    activeCategory: state.get("activeCategory").toJS()
  };
}

module.exports = connect(mapStateToProps, actions)(Catalogue);
