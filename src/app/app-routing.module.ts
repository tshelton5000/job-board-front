import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpDashboardComponent } from './employer/emp-dashboard/emp-dashboard.component'


const routes: Routes = [
  {path:'employer',
  component: EmpDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
