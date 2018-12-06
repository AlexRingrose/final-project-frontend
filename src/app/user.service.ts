import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://meanstack-2018-5-alex-phortonssf.c9users.io:8080/api/AppUsers';
  favUrl = 'http://meanstack-2018-5-alex-phortonssf.c9users.io:8080/api/favorites/';

  userData: any;
  constructor(private http: HttpClient, private router: Router) { }

  token = window.sessionStorage.getItem ( 'token' );
  userId = window.sessionStorage.getItem( 'userId' );

  register(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }

  login(userData: any) {
    console.log('login ran', userData);
    return this.http.post(this.apiUrl + '/login', userData);
  }

  logOut() {
    this.http.post( this.apiUrl + 'logout?acess_token=' + this.token, {} );
    window.sessionStorage.clear();
    this.router.navigateByUrl('');

  }

  saveFavorite (favorite) {
    return this.http.post( this.apiUrl + '/' + this.userId + '/favorites?access_token=' + this.token, favorite);
  }
}
