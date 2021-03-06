import React from "react";
import Parser from "html-react-parser";

class Info extends React.Component {
  render() {
    return (
      <div className="category-info">
        <div className="category-info-container">{Parser(this.props.text)}</div>
      </div>
    );
  }
}

module.exports = Info;
