import { Component} from '@angular/core';
import { ChartComponent } from './chart/chart.component'
import { HeaderComponent } from './header/header.component'
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-project';
  constructor(public _api:ApiService){

  }

  myClick(){
    this._api.searchStock("MSFT").subscribe(
      (res) => {
        console.log(res)
      }
    );
  }
}
