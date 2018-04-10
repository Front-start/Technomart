import React from "react";

class ItemRender extends React.Component {
  render() {
    return (
      <div>
        <div className="top-1">
          <img src={"/images/goods" + this.props.item.image} />
        </div>
        <div className="top-2">
          <a className="catalogue-btn btn-green btn-buy">купить</a>
          <a className="catalogue-btn btn-green-white btn-bookmark">отложить</a>
        </div>
        <div className="bot">
          <span className="itemBrand">Перфоратор {this.props.item.brand}</span>
          <span className="itemModel">{this.props.item.model}</span>

          {this.props.item.discount ? (
            <div className="itemDiscountPrice-wrapper">
              <span className="itemFullPrice">
                {this.props.item.price + " Р."}
              </span>
              <span className="itemDiscountPrice">
                {Math.round(
                  this.props.item.price * (1 - this.props.item.discount / 100)
                ) + " Р."}
              </span>
            </div>
          ) : (
            <span className="itemPrice">{this.props.item.price + " Р."}</span>
          )}
        </div>
      </div>
    );
  }
}

module.exports = ItemRender;
