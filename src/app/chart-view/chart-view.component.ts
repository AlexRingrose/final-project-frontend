import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartViewComponent implements OnInit {

  constructor ( public _api: ApiService ) { }

  ngOnInit() {
  }

}
