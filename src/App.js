import React, { Component } from 'react';
import Login from './Auth/Login';
import Main from './Main/Main';
import {Switch, Route} from 'react-router-dom';
import User from './Components/User/User';
import { BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./Auth/protected.route";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/home" component={Main}/>
          <ProtectedRoute exact path="/profile" component={User}/>
          <Route exact path="/" component={Login}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
