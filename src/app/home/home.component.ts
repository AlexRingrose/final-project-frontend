import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartComponent } from '../chart/chart.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _api:ApiService) { }

  ngOnInit() {
  }



}
