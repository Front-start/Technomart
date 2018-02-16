import React from "react";
import Info from "./Info.jsx";
import Nav from "./Nav.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";

import { connect } from "react-redux";
import actions from "./actions.jsx";
import { Map } from "immutable";

class Catalogue extends React.Component {
  constructor(props) {
    super(props);

    this.sort = this.sort.bind(this);
  }

  sort(e) {
    console.log(e.target.dataset.id);
  }

  componentWillMount() {
    this.props.getInitialInfo(
      this.props.match.params.id,
      this.props.match.params.subid
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
