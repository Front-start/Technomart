import React from "react";

class ItemRender extends React.Component {
  render() {
    return this.props.items.length > -1
      ? this.props.items.map(item => item.id)
      : "Нет товаров в этой (под)категории";
  }
}

module.exports = ItemRender;
