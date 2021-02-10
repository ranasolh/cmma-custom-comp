import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country'; 
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  exports: [
    
    HttpClientModule,
    MatSelectCountryModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
   
  ]
})
export class MaterialModule {}