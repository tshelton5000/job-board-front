import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'


const url = "http://localhost:3000"
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
