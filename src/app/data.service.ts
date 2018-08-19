import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Jobs } from './models/jobs';
import { Router } from '@angular/router';


const url = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})

export class DataService {
  empJobsObject: any;
  token: string = sessionStorage.getItem('token')


  constructor(private http: HttpClient) { }

  getToken() {
    return sessionStorage.getItem('token')
  }
  getJobs(){
    return this.http.get(`${url}/job`)
  }
  createJobs(jobs: Jobs){
    return this.http.post(`${url}/job/create`, jobs)
  }
  // updateJobs(){
  //   return this.http.put(`http://localhost:3000`)
  // }
}
