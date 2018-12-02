import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {email: '', password: ''};

  constructor(public _userServ: UserService, private router: Router) { }

  onSubmit() {
    console.log('submit ran', this.user);
    return this._userServ.login(this.user).
    subscribe((res: any) => {
      console.log(res);
      window.sessionStorage.setItem('token', res.token);
      window.sessionStorage.setItem('userId', res.userId);
      this._userServ.userData = res.userData;
      this.router.navigateByUrl('dashboard');
    });
  }

}
