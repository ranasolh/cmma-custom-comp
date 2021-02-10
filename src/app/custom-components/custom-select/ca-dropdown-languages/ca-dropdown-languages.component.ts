import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DocumentService } from 'src/app/services/document.service';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-ca-dropdown-languages',
  templateUrl: './ca-dropdown-languages.component.html',
  styleUrls: ['./ca-dropdown-languages.component.scss'],
})
export class CaDropdownLanguagesComponent implements OnInit {
  selectedLanguage:string ="en";
  options={"":"HOME.selectLanguage" ,"en":"HOME.english" , "ar":"HOME.arabic" ,"fr":"HOME.french"}

  constructor(private documentService: DocumentService,private translateConfigService: TranslateConfigService ,private translate: TranslateService ) { }

  ngOnInit() {}


  langchange(event1)
   {
     console.log("event1" ,event1);
     console.log("this.selected",this.selectedLanguage);
     
      this.translateConfigService.setLanguage(this.selectedLanguage);
      if(this.selectedLanguage==="ar")
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
