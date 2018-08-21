import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';




const url = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})

export class DataService {
  empJobsObject: any;
  token: string = sessionStorage.getItem('token')
  empJobId: number;


  constructor(private http: HttpClient, private authService: AuthService) { }
  job: any;
  jobId: number;
  
  


  getToken() {
    return sessionStorage.getItem('token')
  }
  getJobs(){
    return this.http.get(`${url}/job`)
    // .subscribe((res:any)=>{
    //   this.job = res.jobs
    }
  
  storeJobs(){
    sessionStorage.setItem('jobs', this.job)
  }
  createJobs(job){
    return this.http.post(`${url}/job/create`, {job: {job_title: job.job_title, job_description: job.job_description, company_name: job.company_name, company_address:job.company_address, company_site:job.company_site, job_type:job.job_type, employerID: job.employerID }})
  }
  updateJobs(job){
    return this.http.put(`${url}/job/update/${this.empJobId}`, {job: {job_title: job.job_title, job_description: job.job_description, job_type: job.job_type, company_name:job.company_name, company_site:job.company_website, company_address:job.company_address}})
  }
  getEmpJobs(){
    return this.http.get(`${url}/job/all/${this.authService.userObject.id}`)
  }

  getOneJob(){
    return this.http.get(`${url}/job/${this.authService.userObject.id}/${this.empJobId}`)
  }

  storeEmpJobId(number){
    this.empJobId = number;
    console.log(this.empJobId);
  }

  deleteEmpJob(){
    return this.http.delete(`${url}/job/delete/${this.empJobId}`)
  }

  returnEmpJobId(){
    return this.empJobId;

    // return this.http.post(`${url}/job/create`, {job: {job_title: job.job_title, job_description: job.job_description, company_name: job.company_name, company_address:job.company_address, company_site:job.company_site, job_type:job.job_type, employerID: job.employerID }}
    // )}
  }

  getJobById(id){
    return this.http.get(`${url}/job/${id}`)
  }
 
  retrieveJobId(){
    return this.jobId;
  }

getJobId(number){
  this.jobId = number

  }
  
}
