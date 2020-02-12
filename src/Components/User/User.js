import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            options : {
                series: [{
                name: 'XYZ MOTORS',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
              }],
                chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                  type: 'x',
                  enabled: true,
                  autoScaleYaxis: true
                },
                toolbar: {
                  autoSelected: 'zoom'
                }
              },
              dataLabels: {
                enabled: false
              },
              markers: {
                size: 0,
              },
              title: {
                text: 'Stock Price Movement',
                align: 'left'
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  inverseColors: false,
                  opacityFrom: 0.5,
                  opacityTo: 0,
                  stops: [0, 90, 100]
                },
              },
              yaxis: {
                labels: {
                  formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                  },
                },
                title: {
                  text: 'Price'
                },
              },
              xaxis: {
                type: 'datetime',
              },
              tooltip: {
                shared: false,
                y: {
                  formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                  }
                }
              }
            }      
        }
    }
    
    render() {
        return (
            <div>
                <Chart options={this.state.options} series={this.state.series} type={this.state.options.chart.type} width={500} height={320} />
            </div>
        )
    }
}
