import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Jobs } from './models/jobs';
import { AuthService } from './auth.service';



const url = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})

export class DataService {
  token: string = sessionStorage.getItem('token')


  constructor(private http: HttpClient, private auth: AuthService) { }

  getToken() {
    return sessionStorage.getItem('token')
  }
  getJobs(){
    return this.http.get(`${url}/job`)
  }
  createJobs(job){
    return this.http.post(`${url}/job/create`, {job: {job_title: job.job_title, job_description: job.job_description, company_name: job.company_name, company_address:job.company_address, company_site:job.company_site, job_type:job.job_type, employerID: job.employerID }}
    )}

  getEmployerJobs(){
    // console.log(this.auth.userObject)
    return this.http.get(`${url}/job/all/${this.auth.userObject.id}`)
 
    
  }
  }

