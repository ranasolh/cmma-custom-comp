import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MaterialModule} from './material.module' ;
import { TranslateModule} from '@ngx-translate/core';
import {CustomListComponent} from '../app/custom-components/custom-list/custom-list.component'


@NgModule({
 
 
  declarations:[CustomListComponent] ,
  imports:[MaterialModule,IonicModule,TranslateModule,FormsModule],
  exports:[CustomListComponent,MaterialModule,IonicModule,TranslateModule,FormsModule]
})
export class SharedModule { }
