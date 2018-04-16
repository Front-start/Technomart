import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "./actions.jsx";
import { List } from "immutable";

class FooterMenu extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav-menu footer-menu footer-top-menu">
          {this.props.footerTopTopMenuItems.map(item => (
            <li key={item.order}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="nav-menu footer-menu footer-bot-menu">
          {this.props.footerTopBotMenuItems.map(item => (
            <li key={item.order}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    footerTopTopMenuItems: state
      .getIn(["menus", "footerMenuItems", "footerTopTopMenuItems"])
      .sortBy(item => item.get("order"))
      .toJS(),
    footerTopBotMenuItems: state
      .getIn(["menus", "footerMenuItems", "footerTopBotMenuItems"])
      .sortBy(item => item.get("order"))
      .toJS()
  };
}

module.exports = connect(mapStateToProps, actions)(FooterMenu);
