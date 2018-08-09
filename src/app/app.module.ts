import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { JobpostsComponent } from './shared/jobposts/jobposts.component';
import {SharedModule} from './shared/shared.module';
import { EmployerModule } from './employer/employer.module';
import { HttpClientModule } from '@angular/common/http';
import {StudentModule} from './student/student.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JobpostsComponent,
    ProfileComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    EmployerModule,
    HttpClientModule,
    StudentModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
