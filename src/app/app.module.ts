import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import {MaterialModule} from './material.module';
import {SharedModule} from './shared/shared.module';
=======
import { MaterialModule } from './material.module';
import { JobpostsComponent } from './jobposts/jobposts.component';
>>>>>>> c5981469bbf93d288dcb76c6f595b1c8f7370628
=======
import { MaterialModule } from './material.module';
import { JobpostsComponent } from './jobposts/jobposts.component';
import {SharedModule} from './shared/shared.module';

>>>>>>> d16ad9b5332c9d1a6a3c71c80cc1093475fe2a84

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JobpostsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
<<<<<<< HEAD
<<<<<<< HEAD
    SharedModule
=======
    
>>>>>>> c5981469bbf93d288dcb76c6f595b1c8f7370628
=======
    SharedModule

>>>>>>> d16ad9b5332c9d1a6a3c71c80cc1093475fe2a84
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
