import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../../data.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  jobId: any;
  jobs: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataService: DataService) { }


  ngOnInit() {
      this.jobId=this.dataService.retrieveJobId();
      console.log(this.jobId)
      this.dataService.getJobById(this.jobId).subscribe((res:any)=> console.log(this.jobs = res))
    }

  }

 


