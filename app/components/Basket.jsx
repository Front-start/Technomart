import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "./actions.jsx";
import { Map } from "immutable";

class Basket extends React.Component {
  render() {
    return (
      <div className="header-order-wrapper">
        <Link to="#">
          <div
            className={
              this.props.bookmarks > 0
                ? "header-bookmarks header-btn-red"
                : "header-bookmarks"
            }
          >
            Закладки: {this.props.bookmarks}
          </div>
        </Link>
        <Link to="#">
          <div
            className={
              this.props.basket > 0
                ? "header-basket header-btn-red"
                : "header-basket"
            }
          >
            Корзина: {this.props.basket}
          </div>
        </Link>
        <Link to="#">
          <div className="header-order">
            <span>Оформить заказ</span>
          </div>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bookmarks: Map.isMap(state.get("currentUser"))
      ? state.get("currentUser").toJS().bookmarks.length
      : 0,
    basket: Map.isMap(state.get("currentUser"))
      ? state.get("currentUser").toJS().basket.length
      : 0
  };
}

module.exports = connect(mapStateToProps, actions)(Basket);
