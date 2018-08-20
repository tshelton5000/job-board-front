import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { RouterLink } from '@angular/router';
import { Router } from "@angular/router"; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  token: any

  constructor(public authService: AuthService, private _router: Router) { }

 handleSubmite(){
   this.authService.logine(this.email, this.password)
   .subscribe((res: any) => { 
      console.log(res)
      this.authService.userObject = res.employer;
      this.token = res.sessionToken
      sessionStorage.setItem('token', this.token)
      this._router.navigate(['/jobposts'])
  },
  err => console.log(err)
   )}

   handleSubmits(){
    this.authService.logins(this.email, this.password)
    .subscribe((res: any) => { 
      console.log(res)
      this.authService.userObject = res.student;
      this.token = res.sessionToken
      sessionStorage.setItem('token', this.token)
      this._router.navigate(['/jobposts'])
   },
   err => console.log(err)
    )}

  ngOnInit() {
  }

}
