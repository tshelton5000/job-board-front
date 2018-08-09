import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';
import { JobsUpdateComponent } from '../jobs-update/jobs-update.component';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {
  private bodyText: string;

  users$: Object;

  constructor(private data: DataService){ }

  ngOnInit() {
    this.bodyText = "";
  }
}

