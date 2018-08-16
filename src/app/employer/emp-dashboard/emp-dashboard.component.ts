import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs'; 
import { } from '../../shared/job-details/job-details.component'
@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  jobs$: Object =[];
  modal: boolean = false;

OpenModal(){
this.modal = true
}

 constructor(private data: DataService){ }

  ngOnInit() {this.data.getJobs().subscribe(
    data=> (this.jobs$ = data)));
  }
 }


