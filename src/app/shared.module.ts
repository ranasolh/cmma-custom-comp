import { NgModule } from '@angular/core';

import {CustomListComponent} from '../app/custom-components/custom-list/custom-list.component'


@NgModule({
 
  exports:[CustomListComponent]
})
export class SharedModule { }
