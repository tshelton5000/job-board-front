import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fName: string = '';
  lName: string = '';
  company: string = '';
  email: string = '';
  password: string = '';
  confirmPass: string = '';

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
