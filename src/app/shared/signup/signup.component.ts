import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

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
  

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }


}
