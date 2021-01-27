import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';




@NgModule({
  exports: [
    
   
   
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
   
  ]
})
export class MaterialModule {}