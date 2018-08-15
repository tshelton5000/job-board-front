import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { RouterLink } from '../../../../node_modules/@angular/router';
import { Router } from "@angular/router"; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  sessionToken: string = '';

  constructor(public authService: AuthService, private _router: Router) { }

employerHandleSubmit(){
   this.authService.logine(this.email, this.password)
   .subscribe(res => { sessionStorage.setItem('sessionToken', this.sessionToken)
    this._router.navigate(['/jobposts'])
  },
  err => console.log(err)   
   )
}

studentHandleSubmit(){
    this.authService.logins(this.email, this.password)
    .subscribe(res => {sessionStorage.setItem('sessionToken', this.sessionToken)
    this._router.navigate(['/jobposts'])
  },
  err => console.log(err)
  )
}  

ngOnInit() {

}

  // login(){
  //   this.authService.login(this.email, this.password, this.role).subscribe(
  //     res =>
  //   )
  // }

}
