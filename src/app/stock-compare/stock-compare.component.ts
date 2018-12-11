import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartComponent } from '../chart/chart.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-stock-compare',
  templateUrl: './stock-compare.component.html',
  styleUrls: ['./stock-compare.component.css']
})
export class StockCompareComponent implements OnInit {
  favorite;
  fav = {
    name: 'aFav',
  };
  constructor ( public _api: ApiService, public _user: UserService ) { }

  ngOnInit () {
    console.log('Stock-compare Loaded');
  }

  onSave () {
    this._user.saveFavorite( { name: this.favorite } ).subscribe(
      ( res: any ) => {
        console.log( res );
      }
    );
  }

}
