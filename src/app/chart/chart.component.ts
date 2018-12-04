import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public lineChartData: Array<any> =
      [{data: [50, 50, 50, 50, 50, 50, 50], label: 'Series A'}];
  public lineChartLabels: Array<any> =
      ['1', '2', '3', '4', '5', '6', '7'];
  public lineChartOptions: any = {
    responsive: true
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
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(public _api: ApiService) {}

  ngOnInit() {
    this.loadData('Msft');
  }

  loadData(lticker) {
    const ticker = lticker.toUpperCase();
    this._api.stockDaily(ticker).subscribe(
      (res) => {
        const dataAry = [];

        // const labelAry = [];
        console.log('Api Response', res);
        // console.log('time series', res['Time Series (Daily)']);

        for (const data of Object.values(res['Time Series (Daily)'])) {
          dataAry.push(data['4. close']);
        }

        this.updateChart({data: dataAry, label: ticker});

      }
    );
  }
  updateChart(set1, set2?, set3?) {
    if (set3) {
        this.lineChartData = [set1, set2, set3];
    } else if (set2) {
        this.lineChartData = [set1, set2];
    } else {
        this.lineChartData = [set1];
    }
  }
}
