import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  dataArray;
  labelArray;
  dataLength;
  constructor() {
  }
}
