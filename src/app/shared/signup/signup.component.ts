import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
  first_name:'',
  last_name:'',
  company_name:'',
  email:'',
  password:'',
  confirmPass:'',
  }
  token: any

  constructor(public authService: AuthService, private _router: Router) { }

  Signupe () {
    console.log(this.user.password)
    console.log(this.user.confirmPass)
    if (this.user.password !== this.user.confirmPass){
      alert("Please make sure Passwords match")
    }else{
    this.authService.signupe(this.user).subscribe((res: any) => { 
      this.authService.userObject = res.employer;
      this.token = res.sessionToken
      sessionStorage.setItem('token', this.token)
      this._router.navigate(['/employer'])
    },
    err => console.log(err)
  )
}}
  Signups () {
    if (this.user.password !== this.user.confirmPass){
      alert("Please make sure Passwords match")
    }else{
    this.authService.signups(this.user).subscribe ( (res: any) => {
      this.authService.userObject = res.student;
      this.token = res.sessionToken
      sessionStorage.setItem('token', this.token)
      this._router.navigate(['/jobposts'])
    },
    err => console.log(err)
  )
  }}

  ngOnInit() {
  }

}
