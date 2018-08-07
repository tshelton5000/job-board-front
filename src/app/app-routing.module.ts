import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerRoutingModule } from "./employer/employer-routing.module"
import { JobpostsComponent } from './shared/jobposts/jobposts.component';

const routes: Routes = [
  {
    path: 'posts',
    component: JobpostsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EmployerRoutingModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
