import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <Link to="/">Главная</Link>
        </div>
      </nav>
    );
  }
}

module.exports = Nav;
