import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable'; 
import { Jobs } from '../../models/jobs';
@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  // jobs$: any;
  modal: boolean = false;
  jobs: any;

OpenModal(){
this.modal = true
}

 constructor(private data: DataService){ }

  ngOnInit() {this.data.getJobs().subscribe(
   (res: any) => console.log((this.jobs = res.jobs)));
}

 }


//  data => (console.log(this.jobs = data)));