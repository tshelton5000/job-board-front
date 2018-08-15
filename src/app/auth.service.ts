import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userType: string = '';
  sessionToken: string = 'test';


 
  hasToken() {
    if (this.sessionToken) {
      return true;
    } else {
      return false;
    }
  }

  employerUser() {
    this.userType = 'Employer';
  }

  studentUser() {
    this.userType = 'Student';
  }

  isStudent() {
    if (this.userType === 'Student') {
      return true;
    }
    else {
      return false;
    }
  }

  isEmployer() {
    if (this.userType == "Employer") {
      return true;
    }
    else {
      return false;
    }
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`http://localhost:3000/employer/signin`, {employer: {email: email, password: password}} )
  }

  // getToken(){
  //   return sessionStorage.getItem('token')
  // }
  // loggedIn(){
  //   return !!sessionStorage.getItem('token')
  // }

 

}






