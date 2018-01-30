import React from "react";
import Login from "./Login.jsx";

class Top extends React.Component {
  render() {
    return (
      <div className="top">
        <div className="top-container">
          <div className="top-info">
            infoinfoinfoinfo infoinfoinfoinfoinfoinfo
          </div>
          <div className="top-contacts">
            contactscontactscontacts contactscontactscontacts
          </div>
          <div className="top-login">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Top;
