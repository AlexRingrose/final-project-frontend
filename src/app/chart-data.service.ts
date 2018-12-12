import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  dataArray;
  labelsArray;
  dataLength;
  constructor() {
  }
}
