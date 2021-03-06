import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { JobpostsComponent } from './jobposts/jobposts.component';
import {SharedModule} from './shared/shared.module';
import {StudentModule} from './student/student.module';

import { EmployerModule } from './employer/employer.module'

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DetailsComponent } from './employer/emp-dashboard/details/details.component';
import { UpdateComponent } from './employer/emp-dashboard/update/update.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JobpostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    StudentModule,
    EmployerModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule,
    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
  entryComponents: [DetailsComponent, UpdateComponent] 

})
export class AppModule { }