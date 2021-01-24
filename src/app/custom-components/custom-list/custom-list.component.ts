import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss'],
})
export class CustomListComponent implements OnInit {

  selectedLanguage="en";

  constructor(private translateConfigService: TranslateConfigService ,private translate: TranslateService) { }

  ngOnInit() {}
  
  languageChanged(){
    console.log(this.selectedLanguage);
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

}
