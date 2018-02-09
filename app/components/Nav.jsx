import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import actions from "./actions.jsx";
import { List } from "immutable";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          {this.props.menuItems.map(item => (
            <li key={item.order}>
              <NavLink exact to={item.link} activeClassName="nav-active">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuItems: state
      .get("menuItems")
      .sortBy(item => item.get("order"))
      .toJS()
  };
}

module.exports = connect(mapStateToProps, actions)(Nav);
