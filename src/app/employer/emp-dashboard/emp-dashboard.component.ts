import { Component, OnInit, } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs'; 
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  users$: Object;
  modal: boolean = false;

OpenModal(){
this.modal = true
}

 constructor(private data: DataService){ }

  ngOnInit() {this.data.getUsers().subscribe(
    data=> this.users$ = data);
  }
 }
 @Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
 export class EmpDashboardComponents {
  constructor(public dialog: MatDialog) {}

  Details() {
    this.dialog.open(EmpDashboardComponentDetails, {
     width:'100vw', 
    });
  }
}




 @Component({
   selector: 'emp-dashboard-details',
   templateUrl: 'emp-dashboard-details.component.html',
 })
export class EmpDashboardComponentDetails{

}

