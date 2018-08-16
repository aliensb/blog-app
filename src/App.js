import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./page";
import Details from "./details/loadable";
import Headers from "./common/header";
import Footer from "./common/footer";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Headers />
            <Route path="/" exact component={HomePage} />
            <Route path="/details/:id" exact component={Details} />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
