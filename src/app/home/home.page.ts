import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../translate-config.service';
import { DocumentService } from '../services/document.service';
import { MenuController } from '@ionic/angular';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage {
  formGroup : FormGroup;
  selectedLanguage:string ="en";
  passwordvalue ;
  numbervalue ;
  lan="en";

  options={"":"HOME.selectLanguage" ,"en":"HOME.english" , "ar":"HOME.arabic" ,"fr":"HOME.french"}
  optionsbox={"red":"HOME.red" ,"yellow":"HOME.yellow" , "green":"HOME.green"}

 
  constructor(private formBuilder: FormBuilder,public menu: MenuController,private documentService: DocumentService,private translateConfigService: TranslateConfigService ,private translate: TranslateService ) {
    this.formGroup = this.formBuilder.group({
      n: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]]
    });
    this.translateConfigService.setLanguage("en");
  }

  ngOnInit() {
    this.menu.enable(true);
    this.documentService.setReadingDirection('ltr')
  }  
  
  // ionViewWillEnter() {
    

  //   this.menu.enable(true);
  // }


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

   passwordchanged(event1)
   {
     
    // console.log("event1",event1);

     console.log("password",this.passwordvalue);
     
     
      
   }

    numberchanged(event1)
   {
     
    // console.log("event1",event1);

     console.log("number",this.numbervalue);
     
     
      
   }

}
