import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { SharedRoutingModule } from '../shared/shared-routing.module'
import { JobpostsComponent } from '../jobposts/jobposts.component';


const employerRoutes: Routes = [
    {
        path:'employer',
    component: EmpDashboardComponent
    } ,  
    {
        path: 'student',
        component: JobpostsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(employerRoutes)],
    exports: [RouterModule]
})

export class EmployerRoutingModule {}