import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userType: string = 'Student';

  employerUser() {
    this.userType = 'Employer';
  }

  studentUser(){
    this.userType = 'Student';
  }

  isStudent(){
    if (this.userType === 'Student'){
      return true;
    }
    else {
      return false;
    }
  }

  constructor() { }
}
