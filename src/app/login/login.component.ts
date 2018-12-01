import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {username:"", password:""};

  constructor(public _user:UserService, private router:Router) { }

  onSubmit(){
    console.log("submit fired",this.user)
    return this._user.login(this.user).subscribe(res => {
      console.log(res);
      window.sessionStorage.setItem('token',res.token);
      window.sessionStorage.setItem('userId',res.userId);
      this._user.userData = res.userData;
      this.router.navigateByUrl('dashboard');
    })
    // if(this.user.username === "test" && this.user.password === "test"){
    //   console.log("logging in")
    //   this.router.navigate(['dashboard'])
    // }

  }

}
