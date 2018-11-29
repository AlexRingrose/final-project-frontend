import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {username:"", password:""};

  constructor(private router:Router) {

  }

  onSubmit(){
    console.log("submit fired",this.user)
    if(this.user.username === "test" && this.user.password === "test"){
      console.log("logging in")
      this.router.navigate(['dashboard'])
    }
  }

}
