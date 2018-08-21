import { Component, OnInit, Inject } from '@angular/core';
import{ MAT_DIALOG_DATA } from '@angular/material';
import {DataService} from '../../../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

jobsObj = {
  job_title: '',
  company_name:'',
  job_description:'',
  company_website:'',
  job_type:'',
  company_address:''
}
  //@Inject(MAT_DIALOG_DATA)
  constructor(private jobInfo: DataService, private router:Router) { }

  ngOnInit() {
    // call the job id backend endpoint from data service
    this.getOneId();
  }

  getOneId(){
    this.jobInfo.getOneJob()
    .subscribe((res:any) => {
      this.jobsObj.job_title = res.job.job_title;
      this.jobsObj.company_name = res.job.company_name;
      this.jobsObj.job_description = res.job.job_description;
      this.jobsObj.company_website = res.job.company_site;
      this.jobsObj.job_type = res.job.job_type;
      this.jobsObj.company_address = res.job.company_address
    })
  }

  updateEmpJob(){
    this.jobInfo.updateJobs(this.jobsObj)
    .subscribe(res => {
      console.log(res)
      this.getOneId()
    })
  }

  deleteEmpJob(){
    this.jobInfo.deleteEmpJob()
    .subscribe(res => {
      console.log(res)
     
    })
  }
  
  

}
