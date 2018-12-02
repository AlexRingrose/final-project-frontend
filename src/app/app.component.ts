import { Component} from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-project';
  constructor(public _api: ApiService, private router: Router) {

  }
}
