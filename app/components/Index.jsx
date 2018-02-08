import React from "react";
import Info from "./Info.jsx";
import Nav from "./Nav.jsx";

class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <div className="index">
          <div className="index-container">
            <h1>index</h1>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
