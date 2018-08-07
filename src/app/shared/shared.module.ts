import {NgModule} from '@angular/core';
import {SharedRoutingModule} from './shared-routing.module';
import {MaterialModule} from '../material.module';

@NgModule({
    imports: [
        SharedRoutingModule,
        MaterialModule
    ],
    exports: [],
    declarations: []
})

export class SharedModule {}