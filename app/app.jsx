import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header.jsx";
import Top from "./components/Top.jsx";
import Index from "./components/Index.jsx";
import Catalogue from "./components/Catalogue.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/NotFound.jsx";

import style from "./styles/style.less";

var redux = require("redux");
import { Provider } from "react-redux";
import reducer from "./components/reducer.jsx";

var store = redux.createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div className="wrapper">
        <Header />
        <Top />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/catalogue/:id?/:subid?" component={Catalogue} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
