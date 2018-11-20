import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // apiKey;
  // apiBasePath;
  // apiFunction;
  constructor(public _http : HttpClient) {
    // this.apiKey = "O5PZCEDH04Z1PEWN";
    // this.apiBasePath = "https://www.alphavantage.co/query?"
    // this.apiFunction = "TIME_SERIES_INTRADAY"
  }
  
  searchStock(ticker){
    return this._http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+ticker+"&interval=5min&apikey=demo");
  }
}
