import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: 0,
      basket: 0
    };
  }

  render() {
    return (
      <div className="header-order-wrapper">
        <Link to="#">
          <div className="header-bookmarks">
            Закладки: {this.state.bookmarks}
          </div>
        </Link>
        <Link to="#">
          <div className="header-basket">Корзина: {this.state.basket}</div>
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

module.exports = Basket;
