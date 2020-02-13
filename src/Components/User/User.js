import React, { Component } from 'react';
import Appbar from '../Appbar';
import LineChart from '../Charts/LineChart';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

export default class User extends Component {

    
    state = {
      age:"",
      gender:"",
      dbp:[],
      sdp:[],
      temp:"",
      resp_rate:[],
      heart_rate:[],
      pulse_rate:[],
      ecg:[],
      spo2:[]
    }

    componentDidMount(){
      axios.get(`http://localhost:2000/allData`)
      .then(res => {
        const allData = res.data;
        this.setState({
          age: allData.age[0],
          gender: allData.gender[0],
          temp: allData.temp[0],
          dbp: allData.dbp,
          sdp: allData.sdp,
          resp_rate: allData.resp_rate,
          heart_rate: allData.heart_rate,
          pulse_rate: allData.pulse_rate,
          ecg: allData.ecg,
          spo2: allData.spo2
        })
      })
    }
    
    render() {
        return (
            <div>
                <Appbar/>
                <Typography variant="h6" component="h6">
                  Age: {this.state.age}
                </Typography>
                <Typography variant="h6" component="h6">
                  Gender: {this.state.gender}
                </Typography>
                <Typography variant="h6" component="h6">
                  Temperature: {this.state.temp}
                </Typography>
                <Typography variant="h6" component="h6">
                  Electrocardiogram Graph
                </Typography>
                <LineChart 
                  data={this.state.ecg} 
                  start={0} 
                  end={1000} 
                  min={110} 
                  max={140}
                  />
                <Typography variant="h6" component="h6">
                  SpO2 Graph
                </Typography>
                <LineChart 
                  data={this.state.spo2} 
                  start={0} 
                  end={200} 
                  min={0} 
                  max={100}
                  />
                {/* <Typography variant="h6" component="h6">
                  Respiration rate
                </Typography>
                <LineChart 
                  data={this.state.resp_rate} 
                  start={} 
                  end={} 
                  min={} 
                  max={}
                  /> */}
                {/* <Typography variant="h6" component="h6">
                   Heart Rate
                </Typography>
                <LineChart 
                  data={this.state.heart_rate} 
                  start={} 
                  end={} 
                  min={} 
                  max={}
                  /> */}
                <Typography variant="h6" component="h6">
                   Pulse Rate
                </Typography>
                <LineChart 
                  data={this.state.pulse_rate} 
                  start={0} 
                  end={25} 
                  min={0} 
                  max={100}
                  />
            </div>
        )
    }
}
