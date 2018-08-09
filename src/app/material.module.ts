import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatButtonModule, MatCardModule,
} from '@angular/material';
import { PopupModule } from 'ng2-opd-popup'


@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        
        
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule
        
    ]
})

export class MaterialModule {}