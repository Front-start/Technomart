import React from "react";

class ItemRender extends React.Component {
  render() {
    return (
      <div>
        <p>цена {this.props.item.price}</p>
        <p>функционал {this.props.item.functions}</p>
        <p>тип {this.props.item.type}</p>
      </div>
    );
  }
}

module.exports = ItemRender;
