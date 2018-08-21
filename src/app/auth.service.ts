import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {APIURL} from '../environments/environment.prod';
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

  removeUserObj(){
    this.userObject = null;
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

  constructor(private http: HttpClient, private _router: Router) { }

  getToken() {
    return localStorage.getItem('token')
  }

  logine(email: string, password: string) {
    return this.http.post(`${APIURL}/employer/signin`, {employer: {email: email, password: password}} )
  }
  logins(email: string, password: string) {
    return this.http.post(`${APIURL}/student/signin`, {student: {email: email, password: password}} )
  }

  logout() {
    sessionStorage.removeItem('token')
    this._router.navigate(['/'])
  }

  signupe(employer) {
    return this.http.post(`${APIURL}/employer/create`, {employer: {first_name: employer.first_name, last_name: employer.last_name, email: employer.email, password: employer.password, confirmPass: employer.confirmPass, company_name: employer.company_name}})
  }

  signups(student) {
    return this.http.post(`${APIURL}/student/create`, {student: {first_name: student.first_name, last_name: student.last_name, email: student.email, password: student.password, confirmPass: student.confirmPass}})
  }

  getUserData() {
    if (this.isStudent()) {
      return this.http.get(`${APIURL}/student/${this.userObject.id}`)
    }
    else {
      return this.http.get(`${APIURL}/employer/${this.userObject.id}`)
    }
  }

  updateUserData(user)  {
    if (this.isStudent()) {
      return this.http.put(`${APIURL}/student/update/${this.userObject.id}`, {student: {first_name: user.first_name, last_name: user.last_name, password: user.password, resume: user.resume, email: this.userObject.email}})
    } else {
      return this.http.put(`${APIURL}/employer/update/${this.userObject.id}`, {employer: {first_name: user.first_name, last_name: user.last_name, password: user.password, company_name: user.company_name, email: this.userObject.email}})
    }
  }

  deleteUserData()  {
    if (this.isStudent()){
      return this.http.delete(`${APIURL}/student/delete/${this.userObject.id}`)
    } else {
      return this.http.delete(`${APIURL}/employer/delete/${this.userObject.id}`)
    }
  }
}