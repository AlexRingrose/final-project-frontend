import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey;
  apiBasePath;
  apiFunction;
  apiInterval;
  constructor(public _http : HttpClient) {
    this.apiKey = "O5PZCEDH04Z1PEWN";
    this.apiBasePath = "https://www.alphavantage.co/query?";
    this.apiFunction = "TIME_SERIES_INTRADAY";
    this.apiInterval = "5min";
  }

  searchStock(ticker){
    return this._http.get(this.apiBasePath+"function="+this.apiFunction+
      "&symbol="+ticker+"&interval="+this.apiInterval+"&apikey="+this.apiKey);
  }
}
