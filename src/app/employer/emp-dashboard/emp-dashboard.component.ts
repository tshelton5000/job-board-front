import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';
import { JobsUpdateComponent } from '../jobs-update/jobs-update.component'; 
import { ModalService } from '../../module/modal.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {
  private bodyText: string;

  users$: Object;

  constructor(private data: DataService, private modalService: ModalService){ }

  ngOnInit() {
    this.bodyText = "";
  }
 
  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
}

