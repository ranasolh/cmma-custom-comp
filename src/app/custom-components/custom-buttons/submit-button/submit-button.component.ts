import { Component, OnInit } from '@angular/core';
import { CaButtonComponent } from '../ca-button/ca-button.component';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['../css/submit.css'],
})
export class SubmitButtonComponent extends CaButtonComponent implements OnInit {

   
  constructor() { super(); }

  ngOnInit()
   {
      

   }

}
