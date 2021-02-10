import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ca-select-switcher',
  templateUrl: './ca-select-switcher.component.html',
  styleUrls: ['./ca-select-switcher.component.scss'],
})
export class CaSelectSwitcherComponent implements OnInit {

  @Output() optionselectedChange = new EventEmitter<string>();
  @Input() optionselected ;
  @Input() options:any;
  @Input() labels:any;
  lonpressed=false;
  index=0;
  constructor() { }

  ngOnInit() {}

  nextone()
  {
    console.log("nextone");
    this.index=this.index +1;
    console.log(this.index);
    if(this.index == this.options.length)
    {
      this.index=0;
    }
    this.optionselected=this.index;
    console.log("option" ,this.optionselected);
   this.optionselectedChange.emit(this.optionselected);
   console.log("done");
   
  }

  showOptions()
  {
    console.log("showoptions");
    this.lonpressed=true;
    console.log ("shoop",this.lonpressed);
   
  }


  released()
  {
    console.log("released");
    this.lonpressed=false;  
    console.log ("released",this.lonpressed);
}


}