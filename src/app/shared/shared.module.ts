import {NgModule} from '@angular/core';
import {SharedRoutingModule} from './shared-routing.module';
import {MaterialModule} from '../material.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { JobDetailsComponent } from './job-details/job-details.component';


@NgModule({
    imports: [
        SharedRoutingModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        


    ],
    
    exports: [JobDetailsComponent],

    declarations: [AuthComponent, LoginComponent, SignupComponent, PagenotfoundComponent, JobDetailsComponent]
})

export class SharedModule {}