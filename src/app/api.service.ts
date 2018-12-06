import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey;
  demoPath;
  apiBasePath;
  apiFunction;
  apiInterval;
  constructor(public _http: HttpClient) {
    this.apiKey = 'O5PZCEDH04Z1PEWN';
    this.demoPath = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo';
    this.apiBasePath = 'https://www.alphavantage.co/query?';
  }

  apiDemo() {
    return this._http.get( this.demoPath );
  }

  getDemoData() {
    this.apiDemo().subscribe(
      (res) => {
        const dataAry = [];
        for ( const data of Object.values( res[ 'Time Series (Daily)' ] ) ) {
          dataAry.push( data[ '4. close' ] );
        }

        return { data: dataAry, label: 'MSFT' };
      }
    );
  }

  stockDaily( ticker ) {
      // return this._http.get( this.demoPath );
      return this._http.get( this.apiBasePath + 'function=TIME_SERIES_DAILY' +
        '&symbol=' + ticker + '&interval=' + '&apikey=' + this.apiKey + 'outputsize=compact' );
  }
}
