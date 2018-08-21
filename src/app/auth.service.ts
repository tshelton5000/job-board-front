import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userType: string = '';
  sessionToken: string = '';
  userObject: any;

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



  // storeUserObject(
  // }



  constructor(private http: HttpClient, private _router: Router) { }

  // getToken() {
  //   return localStorage.getItem('token')
  // }

  logine(email: string, password: string) {
    return this.http.post(`http://localhost:3000/employer/signin`, {employer: {email: email, password: password}} )
  }
  logins(email: string, password: string) {
    return this.http.post(`http://localhost:3000/student/signin`, {student: {email: email, password: password}} )
  }

  logout() {
    sessionStorage.removeItem('token')
    this._router.navigate(['/'])
  }

  signupe(employer) {
    return this.http.post(`http://localhost:3000/employer/create`, {employer: {first_name: employer.first_name, last_name: employer.last_name, email: employer.email, password: employer.password, confirmPass: employer.confirmPass, company_name: employer.company_name}})
  }

  signups(student) {
    return this.http.post(`http://localhost:3000/student/create`, {student: {first_name: student.first_name, last_name: student.last_name, email: student.email, password: student.password, confirmPass: student.confirmPass}})
  }

  getUserData() {
    if (this.isStudent()) {
      return this.http.get(`http://localhost:3000/student/${this.userObject.id}`)
    }
    else {
      return this.http.get(`http://localhost:3000/employer/${this.userObject.id}`)
    }
  }

  updateUserData(user)  {
    if (this.isStudent()) {
      return this.http.put(`http://localhost:3000/student/update/${this.userObject.id}`, {student: {first_name: user.first_name, last_name: user.last_name, password: user.password, resume: user.resume, email: this.userObject.email}})
    } else {
      return this.http.put(`http://localhost:3000/employer/update/${this.userObject.id}`, {employer: {first_name: user.first_name, last_name: user.last_name, password: user.password, company_name: user.company_name, email: this.userObject.email}})
    }
  }

  deleteUserData()  {
    if (this.isStudent()){
      return this.http.delete(`http://localhost:3000/student/delete/${this.userObject.id}`)
    } else {
      return this.http.delete(`http://localhost:3000/employer/delete/${this.userObject.id}`)
    }
  }
}