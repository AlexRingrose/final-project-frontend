import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public lineChartData: Array<any> =
      [{data: [], label: '' },
      { data: [], label: '' },
      { data: [], label: '' }];
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

  private search = [ '', '', ''];
  private dataSet = [];

  constructor(public _api: ApiService) {}

  validInput(input) {
    if ( input !== '') {
      return true;
    }
  }

  updateChart () {
    for (let i = 0; i < this.search.length; i++) {
      if ( this.validInput(this.search[i].toUpperCase() )) {
        this.dataSet[ i ] = this.getStockData( this.search[ i ] );
      } else {
        this.dataSet[ i ] = { data: [], label: '' };
      }
      this.lineChartData[i] = this.dataSet [ i ];
    }
  }

  getStockData(ticker) {
    this._api.stockDaily( ticker ).subscribe(
      ( res ) => {
        const dataAry = [];

        console.log( 'Api Response', res );

        for ( const data of Object.values( res[ 'Time Series (Daily)' ] ) ) {
          dataAry.push( data[ '4. close' ] );
        }

        return { data: dataAry, label: ticker };
      }
    );
  }

  loadDummy() {
    const dataAry = [ 104.8200, 109.1900, 108.5200, 112.0900,
      110.8900, 110.1900, 111.1200 ];

    this.lineChartData = [ { data: dataAry, label: 'MSFT' }];
  }

  ngOnInit () {
    this.loadDummy();
  }
}
