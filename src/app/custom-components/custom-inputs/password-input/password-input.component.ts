import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CaInputComponent } from '../ca-input/ca-input.component';


@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['../css/password.css'],
})
export class PasswordInputComponent  extends CaInputComponent {

  @Input()
   parentFormGroup : FormGroup;
   
  constructor() {  super(); }

  ngOnInit() {}

}
