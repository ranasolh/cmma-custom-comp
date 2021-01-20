import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRefDirective } from './directive/input-ref.directive';



@NgModule({
  declarations: [InputRefDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
