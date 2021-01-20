import { Component, OnInit } from '@angular/core';
import { CaInputComponent } from '../ca-input/ca-input.component';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['../css/number.css'],
})
export class NumberInputComponent extends CaInputComponent {

  constructor() {  super();}

  ngOnInit() {}

}
