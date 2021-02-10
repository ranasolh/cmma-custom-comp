import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CaInputComponent } from '../ca-input/ca-input.component';

@Component({
  selector: 'app-ca-input-number',
  templateUrl: './ca-input-number.component.html',
  styleUrls: ['./ca-input-number.component.scss'],
})
export class CaInputNumberComponent extends CaInputComponent  implements OnInit {

  @Input() parentFormGroup : FormGroup;
  @Input() value:string | number ;
  @Output() valueChange = new EventEmitter<string| number>();
  
  constructor() {  super();}

  ngOnInit() {}
  Inputchange(value)
  {
    super.Inputchange(value);
    // this.value=value;
    
    // this.valueChange.emit(this.value);
   
  }


}
