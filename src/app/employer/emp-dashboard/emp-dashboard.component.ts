import { Component, OnInit, } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs'; 
import {MatDialog} from '@angular/material';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
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

 constructor(private data: DataService, public dialog: MatDialog){ }

  ngOnInit() {this.data.getUsers().subscribe(
    data=> this.users$ = data);
  }
  openDetails(){
    this.dialog.open(DetailsComponent);
    
  }

  openUpdate(){
    this.dialog.open(UpdateComponent);
  }
 }



