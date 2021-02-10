import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ca-box-check',
  templateUrl: './ca-box-check.component.html',
  styleUrls: ['./ca-box-check.component.scss'],
})
export class CaBoxCheckComponent implements OnInit {

  @Output() defaultChange = new EventEmitter<string>();
  @Input()  default:string ;
  @Input() options:any;
  keys;

  constructor() { }

  ngOnInit()
   {

    this.keys=Object.keys(this.options);
    console.log("keys" ,this.keys);
   }

}
