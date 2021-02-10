import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CaInputComponent } from '../ca-input/ca-input.component';

@Component({
  selector: 'app-ca-input-email',
  templateUrl: './ca-input-email.component.html',
  styleUrls: ['./ca-input-email.component.scss'],
})
export class CaInputEmailComponent extends CaInputComponent implements OnInit
 
{
  @Input()   parentFormGroup : FormGroup;

  constructor() { super();}

  ngOnInit() {}

}
