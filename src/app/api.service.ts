import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable( {
  providedIn: 'root'
} )
export class ApiService {
  apiKey;
  apiBasePath;
  search = '';
  viewControl;
  constructor ( public _http: HttpClient ) {
    this.apiKey = 'O5PZCEDH04Z1PEWN';
    this.apiBasePath = 'https://www.alphavantage.co/query?';
  }

  stockIntraDay ( ticker, interval ) {
    return this._http.get( this.apiBasePath + 'function=TIME_SERIES_INTRADAY' +
      '&symbol=' + ticker + '&interval=' + interval + '&apikey=' + this.apiKey );
  }

  stockDaily ( ticker ) {
    // return this._http.get( this.demoPath );
    return this._http.get( this.apiBasePath + 'function=TIME_SERIES_DAILY' +
      '&symbol=' + ticker + '&interval=' + '&apikey=' + this.apiKey + 'outputsize=compact' );
  }
}
