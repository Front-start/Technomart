import React from "react";
import Info from "./Info.jsx";
import Nav from "./Nav.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";

import { connect } from "react-redux";
import actions from "./actions.jsx";
import { Map } from "immutable";

class Catalogue extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <Breadcrumbs location={this.props.location} />
        <div className="catalogue-component">
          <div className="catalogue">
            <div className="catalogue-title">
              <h1>Каталог</h1>
            </div>
          </div>
          <Info />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(this.props.match);
  return {
    bookmarks: Map.isMap(state.get("currentUser"))
      ? state.get("currentUser").toJS().bookmarks.length
      : 0,
    basket: Map.isMap(state.get("currentUser"))
      ? state.get("currentUser").toJS().basket.length
      : 0
  };
}

module.exports = connect(mapStateToProps, actions)(Catalogue);
