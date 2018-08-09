import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';
import {ProfileComponent} from '../profile/profile.component';

const sharedRoutes: Routes = [
    {path:'profile', component: ProfileComponent},
    {path:'**', component: PagenotfoundComponent},
];

@NgModule({
    imports: [RouterModule.forChild(sharedRoutes)],
    exports: [RouterModule]
})

export class SharedRoutingModule {}