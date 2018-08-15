import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog,} from '@angular/material';


export interface DialogData {
  details: string;
}

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent{
  details: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(JobDetailsComponent, {
      width: '250px',
      data: {details: this.details}
    });
  

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.details = result;
  });
  }
  ngOnInit() {
}
}

