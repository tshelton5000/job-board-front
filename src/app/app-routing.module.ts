import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpDashboardComponent } from './employer/emp-dashboard/emp-dashboard.component'
import { JobpostsComponent } from './jobposts/jobposts.component';


const routes: Routes = [
  {path:'employer',
  component: EmpDashboardComponent}
,
  {path:'jobposts',
  component: JobpostsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
