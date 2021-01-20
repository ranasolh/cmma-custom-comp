import { Component, OnInit } from '@angular/core';

import { CaButtonComponent } from '../ca-button/ca-button.component';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['../css/cancel.css'],
})
export class CancelButtonComponent extends CaButtonComponent {

  constructor() {  super();}

  ngOnInit() {}

}
