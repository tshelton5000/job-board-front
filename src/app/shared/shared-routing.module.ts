import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';

const sharedRoutes: Routes = [
    {path: '', component: AuthComponent},
    {path: 'studentSignup', component: SignupComponent},
    {path: 'employerSignup', component: SignupComponent},
    {path: 'studentLogin', component: LoginComponent},
    {path: 'employerLogin', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forChild(sharedRoutes)],
    exports: [RouterModule]
})

export class SharedRoutingModule {}