import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['../css/base.css'],
})
export class BaseButtonComponent implements OnInit {

  @Input() data:string;
  @Input() icon:string;
  @Input() color:string;
  btncolor:string;
  issubmit=false;

  constructor() {  
    if(this.color==="green")
    {
      this.issubmit=true;
      console.log("sdfghhhhhhhhhhhhhhhhhhhhhhhhhhhhjfhd");
      console.log(this.issubmit);
    }
  }

  ngOnInit() {

     console.log("data",this.data ,"icon",this.icon,"color",this.color);
      
  }

}
