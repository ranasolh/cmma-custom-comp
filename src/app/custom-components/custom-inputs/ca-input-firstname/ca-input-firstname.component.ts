import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CaInputComponent } from '../ca-input/ca-input.component';

@Component({
  selector: 'app-ca-input-firstname',
  templateUrl: './ca-input-firstname.component.html',
  styleUrls: ['./ca-input-firstname.component.scss'],
})
export class CaInputFirstnameComponent extends CaInputComponent implements OnInit {

  @Input() parentFormGroup : FormGroup;
  
  constructor() { super() }

  ngOnInit() {}

}
