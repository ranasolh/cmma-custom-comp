import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DocumentService } from 'src/app/services/document.service';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { CaSelectSwitcherComponent } from '../ca-select-switcher/ca-select-switcher.component';

@Component({
  selector: 'app-ca-switcher-languages',
  templateUrl: './ca-switcher-languages.component.html',
  styleUrls: ['./ca-switcher-languages.component.scss'],
})
export class CaSwitcherLanguagesComponent extends CaSelectSwitcherComponent implements OnInit {

  icons=["flag-icon flag-icon-us","flag-icon flag-icon-lb","flag-icon flag-icon-fr"];
  options=["HOME.english" , "HOME.arabic" ,"HOME.french"];
  values=["en","ar","fr"];
  index=0;

  constructor( private documentService: DocumentService,private translateConfigService: TranslateConfigService ,private translate: TranslateService) { super(); }

  ngOnInit() {}


  langchange(event1)
  {
    console.log("event1" ,event1);
    console.log("this.selected",this.index);
    
     this.translateConfigService.setLanguage(this.values[this.index]);
     if(this.values[this.index]==="ar")
     {
       this.documentService.setReadingDirection('rtl')
     }
     else
     {
       this.documentService.setReadingDirection('ltr')
     }
     console.log("finally");
  }

}
