import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Router } from "@angular/router"; 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
sessionToken: string = ''
  user:{
  fName:  '';
  lName:  '';
  company: '';
  email:  '';
  password:  '';
  confirmPass:  '';
}
  
constructor(public authService: AuthService, private _router: Router) { }
  userSignup(){
    this.authService.signups(this.user).subscribe(res => {sessionStorage.setItem('sessionToken', this.sessionToken)
  this._router.navigate(['/jobposts'])},
  err => console.log(err)
  )
  }

 ngOnInit() {
  }
}
