import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-ca-select-dropdown',
  templateUrl: './ca-select-dropdown.component.html',
  styleUrls: ['./ca-select-dropdown.component.scss'],
})
export class CaSelectDropdownComponent implements OnInit {

  @Output() optionselectedChange = new EventEmitter<string>();
  @Input() optionselected ;
  @Input() options:any;


  selectedLanguage="en";
  keys;
 
  constructor(private translateConfigService: TranslateConfigService ,private translate: TranslateService) { }

  ngOnInit()
   {
    console.log("Ononit");
    console.log(this.options);
    this.keys=Object.keys(this.options);
    console.log(this.keys);
    console.log(this.options);
    console.log(Object.keys(this.options));
   }



  langChanged(lang)
  {
    console.log("lang",lang);
     this.optionselected=lang;
     console.log("option" ,this.optionselected);
    this.optionselectedChange.emit(this.optionselected);
    console.log("done");
  }

}
