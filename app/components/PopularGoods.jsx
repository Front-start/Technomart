import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "./actions.jsx";
import { List } from "immutable";
import ItemRender from "./ItemRender.jsx";

class PopularGoods extends React.Component {
  render() {
    return (
      <div className="index-popular-goods">
        <div className="titlebar title-ltbrown">
          <h1>Популярные товары:</h1>
          <a className="btn btn-red btn-wide">все популярные товары</a>
        </div>
        <div className="catalogue-items">
          {this.props.popularGoodsList &&
          this.props.popularGoodsList.length > -1
            ? this.props.popularGoodsList.map(item => (
                <div
                  className={
                    1523242602346 - Date.parse(item.date) > 14 * 86400000
                      ? "catalogue-item new"
                      : "catalogue-item"
                  }
                  key={item.id}
                >
                  <ItemRender item={item} />
                </div>
              ))
            : "Нет товаров в этой (под)категории"}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //Прост список товаров, мне уже лень придумывать метрику для популярности и сортировать
  let idArray = List([4, 7, 9, 12]);
  return {
    popularGoodsList: state
      .getIn(["catalogue", "categories"])
      .first()
      .get("subcategories")
      .first()
      .get("goods")
      .filter(item => {
        return idArray.includes(item.get("id"));
      })
      .toJS()
  };
}

module.exports = connect(mapStateToProps, actions)(PopularGoods);
