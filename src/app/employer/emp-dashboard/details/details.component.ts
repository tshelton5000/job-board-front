import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import {DataService} from '../../../data.service';

import { JobpostsComponent } from '../../../jobposts/jobposts.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  jobId: any;
  job = {
    job_title: '',
    company_name: '',
    job_description:'',
    company_address: '',
    job_type: ''
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataService: DataService) { }

  ngOnInit() {
      this.jobId=this.dataService.retrieveJobId();
      console.log(this.jobId)
      
      this.dataService.getJobById(this.jobId)
      .subscribe((res:any)=> {
        this.job = res.id;
        console.log(this.job);
      })
  }

}

 


