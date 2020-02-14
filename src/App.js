import React, { Component } from 'react';
import Main from './Main/Main';
import {Switch, Route} from 'react-router-dom';
import User from './Components/User/User';
import { BrowserRouter } from "react-router-dom";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator,Authenticator } from 'aws-amplify-react'; 

Amplify.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/profile" component={User}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default withAuthenticator(App, true);