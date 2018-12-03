import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey;
  apiBasePath;
  apiFunction;
  apiInterval;
  constructor(public _http: HttpClient) {
    this.apiKey = 'O5PZCEDH04Z1PEWN';
    this.apiBasePath = 'https://www.alphavantage.co/query?';
    // this.apiInterval = '30min';
  }

  stockDaily(ticker) {
    return this._http.get(this.apiBasePath + 'function=TIME_SERIES_DAILY' +
      '&symbol=' + ticker + '&interval=' + '&apikey=' + this.apiKey + '&outputsize=compact');
  }

  // searchStock(ticker, apiFunction) {
  //   return this._http.get(this.apiBasePath + 'function=' + apiFunction +
  //     '&symbol=' + ticker + '&interval=' + this.apiInterval + '&apikey=' +
  //     this.apiKey + '&outputsize=compact');
  // }
}
