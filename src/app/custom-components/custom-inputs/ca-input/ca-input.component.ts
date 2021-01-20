import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseInputComponent } from '../base-input/base-input.component';

@Component({
  selector: 'app-ca-input',
  templateUrl: './ca-input.component.html',
  styleUrls: ['../css/cs.css'],
})
export class CaInputComponent extends BaseInputComponent {

  @Input() placeholder:string;
  @Input() type:string;
  // @Input() validations:  { [index: string]: string};
  // @Input() pattern:string;
  @Input()
   parentFormGroup : FormGroup;
   @Input() min:number
   @Input() max:number
   
  constructor() { super(); }

  ngOnInit(){
   
   
  }

}
