import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public lineChartData: Array<any> =
      [{data: [ 0, 0, 0, 0, 0, 0, 0 ], label: '1' },
      { data: [ 0, 0, 0, 0, 0, 0, 0 ], label: '2' }];
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
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  private search = [ '', ''];
  private dataSet = [ { data: [ 0, 0, 0, 0, 0, 0, 0 ], label: '1' },
  { data: [ 0, 0, 0, 0, 0, 0, 0 ], label: '2' }];

  constructor(public _api: ApiService) {}

  validInput(input) {
    if ( input !== '' && input.length > 3) {
      return true;
    }
  }

  getStockData() {

    for ( let i = 0; i < this.search.length; i++ ) {
      if ( this.validInput( this.search[ i ] ) ) {
        this._api.stockDaily( this.search[ i ] ).subscribe(
          ( res ) => {
            const dataAry = [];

            console.log( 'Api Response', res );

            for ( const data of Object.values( res[ 'Time Series (Daily)' ] ) ) {
              dataAry.push( data[ '4. close' ] );
            }

            this.dataSet[i] = {
              data: dataAry, label: this.search[ i ].toUpperCase() };
            this.lineChartData = this.dataSet.slice(0);
          }
        );
      }
    }
  }

  loadDummy() {
    const dataAry = [ 104.8200, 109.1900, 108.5200, 112.0900,
      110.8900, 110.1900, 111.1200 ];

    this.lineChartData = [ { data: dataAry, label: 'MSFT' },
    { data: [ 0, 0, 0, 0, 0, 0, 0 ], label: '2' }];
  }

  ngOnInit () {
    this.loadDummy();
  }
}
