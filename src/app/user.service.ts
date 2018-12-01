import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string = "http://meanstack-2018-5-alex-phortonssf.c9users.io:8080/api/AppUsers"
  userData:any;
  constructor(private http:HttpClient, private router:Router) { }

  register(userData:any){
    return this.http.post(this.apiUrl, userData)
  }

  login(userData:any){
    console.log("login ran",userData)
    return this.http.post(this.apiUrl +"/login", userData);
  }

  logOut(){
    window.sessionStorage.clear();
    this.router.navigateByUrl('');
  }
}
