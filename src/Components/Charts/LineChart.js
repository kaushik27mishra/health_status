import React, { Component } from 'react'
import {Chart} from 'react-google-charts'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class LineChart extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    var ecgData = this.props.data
    var data = [['ECG','value']]
    for (var i=0;i<ecgData.length;++i) {
      data.push([i,ecgData[i]]);
    }

    return (
      <div>
        <Chart
          width={'100%'}
          chartType="LineChart"
          loader={<Loader type="Bars" color="#00BFFF" height='30%' width='80%'/>}
          data={data}
          options={{
              chartArea: { height: '80%', width: '90%' },
              hAxis: { slantedText: false },
              vAxis: { viewWindow: { min: this.props.min, max: this.props.max} },
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
                  range: { start: this.props.start, end: this.props.end },
                },
              },
            },
          ]}
        />
      </div>
    )
  }
}
