import React from "react";
import Nav from "./Nav.jsx";
import Slider from "./Slider.jsx";

class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <div className="index-cards">
          <div className="card">1</div>
          <div className="card">2</div>
          <div className="card">3</div>
          <div className="card-2xwidth">
            <Slider />
          </div>
          <div className="card-2xheight">
            <div className="card">5</div>
            <div className="card">6</div>
          </div>
          <div className="card">7</div>
          <div className="card">8</div>
        </div>
        <div className="index-popular-brands">
          <h1>index-popular-brands</h1>
        </div>
        <div className="index-popular-goods">
          <h1>index-popular-goods</h1>
        </div>
        <div className="index-service-wrapper">
          <div className="index-service">
            <h1>index-popular-goods</h1>
          </div>
        </div>
        <div className="index-about">
          <h1>index-popular-goods</h1>
        </div>
      </div>
    );
  }
}

module.exports = Index;
