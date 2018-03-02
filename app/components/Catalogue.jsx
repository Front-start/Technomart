import React from "react";
import Info from "./Info.jsx";
import Nav from "./Nav.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";
import Filter from "./Filter.jsx";
import ItemRender from "./ItemRender.jsx";

import ReactPaginate from "react-paginate";

import { connect } from "react-redux";
import actions from "./actions.jsx";
import { Map } from "immutable";

class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);

    this.state = { itemsPerPage: 9 };
  }
  sort(e) {
    console.log(e.target.dataset.id);
  }

  componentWillMount() {
    this.props.getInitialInfo(
      this.props.match.params.id,
      this.props.match.params.subid,
      9
    );
    this.props.pageChange(0, this.state.itemsPerPage);
  }

  handlePageClick(e) {
    this.props.pageChange(
      e.selected * this.state.itemsPerPage,
      (e.selected + 1) * this.state.itemsPerPage
    );
  }

  render() {
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
              <div className="catalogue-filter">
                <div className="catalogue-filter-header">Фильтр:</div>
                <div className="filter-list">
                  {this.props.activeCategory.fields.map(item => {
                    if (!!item.leftmenu) {
                      return <Filter key={item.id} filter={item} />;
                    }
                  })}
                </div>
              </div>
              <div className="catalogue-main">
                <div className="catalogue-main-header">
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
                <div className="catalogue-main-items">
                  <ItemRender
                    items={this.props.activeCategory.itemsToDisplay}
                  />
                </div>
              </div>
              <div className="pagination">
                <ReactPaginate
                  previousLabel={"Предыдущая"}
                  nextLabel={"Следующая"}
                  breakLabel={<a href="">...</a>}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(
                    this.props.activeCategory.totalNumber /
                      this.state.itemsPerPage
                  )}
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
  }
}

function mapStateToProps(state) {
  return {
    activeCategory: state.get("activeCategory").toJS()
  };
}

module.exports = connect(mapStateToProps, actions)(Catalogue);
