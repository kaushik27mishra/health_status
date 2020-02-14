import React, { Component } from 'react'
import Appbar from '../Components/Appbar'
import PersonList from '../Components/PersonList'

export default class Main extends Component {

    render() {
        return (
            <div>
                <Appbar/>
                <PersonList/>
            </div>
        )
    }
}