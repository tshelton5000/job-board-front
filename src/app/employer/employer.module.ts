import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { EmployerRoutingModule} from './employer-routing.module';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { JobsUpdateComponent } from './jobs-update/jobs-update.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    EmployerRoutingModule,
  ],
  declarations: [EmpDashboardComponent, JobsUpdateComponent]
})
export class EmployerModule { }
