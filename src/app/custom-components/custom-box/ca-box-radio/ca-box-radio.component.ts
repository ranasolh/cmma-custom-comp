import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ca-box-radio',
  templateUrl: './ca-box-radio.component.html',
  styleUrls: ['./ca-box-radio.component.scss'],
})
export class CaBoxRadioComponent implements OnInit {

  @Output() defaultChange = new EventEmitter<string>();
  @Input()  default:string ="en";
  @Input() options:any;
  keys;

  constructor() { }

  ngOnInit() 
  {
    this.keys=Object.keys(this.options);
  }

}
