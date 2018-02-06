import React from "react";
import Login from "./Login.jsx";

class Top extends React.Component {
  render() {
    return (
      <div className="top">
        <div className="top-container">
          <div className="top-info">
            <p>
              Интернет-магазин<br /> строительных материалов<br /> и
              инструментов для ремонта
            </p>
          </div>
          <div className="top-contacts">
            <div className="phone-number">+7 (812) 555-05-55</div>
            <span className="address">
              г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8
            </span>
          </div>
          <div className="top-user-login">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Top;
