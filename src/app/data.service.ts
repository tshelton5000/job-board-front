import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Jobs } from './models/jobs';


const url = "http://localhost:3000"
const ID = ":id"
@Injectable({
  providedIn: 'root'
})

export class DataService {
  token: string = sessionStorage.getItem('token')
 

  constructor(private http: HttpClient) { }

  getToken() {
    return sessionStorage.getItem('token')
  }
  getJobs(){
    return this.http.get(`${url}/job`)
  }
  createJobs(job){
    return this.http.post(`${url}/job/create`, {job: {job_title: job.job_title, job_description:job.job_description, job_type:job.ob_type, company_name: job.company_name, company_site: job.company_site, company_address:job.company_address, EmployerId: job.EmployerId}});
  }
  getEmployer(id){
    return this.http.get(`${url}/employer/${ID}`, id)
  }
  // getUsers() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  // }
  // getUser(){
  //   if(user==="student"){
  //   return this.http.get("http://localhost:3000/student/:id")
  // } else {
  //   return this.http.get("http://localhost:3000/employer/:id")
  
  // }



}
