import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  student:{
  fName:  '';
  lName:  '';
  company: '';
  email:  '';
  password:  '';
  confirmPass:  '';
}
  
  employer = {
  first_name:'',
  last_name:'',
  company_name:'',
  email:'',
  password:'',
  confirmPass:''
  }
  sessionToken: string = '';

  constructor(public authService: AuthService, private _router: Router) { }

  EmployerSignup () {
    this.authService.signupe(this.employer).subscribe ( res => {
      sessionStorage.setItem('sessionToken', this.sessionToken)
      this._router.navigate(['/jobposts'])
    },
    err => console.log(err)
  )
  }

  ngOnInit() {
  }


}
