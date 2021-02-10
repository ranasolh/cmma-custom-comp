import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CaInputComponent } from '../ca-input/ca-input.component';

@Component({
  selector: 'app-ca-input-lastname',
  templateUrl: './ca-input-lastname.component.html',
  styleUrls: ['./ca-input-lastname.component.scss'],
})
export class CaInputLastnameComponent  extends CaInputComponent implements OnInit {

  @Input() parentFormGroup : FormGroup;
  
  constructor() { super();}

  ngOnInit() {}

}
