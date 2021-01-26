import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../../translate-config.service';



@Component({
  selector: 'app-custom-list ',
  
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss'],
})
export class CustomListComponent implements OnInit {


  @Output() newlang = new EventEmitter<string>();
  selectedLanguage="en";
  keys;
  @Input() option="HOME.english" ;
  @Input() options:any;
 
  constructor(private translateConfigService: TranslateConfigService ,private translate: TranslateService)
   {
      // this.languageChanged();
      
    }

  ngOnInit() {
    //  this.languageChanged();
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
