import {NgModule} from '@angular/core';
import {SharedRoutingModule} from './shared-routing.module';
import {MaterialModule} from '../material.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedRoutingModule,
        MaterialModule,
        CommonModule,
        FormsModule
    ],
    exports: [],
    declarations: [AuthComponent, LoginComponent, SignupComponent]
})

export class SharedModule {}