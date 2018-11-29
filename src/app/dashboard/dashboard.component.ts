import { Component} from '@angular/core';
import { ApiService } from '../api.service';

import { ChartComponent } from '../chart/chart.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  viewControl
  constructor(public _api:ApiService) {
    this.viewControl = "home";
  }


}
