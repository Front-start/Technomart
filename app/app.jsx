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

var redux = require("redux");
import { Provider } from "react-redux";
import reducer from "./components/reducer.jsx";

var store = redux.createStore(reducer);

store.dispatch({
  type: "ADD_USER",
  user: { name: "232" }
});

ReactDOM.render(
  <Provider store={store}>
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
    </Router>
  </Provider>,
  document.getElementById("app")
);
