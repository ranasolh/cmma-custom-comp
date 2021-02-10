import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-button',
  templateUrl: './ca-button.component.html',
  styleUrls: ['../css/ca.css'],
})
export class CaButtonComponent implements OnInit {
  
  @Input() placeholder:string;
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

     console.log("data",this.placeholder ,"icon",this.icon,"color",this.color);
      
  }


}
