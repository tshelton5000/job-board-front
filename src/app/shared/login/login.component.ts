import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { RouterLink } from '@angular/router';
import { Router } from "@angular/router"; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  token: any;
  err: any;

  constructor(public authService: AuthService, private _router: Router) { }

 handleSubmite(){
  if (this.email === "" || this.password === "" ){
    alert("Please fill out all required fields")
  }else{
   this.authService.logine(this.email, this.password)
   .subscribe((res: any) => { 
      console.log(res)
      this.authService.userObject = res.employer;
      this.token = res.sessionToken
      sessionStorage.setItem('token', this.token)
      this._router.navigate(['/jobposts'])
  },

  err => console.log(err)   
   )
}
 }

   handleSubmits(){
     if (this.email === "" || this.password === "" ){
       alert("Please fill out all required fields")
     }else{
    this.authService.logins(this.email, this.password)
    .subscribe((res: any) => { 
      console.log(res)
      this.authService.userObject = res.student;
      this.token = res.sessionToken
      sessionStorage.setItem('token', this.token)
      this._router.navigate(['/jobposts'])
   },
   err => alert("Email or Password is incorrect")
    )}
  }
}
