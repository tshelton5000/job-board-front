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

  logine(email: string, password: string) {
    return this.http.post(`http://localhost:3000/employer/signin`, {employer: {email: email, password: password}} )
  }

  logins(email: string, password: string){
    return this.http.post(`http://localhost:3000/student/signin`, {student: {email: email, password:password}})
  }

  signups(user){
    return this.http.post(`http://localhost:3000/student/create`, {user: {first_name: user.fName, last_name: user.lname, email:user.email, password:user.password}})
  }

//   signupe(user){
//     return 
//   }
}






