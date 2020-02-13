import React, { Component } from 'react';
import Appbar from '../Appbar';
import LineChart from '../Charts/LineChart';
import axios from 'axios';
import {Card, Row, Col} from 'react-bootstrap'
import { Container } from '@material-ui/core';

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
                <Container>
                  <Row style={{paddingTop:'30px',paddingBottom: '30px'}}>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Age</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.age}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Gender</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.gender}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Temperature</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.temp} °C
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Container style={{paddingTop:'30px',paddingBottom: '30px'}}>
                  <Card >
                    <Card.Header>Electrocardiogram Graph</Card.Header>
                    <Card.Body>
                      <LineChart 
                        data={this.state.ecg} 
                        start={0} 
                        end={1000} 
                        min={110} 
                        max={150}
                      />
                    </Card.Body>
                  </Card>
                </Container >
                <Container style={{paddingTop:'30px',paddingBottom: '30px'}}>
                  <Card>
                    <Card.Header>SpO2 Graph</Card.Header>
                    <Card.Body>
                      <LineChart 
                        data={this.state.spo2} 
                        start={0} 
                        end={200} 
                        min={0} 
                        max={100}
                      />
                    </Card.Body>
                  </Card>
                </Container>
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
                <Container style={{paddingTop:'30px',paddingBottom: '30px'}}>
                  <Card>
                    <Card.Header>Pulse Rate</Card.Header>
                    <Card.Body>
                      <LineChart 
                        data={this.state.pulse_rate} 
                        start={0} 
                        end={25} 
                        min={0} 
                        max={100}
                      />
                    </Card.Body>
                  </Card>
                </Container>
                </Container>
            </div>
        )
    }
}
