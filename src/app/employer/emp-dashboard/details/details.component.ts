import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import {DataService} from '../../../data.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataService:DataService) { }

  ngOnInit() {
    // this.data.getJobs().subscribe((res:any)=>console.log(this.jobs = res.jobs))
  }

}
