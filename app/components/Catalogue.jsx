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
    this.sort = this.sort.bind(this);

    this.state = {
      selectedPage: 0,
      itemsPerPage: 9,
      pageCount: 0,
      sortingOrderAsc: true,
      allSet: false,
      newStatusDays: 14
    };
  }

  sort(e) {
    if (this.props.activeCategory.activeSortField.id == e.target.dataset.id) {
      this.props.sort(null, !this.state.sortingOrderAsc);
      this.setState({
        sortingOrderAsc: !this.state.sortingOrderAsc,
        selectedPage: 0
      });
    } else {
      this.props.sort(e.target.dataset.id, true);
      this.setState({
        sortingOrderAsc: true,
        selectedPage: 0
      });
    }
    this.props.pageChange(0, this.state.itemsPerPage);
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
  componentDidMount() {
    let timer = setInterval(() => {
      if (
        this.props &&
        this.props.activeCategory.id &&
        this.props.activeCategory.activeSortField
      ) {
        this.setState({
          allSet: true
        });
        clearInterval(timer);
      }
    }, 50);
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
      this.props.activeCategory.goodsToDisplay.length / this.state.itemsPerPage
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
    if (this.state.allSet) {
      return (
        <div className="main">
          <Nav />
          <Breadcrumbs location={this.props.location} />
          <div className="catalogue-component">
            <div className="catalogue">
              <div className="title-ltblue">
                <h1>{this.props.activeCategory.name}</h1>
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
                              className={
                                item.id ==
                                this.props.activeCategory.activeSortField.id
                                  ? "active"
                                  : ""
                              }
                            >
                              <a data-id={item.id} onClick={this.sort}>
                                {item.name}
                              </a>
                            </li>
                          );
                        }
                      })}
                    </ul>
                    <div className="sort-buttons">
                      <div
                        className={
                          this.state.sortingOrderAsc
                            ? "sort-asc active"
                            : "sort-asc"
                        }
                      />
                      <div
                        className={
                          !this.state.sortingOrderAsc
                            ? "sort-desc active"
                            : "sort-desc"
                        }
                      />
                    </div>
                  </div>
                  <div className="catalogue-right-col-items">
                    {this.props.activeCategory.goodsToDisplay.length > -1
                      ? this.props.activeCategory.goodsToDisplayOnPage.map(
                          item => (
                            <div
                              className={
                                1523242602346 - Date.parse(item.date) >
                                this.state.newStatusDays * 86400000
                                  ? "catalogue-item new"
                                  : "catalogue-item"
                              }
                              key={item.id}
                            >
                              <ItemRender item={item} />
                            </div>
                          )
                        )
                      : "Нет товаров в этой (под)категории"}
                  </div>
                </div>
                <div className="pagination-container">
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
            <Info text={this.props.activeCategory.info} />
          </div>
        </div>
      );
    } else
      return (
        <p>
          Данные не получены... И если не будет лень, я сделаю какой-нибудь
          компонент, который будет запускать таймер и выводить сообщение, если
          категория так и не загрузится. Можно объединить его с компонентом не
          найденной страницы, например. Может быть, еще какие-то ошибки.
        </p>
      );
  }
}

function mapStateToProps(state) {
  return {
    activeCategory: state.get("activeCategory").toJS()
  };
}

module.exports = connect(mapStateToProps, actions)(Catalogue);
