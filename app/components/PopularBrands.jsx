import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

//Прост картинки, и так сойдет
class PopularBrands extends React.Component {
  render() {
    return (
      <div className="index-popular-brands">
        <div className="titlebar title-ltbrown">
          <h1>Популярные производители:</h1>
          <a className="btn btn-red btn-wide">все популярные производители</a>
        </div>
        <div className="catalogue-items">
          <div className="catalogue-item-small">
            <img src="/images/brands/bosch.png" />
          </div>
          <div className="catalogue-item-small">
            <img src="/images/brands/Makita.png" />
          </div>
          <div className="catalogue-item-small">
            <img src="/images/brands/DeWALT.png" />
          </div>
          <div className="catalogue-item-small">
            <img src="/images/brands/Interskol.png" />
          </div>
          <div className="catalogue-item-small">
            <img src="/images/brands/Hitachi.png" />
          </div>
          <div className="catalogue-item-small">
            <img src="/images/brands/LG.png" />
          </div>
          <div className="catalogue-item-small">
            <img src="/images/brands/AEG.png" />
          </div>
          <div className="catalogue-item-small">
            <img src="/images/brands/Metabo.png" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PopularBrands;
