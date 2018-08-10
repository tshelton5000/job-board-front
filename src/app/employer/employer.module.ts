import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
 @NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
=======
import { MaterialModule } from '../material.module';
import { EmployerRoutingModule} from './employer-routing.module';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { JobsUpdateComponent } from './jobs-update/jobs-update.component';
import { JobsCreateComponent } from './emp-dashboard/jobs-create/jobs-create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    EmployerRoutingModule,
    SharedModule

  ],
  declarations: [EmpDashboardComponent, JobsUpdateComponent, JobsCreateComponent]
>>>>>>> emp update
})
export class EmployerModule { }