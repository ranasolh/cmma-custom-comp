
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CaInputComponent } from '../ca-input/ca-input.component';

@Component({
  selector: 'app-ca-input-username',
  templateUrl: './ca-input-username.component.html',
  styleUrls: ['./ca-input-username.component.scss'],
})
export class CaInputUsernameComponent extends CaInputComponent implements OnInit {

  @Input() parentFormGroup : FormGroup;

  constructor() {  super(); }

  ngOnInit() {}

}
