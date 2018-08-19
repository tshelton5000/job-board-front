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

  constructor(@Inject(MAT_DIALOG_DATA) private jobInfo: DataService, private router:Router
  ) { }

  ngOnInit() {
  }

}
