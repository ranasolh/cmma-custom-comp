import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CaInputComponent } from '../ca-input/ca-input.component';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['../css/number.css'],
})
export class NumberInputComponent extends CaInputComponent {

  @Input() parentFormGroup : FormGroup;
  
  constructor() {  super();}

  ngOnInit() {}

}
