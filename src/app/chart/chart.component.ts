import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../chart-data.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  dataArray: Array<any>;
  dataLength;

  constructor(public _data: ChartDataService) {
    this.dataArray = this._data.dataArray;
    this.dataLength = this._data.dataLength;
    console.log('chart loaded', this.dataArray);
  }

  ngOnInit () {
    this.lineChartData = this.dataArray;
    for(let i=0; i < this.dataLength; i++){
      this.lineChartLabels.push('');
    }
  }

  public lineChartData: Array<any> = [];

  public lineChartLabels: Array<any> =
    [];
  public lineChartOptions = {
    legend: {
      display: false,
      labels: {
        display: false,
      }
    }
  }
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

}
