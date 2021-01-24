import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../../translate-config.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MaterialModule} from '../../material/material.module' ;

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss'],
})
export class CustomListComponent implements OnInit {

  selectedLanguage="en";

  constructor(private translateConfigService: TranslateConfigService ,private translate: TranslateService)
   {
      this.languageChanged();

    }

  ngOnInit() { this.languageChanged();}
  
  languageChanged(){
    console.log(this.selectedLanguage);
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

}
