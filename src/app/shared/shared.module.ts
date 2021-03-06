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
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from '../profile/profile.component';
import { LimitWord2Pipe } from './limit-word-2.pipe';


@NgModule({
    imports: [
        SharedRoutingModule,
        MaterialModule,
        CommonModule,
        FormsModule,
    ],
    
    exports: [JobDetailsComponent, FooterComponent, LimitWord2Pipe],

    declarations: [AuthComponent, LoginComponent, SignupComponent, PagenotfoundComponent, JobDetailsComponent, FooterComponent, ProfileComponent, LimitWord2Pipe]
})

export class SharedModule {}