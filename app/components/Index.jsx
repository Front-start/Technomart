import React from "react";
import Nav from "./Nav.jsx";
import Slider from "./Slider.jsx";
import { Link, BrowserRouter } from "react-router-dom";

class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <div className="index-cards">
          <div className="card card-mats new">
            <div className="card-text-container">
              <span>Материалы</span>
              <Link to="#" className="btn btn-gray">
                на любой вкус
              </Link>
            </div>
            <div className="card-image-container">
              <img src="/images/icons/paint.png" />
            </div>
          </div>
          <div className="card card-tools">
            <div className="card-text-container">
              <span>Инструмент</span>
              <Link to="/catalogue/1/1" className="btn btn-gray">
                НА ВСЕ СЛУЧАИ
              </Link>
            </div>
            <div className="card-image-container">
              <img src="/images/icons/drill.png" />
            </div>
          </div>
          <div className="card card-tech">
            <div className="card-text-container">
              <span>Техника</span>
              <Link to="#" className="btn btn-gray">
                для стройки
              </Link>
            </div>
            <div className="card-image-container">
              <img src="/images/icons/tractor.png" />
            </div>
          </div>
          <div className="card-2xwidth">
            <Slider />
          </div>
          <div className="card-2xheight">
            <div className="card card-discount">
              <div className="card-text-container">
                <span>Скидки 50%</span>
                <Link to="#" className="btn btn-gray">
                  На 350 ТОВАРОВ
                </Link>
              </div>
              <div className="card-image-container">
                <img src="/images/icons/basket.png" />
              </div>
            </div>
            <div className="card card-delivery">
              <div className="card-text-container">
                <span>Доставка</span>
                <Link to="#" className="btn btn-gray">
                  бесплатно
                </Link>
              </div>
              <div className="card-image-container">
                <img src="/images/icons/van.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="index-popular-brands">
          <h1>index-popular-brands</h1>
        </div>
        <div className="index-popular-goods">
          <h1>index-popular-goods</h1>
        </div>
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
