import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  showEmpDash(){
    if (sessionStorage.token && !this.auth.isStudent()){
      return true;
    } else {
      return false;
    }
  }

  showStudentDash(){
    if(sessionStorage.token && !this.auth.isEmployer()){
      return true;
    } else {
      return false;
    }
  }
  
  showProfileButton(){
    if (sessionStorage.token){
      return true;
    } else {
      return false;
    }
  }

  showNavButton(){
    if (sessionStorage.token){
      return true;
    } else {
      return false;
    }
  }
  showLogoutButton(){
    if (sessionStorage.token){
      return true;
    } else {
      return false;
    }
  }
  logout (){
    this.auth.logout()
  }
  ngOnInit() {
  }

}
