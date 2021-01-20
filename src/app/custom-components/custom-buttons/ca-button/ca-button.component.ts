import { Component, Input, OnInit } from '@angular/core';
import { BaseButtonComponent } from '../base-button/base-button.component';

@Component({
  selector: 'app-ca-button',
  templateUrl: './ca-button.component.html',
  styleUrls: ['../css/cs.css'],
})
export class CaButtonComponent  extends BaseButtonComponent
{
   @Input() placeholder:string ; 

  constructor() { super(); }

  ngOnInit() {}

}
