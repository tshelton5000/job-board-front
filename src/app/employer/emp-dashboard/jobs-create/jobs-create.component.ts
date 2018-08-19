import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../../../../../node_modules/rxjs';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent implements OnInit {
  job = {
  job_title:'',
  job_description:'',
  company_name:'',
  employerID:'',
  companySite:'',
  companyAddress:'',
  jobType:''
} 

  constructor(private data: DataService) { }

  ngOnInit() {
  }
   createNewJob(){
     this.data.createJobs(this.job).subscribe((res:any) => console.log(this.job = res.job))
  }
}
