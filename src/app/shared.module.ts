import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MaterialModule} from './material.module' ;
import { TranslateModule} from '@ngx-translate/core';

import {CustomAutocompleteComponent} from '../app/custom-components/custom-select/custom-autocomplete/custom-autocomplete.component' ;
import {CustomSelectComponent} from './custom-components/custom-select/custom-select/custom-select.component' ;


@NgModule({
 
 
  declarations:[CustomAutocompleteComponent,CustomSelectComponent] ,
  imports:[MaterialModule,IonicModule,CommonModule ,TranslateModule,FormsModule,ReactiveFormsModule],
  exports:[CustomAutocompleteComponent,CustomSelectComponent,MaterialModule,IonicModule,CommonModule ,TranslateModule,FormsModule,ReactiveFormsModule]
})
export class SharedModule { }
