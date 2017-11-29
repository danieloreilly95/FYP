import React, { Component } from "react";
import Chart from './Chart';
class Enrolements extends React.Component {

  constructor(){
      super();
      this.state = {
        chartData:{}
      }
    }

    componentWillMount(){
      this.getChartData();
    }

    getChartData(){

      this.setState({
        chartData:{
          labels: ['UCD', 'DCU', 'NUI Maynooth', 'NUI Galway', 'UCC', 'UL'],
          datasets:[
            {
              label:'Enrolements',
              data:[
                15973,
                11919,
                8299,
                11205,
                13163,
                9841
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }
      });
    }

  render() {
    return (
      <div>
           <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>

      </div>
    );
  }
}

export default Enrolements
