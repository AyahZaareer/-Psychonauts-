import React, { Component } from 'react'
import Header from './component/Header';
import Main from './component/Main';
import Favorit from './component/Favorit';

import { BrowserRouter, Route, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/favorit">
            <Favorit />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
