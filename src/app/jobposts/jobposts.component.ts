import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DetailsComponent } from '../employer/emp-dashboard/details/details.component';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-jobposts',
  templateUrl: './jobposts.component.html',
  styleUrls: ['./jobposts.component.scss']
})
export class JobpostsComponent implements OnInit {
jobs: any;

 constructor(private data: DataService, public dialog: MatDialog){ }

  ngOnInit() {
     this.data.getJobs().subscribe((res:any)=>console.log(this.jobs = res.jobs))
    }
    openDetails(){
      this.dialog.open(DetailsComponent);
      
    }
  }

