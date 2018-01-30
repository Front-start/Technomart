import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="footer-top-container">
            <h1>Верхний футер</h1>
          </div>
        </div>
        <div className="footer-bot">
          <div className="footer-bot-container">
            <h1>Нижний футер</h1>
          </div>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
