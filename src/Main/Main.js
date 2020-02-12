import React, { Component } from 'react'
import Appbar from '../Components/Appbar'
import PersonList from '../Components/PersonList'
import fire from '../Config/fire'

export default class Main extends Component {

    _isMounted = false;
    
    state = {
        user:{},
        isAuthenticated:false
    }


    componentDidMount() {
        this._isMounted = true;
        fire.auth().onAuthStateChanged((user) => {
          if(user) {
            if (this._isMounted) {
                this.setState({user});
                this.setState({
                    isAuthenticated: true
                })
            }
          }
          else {
            this.setState({user:null});
            this.setState({
                isAuthenticated: false
            })
          }
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        return (
            <div>
                <Appbar/>
                <PersonList/>
            </div>
        )
    }
}