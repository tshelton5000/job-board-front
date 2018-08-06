import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const studentRoutes: Routes = [
];

@NgModule({
    imports: [RouterModule.forChild(studentRoutes)],
    exports: [RouterModule]
})

export class StudentRoutingModule {}