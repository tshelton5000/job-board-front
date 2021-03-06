import { Component, OnInit, } from '@angular/core';
import { DataService } from '../../data.service';
import {MatDialog} from '@angular/material';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { Observable } from 'rxjs'; 
import { Jobs } from '../../models/jobs';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

 
  modal: boolean = false;
  jobs: any;
 
OpenModal(){
this.modal = true
}

 constructor(private data: DataService, public dialog: MatDialog){ }

 
  ngOnInit() {
    
    this.data.getEmployerJobs().subscribe((res:any) => console.log(this.jobs = res.jobs))
}




openDetails(){
  this.dialog.open(DetailsComponent);
  
}

openUpdate(jobId){
  this.dialog.open(UpdateComponent);
  console.log(jobId);
  this.data.storeEmpJobId(jobId);
}

 }

