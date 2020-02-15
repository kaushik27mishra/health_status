import React, { Component } from 'react';
import Main from './Main/Main';
import {Switch, Route} from 'react-router-dom';
import User from './Components/User/User';
import { BrowserRouter } from "react-router-dom";
import Amplify from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react';
import awsconfig from './aws-exports';

Amplify.configure({
    Auth: {
        identityPoolId: 'ap-south-1:10d2120a-40a8-47f7-a63b-508badae145f', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'ap-south-1', // REQUIRED - Amazon Cognito Region
        userPoolId: 'ap-south-1_iPoZN06uP', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: '10neulj26efojs26o2r637v6vk', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        AWSS3: {
            bucket: 'shms', //REQUIRED -  Amazon S3 bucket
            region: 'ap-south-1', //OPTIONAL -  Amazon service region
        }
    }
});

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