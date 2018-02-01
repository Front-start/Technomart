import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import Search from "./Search.jsx";
import Basket from "./Basket.jsx";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <Link to="#">
            <div className="header-title">Technomart</div>
          </Link>
          <Search />
          <Basket />
        </div>
      </header>
    );
  }
}

module.exports = Header;
