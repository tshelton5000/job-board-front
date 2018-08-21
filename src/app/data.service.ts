import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {APIURL} from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  empJobsObject: any;
  token: string = sessionStorage.getItem('token')
  empJobId: number;
  job: any;
  jobId: number;
  
  constructor(private http: HttpClient, private auth: AuthService) { }


  getToken() {
    return sessionStorage.getItem('token')
  }
  getJobs(){
    return this.http.get(`${APIURL}/job`)
  }
  createJobs(job){
    return this.http.post(`${APIURL}/job/create`, {job: {job_title: job.job_title, job_description: job.job_description, company_name: job.company_name, company_address:job.company_address, company_site:job.company_site, job_type:job.job_type, employerID: job.employerID }})
  }
  updateJobs(job){
    return this.http.put(`${APIURL}/job/update/${this.empJobId}`, {job: {job_title: job.job_title, job_description: job.job_description, job_type: job.job_type, company_name:job.company_name, company_site:job.company_website, company_address:job.company_address}})
  }
  getEmpJobs(){
    console.log(this.auth.userObject);
    return this.http.get(`${APIURL}/job/all/${this.auth.userObject.id}`)
  }

  getOneJob(){
    return this.http.get(`${APIURL}/job/${this.auth.userObject.id}/${this.empJobId}`)
  }

  storeEmpJobId(number){
    this.empJobId = number;
    console.log(this.empJobId);
  }

  deleteEmpJob(){
    return this.http.delete(`${APIURL}/job/delete/${this.empJobId}`)
  }

  returnEmpJobId(){
    return this.empJobId;
  }

  getEmployerJobs(){
    console.log(this.auth.userObject)
    return this.http.get(`${APIURL}/job/all/${this.auth.userObject.id}`)
  }

  getJobById(id){
    return this.http.get(`${APIURL}/job/${id}`)
  }
 
  retrieveJobId(){
    return this.jobId;
  }

getJobId(number){
  this.jobId = number

  }
}