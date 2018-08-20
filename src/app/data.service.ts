import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Jobs } from './models/jobs';
import { Router } from '@angular/router';
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

  getToken() {
    return sessionStorage.getItem('token')
  }
  getJobs(){
    return this.http.get(`${url}/job`)
  }
  createJobs(job){
    return this.http.post(`${url}/job/create`, {job: {job_title: job.job_title, job_description: job.job_description, company_name: job.company_name, company_address:job.company_address, company_site:job.company_site, job_type:job.job_type, employerID: job.employerID }})
  }
  updateJobs(job){
    return this.http.put(`${url}/job/update/${this.empJobId}`, {job: {job_title: job.job_title, job_description: job.job_description, job_type: job.job_type, company_name:job.company_name, company_site:job.company_website, company_address:job.company_address}})
  }
  getEmpJobs(){
    console.log(this.authService.userObject);
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
  }
}
