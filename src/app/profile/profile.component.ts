import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    first_name:'',
    last_name:'',
    company_name:'',
    email:''
    }

  constructor(private data: DataService) { }


// getThisUser(){
//   this.data.getUser()
//   console.log(this.user)
// }

  ngOnInit() {
    // this.getThisUser()
    // console.log(this.user)
}
}