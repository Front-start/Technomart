import React from "react";
import Search from "./Search.jsx";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="header-title">Technomart</div>
          <Search />
        </div>
      </header>
    );
  }
}

module.exports = Header;
