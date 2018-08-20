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
  createNewJob(){
    if (this.job.job_title === "" || this.job.job_description === ""){
      alert("Please fill in the required fields")
    }else{
    this.data.createJobs(this.job).subscribe((res:any) => console.log(this.job = res.job))
    //window.location.reload();
 }}
  ngOnInit() {
    this.data.getEmployerJobs().subscribe((res:any) => console.log(res))
  }
}
