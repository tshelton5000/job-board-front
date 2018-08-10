import { NgModule } from '@angular/core';
import {
<<<<<<< HEAD
    MatToolbarModule, MatButtonModule
=======
    MatToolbarModule, MatButtonModule, MatCardModule, MatSelectModule, 
>>>>>>> emp update
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
      
    ]
})

export class MaterialModule {}