import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../chart-data.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  dataArray: Array<any>;
  labelArray: Array<string>;
  dataLength;

  constructor(public _data: ChartDataService) {
    this.dataArray = this._data.dataArray;
    this.labelArray = this._data.labelArray;
    console.log('chart loaded');
    console.log(this.dataArray, this.labelArray);
  }


  public lineChartData: Array<any> = [];

  public lineChartLabels: Array<any> =
    [];
  public lineChartOptions = {
    legend: {
      display: false,
      labels: {
        display: true,
      }
    },
    elements: {
      line: {
          tension: 0, // disables bezier curves
      }
  },
    scales: {
      xAxes:  [{
        ticks: {
          autoSkip: false,
        }
      }]
    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartType = 'line';

  ngOnInit () {
    this.lineChartData = this.dataArray;
    // for (let i = 0; i < this.dataLength; i++){
    //   this.lineChartLabels.push('');
    // }
    console.log('ex lbl from labelArray: ', this.labelArray[0] );
    for (let i = 0; i < this.labelArray.length; i++) {
      this.lineChartLabels[i] = this.labelArray[i] ;
    }
  }
}
