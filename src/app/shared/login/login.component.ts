import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  testVariables(){
    console.log(this.email);
    console.log(this.password);
  }

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
