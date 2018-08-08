import {NgModule} from '@angular/core';
import {SharedRoutingModule} from './shared-routing.module';
import {MaterialModule} from '../material.module';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

@NgModule({
    imports: [
        SharedRoutingModule,
        MaterialModule,
    ],
    exports: [],
    declarations: [
        PagenotfoundComponent,
    ]
})

export class SharedModule {}