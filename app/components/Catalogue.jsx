import React from "react";
import Info from "./Info.jsx";
import Nav from "./Nav.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";

class Catalogue extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <Breadcrumbs />
        <div className="catalogue-component">
          <div className="catalogue">
            <div className="catalogue-container">
              <h1>Каталог</h1>
            </div>
          </div>
          <Info />
        </div>
      </div>
    );
  }
}

module.exports = Catalogue;
