import React from "react";
import Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import PopularGoods from "./PopularGoods.jsx";
import PopularBrands from "./PopularBrands.jsx";

class Index extends React.Component {
  render() {
    return (
      <div className="wrapper-white">
        <Nav />
        <Cards />
        <PopularGoods />
        <PopularBrands />

        <div className="index-service-wrapper">
          <div className="index-service">
            <h1>index-service</h1>
          </div>
        </div>
        <div className="index-about">
          <h1>index-about</h1>
        </div>
      </div>
    );
  }
}

module.exports = Index;
