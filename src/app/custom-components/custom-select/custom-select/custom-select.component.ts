import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {

  @Output() newlang = new EventEmitter<string>();
  selectedLanguage="en";
  keys;
  @Input() option="HOME.english" ;
  @Input() options:any;

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

   languageChanged(){
    console.log(this.selectedLanguage);
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }


  langChanged(lang)
  {
    console.log(lang);
   
    this.newlang.emit(lang);
   
  }
}
