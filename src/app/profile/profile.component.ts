import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router"; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userObj = {
    first_name:'',
    last_name:'',
    password:'',
    confirmPass:'',
    resume:'',
    company_name:''
  }

  constructor(private userInfo: AuthService, private router: Router) { }

  grabUser(){
    this.userInfo.getUserData()
      .subscribe((res:any) => {
        console.log(this.userInfo.userType)
        if (this.userInfo.isStudent()){
          this.userObj.first_name = res.student.first_name;
          this.userObj.last_name = res.student.last_name;
          this.userObj.resume = res.student.resume;
        } else {
          this.userObj.first_name = res.employer.first_name;
          this.userObj.last_name = res.employer.last_name;
          this.userObj.company_name = res.employer.company_name;
        }
        console.log(this.userObj)
      })
  }

  removeUser(){
    this.userInfo.deleteUserData()
      .subscribe(res => {
        console.log(res);
        this.router.navigate([''])
      })
  }
 
  updateProfile(){
    this.userInfo.updateUserData(this.userObj)
      .subscribe(res => {
        console.log(res)
        this.grabUser()
      })
  }

  showUser(){
    console.log(this.userObj);
  }

  ngOnInit() {
    this.grabUser()
  }

}
