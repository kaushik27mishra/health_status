import React, { Component } from 'react'
import Appbar from '../Appbar'
import LineChart from '../Charts/LineChart'

export default class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
              <Appbar/>
              <LineChart/>
            </div>
        )
    }
}
