import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "./actions.jsx";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="footer-top-container">
            <div className="footer-top-left">
              <Link to="#">
                <div className="footer-logo logo-red">Technomart</div>
              </Link>
              <span>
                г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8<br /> +7 (812)
                555-05-55
              </span>
            </div>
            <div className="footer-top-right">123</div>
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

function mapStateToProps(state) {
  return {
    footerMenuItems: state
      .getIn(["menus", "footerMenuItems"])
      .sortBy(item => item.get("order"))
      .toJS()
  };
}

module.exports = connect(mapStateToProps, actions)(Footer);
