import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
} )
export class RegisterComponent {
  user = { firstName: '', lastName: '', email: '', password: '' };
  constructor ( public _user: UserService, private router: Router ) { }

  onSubmit () {
    console.log( 'submit fired', this.user );
    this._user.register( this.user ).subscribe( ( res: any ) => {
      console.log( res );
      window.sessionStorage.setItem( 'token', res.token );
      window.sessionStorage.setItem( 'userId', res.userId );
      this._user.userData = res.userData;
      this.router.navigateByUrl( 'dashboard' );
    } );
  }

}
