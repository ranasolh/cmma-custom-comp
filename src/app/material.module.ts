import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';

import {MatStepperModule} from '@angular/material/stepper';

import {MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  exports: [
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule
   
  ]
})
export class MaterialModule {}