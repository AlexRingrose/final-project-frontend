import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartComponent } from '../chart/chart.component';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favorite;
  fav = {
    name : 'aFav',
  };
  constructor(public _api: ApiService, public _user: UserService) { }

  ngOnInit() {
  }

  onSave() {
    this._user.saveFavorite( { name : this.favorite } ).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
  }

}
