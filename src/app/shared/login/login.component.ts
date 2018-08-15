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
  token: any

  constructor(public authService: AuthService, private _router: Router) { }

 handleSubmite(){
   this.authService.logine(this.email, this.password)
   .subscribe((res: any) => { 
    this.token = res.sessionToken
    sessionStorage.setItem('token', this.token)
    this._router.navigate(['/jobposts'])
  console.log(this.token)
  },
  err => console.log(err)   
   )
}

studentHandleSubmit(){
    this.authService.logins(this.email, this.password)
    .subscribe(res => {sessionStorage.setItem('sessionToken', this.token)
    this._router.navigate(['/jobposts'])
  },
  err => console.log(err)
   )}

   handleSubmits(){
    this.authService.logins(this.email, this.password)
    .subscribe((res: any) => { 
     this.token = res.sessionToken
     sessionStorage.setItem('token', this.token)
     this._router.navigate(['/jobposts'])
   console.log(this.token)
   },
   err => console.log(err)
    )}




  ngOnInit() {
  }

  

}
