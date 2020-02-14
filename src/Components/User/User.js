import React, { Component } from 'react';
import axios from 'axios';
import {Card, Row, Col} from 'react-bootstrap'
import { Container } from '@material-ui/core';
import {Chart} from 'react-google-charts'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class User extends Component {

    
    state = {
      age:0,
      gender:"",
      dbp:0,
      sdp:0,
      temp:0,
      resp_rate:[],
      heart_rate:0,
      pulse_rate:0,
      ecg:[],
      spo2Graph:[],
      spo2:0,
      height:0,
      weight:0,
      region:"",
      history:"",
    }

    componentDidMount(){
      axios.get(`http://localhost:2000/allData`)
      .then(res => {
        const allData = res.data;
        console.log(allData);
        this.setState({
          age: allData.age[0],
          gender: allData.gender[0],
          dbp: allData.dbp[0],
          sdp: allData.sdp[0],
          temp: allData.temp[0],
          resp_rate: allData.resp_rate,
          heart_rate: allData.heart_rate[0],
          pulse_rate: allData.pulse_rate[0],
          ecg: allData.ecg,
          spo2Graph: allData.spo2Graph,
          spo2:allData.spo2[0],
          height:allData.height[0],
          weight:allData.weight[0],
          region:allData.region[0],
          history: allData.history[0],
        })
      })
    }
    
    render() {

      var data1 = this.state.ecg
      var ecgData = [['ECG','value']]
      for (var i=0;i<data1.length;++i) {
        ecgData.push([i,data1[i]]);
      }

      var data2 = this.state.spo2Graph
      var spo2Data = [['ECG','value']]
      for (var j=0;j<data2.length;++j) {
        spo2Data.push([j,data2[j]]);
      }

      var data3 = this.state.resp_rate
      var respData = [['ECG','value']]
      for (var k=0;k<data3.length;++k) {
        respData.push([k,data3[k]]);
      }

        return (
            <div>
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
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>History</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.history}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row style={{paddingTop:'30px',paddingBottom: '30px'}}>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Height</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.height}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Weight</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.weight}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Region</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.region}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Diastolic Blood Pressure</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.dbp}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row style={{paddingTop:'30px',paddingBottom: '30px'}}>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Heart Rate</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.heart_rate}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Pulse Rate</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.pulse_rate}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Systolic Blood Pressure</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.sdp}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>                
                    <Card border="primary" >
                      <Card.Header>Peripheral Capillary Oxygen Saturation(SpO2)</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.spo2}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Container style={{paddingTop:'30px',paddingBottom: '30px'}}>
                  <Card >
                    <Card.Header>Electrocardiogram Graph</Card.Header>
                      <Card.Body>
                        <Chart
                          width={'100%'}
                          chartType="LineChart"
                          loader={<Loader type="Bars" color="#3366CC" height={100} width={100}/>}
                          data={ecgData}
                          options={{
                              chartArea: { height: '80%', width: '90%' },
                              hAxis: { slantedText: false },
                              vAxis: { viewWindow: { min: 80, max: 140} },
                              series: { curveType: 'function' },
                              legend: { position: 'none' },
                          }}
                          rootProps={{ 'data-testid': '3' }}
                          chartPackages={['corechart', 'controls']}
                          controls={[
                            {
                              controlType: 'ChartRangeFilter',
                              options: {
                                filterColumnIndex: 0,
                                ui: {
                                  chartType: 'LineChart',
                                  chartOptions: {
                                    chartArea: { width: '90%', height: '50%' },
                                    hAxis: { baselineColor: 'none' },
                                  },
                                },
                              },
                              controlPosition: 'bottom',
                              controlWrapperParams: {
                                state: {
                                  range: { start: 0, end: 1000 },
                                },
                              },
                            },
                          ]}
                        />
                    </Card.Body>
                  </Card>
                </Container >
                <Container style={{paddingTop:'30px',paddingBottom: '30px'}}>
                  <Card>
                    <Card.Header>Peripheral Capillary Oxygen Saturation(SpO2) Graph</Card.Header>
                    <Card.Body>
                    <Chart
                      width={'100%'}
                      chartType="LineChart"
                      loader={<Loader type="Bars" color="#3366CC" height={100} width={100}/>}
                      data={spo2Data}
                      options={{
                          chartArea: { height: '80%', width: '90%' },
                          hAxis: { slantedText: false },
                          vAxis: { viewWindow: { min: 0, max: 100} },
                          series: { curveType: 'function' },
                          legend: { position: 'none' },
                      }}
                      rootProps={{ 'data-testid': '3' }}
                      chartPackages={['corechart', 'controls']}
                      controls={[
                        {
                          controlType: 'ChartRangeFilter',
                          options: {
                            filterColumnIndex: 0,
                            ui: {
                              chartType: 'LineChart',
                              chartOptions: {
                                chartArea: { width: '90%', height: '50%' },
                                hAxis: { baselineColor: 'none' },
                              },
                            },
                          },
                          controlPosition: 'bottom',
                          controlWrapperParams: {
                            state: {
                              range: { start: 0, end: 200 },
                            },
                          },
                        },
                      ]}
                    />
                    </Card.Body>
                  </Card>
                </Container>
                <Container style={{paddingTop:'30px',paddingBottom: '30px'}}>
                  <Card>
                    <Card.Header>Respiration Rate</Card.Header>
                    <Card.Body>
                    <Chart
                      width={'100%'}
                      chartType="LineChart"
                      loader={<Loader type="Bars" color="#3366CC" height={100} width={100}/>}
                      data={respData}
                      options={{
                          chartArea: { height: '80%', width: '90%' },
                          hAxis: { slantedText: false },
                          vAxis: { viewWindow: { min: 10, max: 20} },
                          series: { curveType: 'function' },
                          legend: { position: 'none' },
                      }}
                      rootProps={{ 'data-testid': '3' }}
                      chartPackages={['corechart', 'controls']}
                      controls={[
                        {
                          controlType: 'ChartRangeFilter',
                          options: {
                            filterColumnIndex: 0,
                            ui: {
                              chartType: 'LineChart',
                              chartOptions: {
                                chartArea: { width: '90%', height: '50%' },
                                hAxis: { baselineColor: 'none' },
                              },
                            },
                          },
                          controlPosition: 'bottom',
                          controlWrapperParams: {
                            state: {
                              range: { start: 0, end: 25 },
                            },
                          },
                        },
                      ]}
                    />
                    </Card.Body>
                  </Card>
                </Container>
                </Container>
            </div>
        )
    }
}
