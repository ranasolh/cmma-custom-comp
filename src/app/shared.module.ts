import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MaterialModule} from './material.module' ;
import { TranslateModule} from '@ngx-translate/core';
import {CustomListComponent} from '../app/custom-components/custom-list/custom-list.component'


@NgModule({
 
 
  declarations:[CustomListComponent] ,
  imports:[MaterialModule,IonicModule,CommonModule ,TranslateModule,FormsModule,ReactiveFormsModule],
  exports:[CustomListComponent,MaterialModule,IonicModule,CommonModule ,TranslateModule,FormsModule,ReactiveFormsModule]
})
export class SharedModule { }
