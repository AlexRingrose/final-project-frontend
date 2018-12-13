import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartComponent } from '../chart/chart.component';
import { UserService } from '../user.service';


@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit {
  favorites: Array<string> = [];
  constructor ( public _api: ApiService, public _user: UserService ) { }

  ngOnInit () {
    this.getFavorites();
  }

  search () { this._api.viewControl = 'chart-view'; }

  getFavorites () {
    console.log( 'GetFavorites post' )
    this._user.getFavorite().subscribe(
      ( res: any ) => {
        const tempFav = res;
        for ( let fav of tempFav ) {
          this.favorites.push( fav.name );
        }
        console.log( res );
      }
    )
  }

}
