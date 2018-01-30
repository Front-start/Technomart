import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header.jsx";
import Top from "./components/Top.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/NotFound.jsx";
import Breadcrumbs from "./components/Breadcrumbs.jsx";

import style from "./styles/style.less";

ReactDOM.render(
  <Router>
    <div className="wrapper">
      <Header />
      <Top />
      <Nav />
      <Breadcrumbs />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>,
  document.getElementById("app")
);
