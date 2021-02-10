import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CaInputComponent } from '../ca-input/ca-input.component';

@Component({
  selector: 'app-ca-input-password',
  templateUrl: './ca-input-password.component.html',
  styleUrls: ['./ca-input-password.component.scss'],
})
export class CaInputPasswordComponent extends CaInputComponent implements OnInit {

  @Input()
  parentFormGroup : FormGroup;
  @Input() value:string | number ;
  @Output() valueChange = new EventEmitter<string| number>();
  
 constructor() {  super(); }

 ngOnInit() {}

 Inputchange(value)
 {
   super.Inputchange(value);
   // this.value=value;
   
   // this.valueChange.emit(this.value);
  
 }


}
