import React from "react";
import Info from "./Info.jsx";

class Main extends React.Component {
  render() {
    return (
      <div className="catalogue-component">
        <div className="catalogue">
          <div className="catalogue-container">
            <h1>Каталог</h1>
          </div>
        </div>
        <Info />
      </div>
    );
  }
}

module.exports = Main;
