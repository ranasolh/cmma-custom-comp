import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../translate-config.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage {
  formGroup : FormGroup;
  selectedLanguage="en";
  options={"":"HOME.selectLanguage" ,"en":"HOME.english" , "ar":"HOME.arabic"}
 
  constructor(private formBuilder: FormBuilder,private translateConfigService: TranslateConfigService ,private translate: TranslateService) {
    this.formGroup = this.formBuilder.group({
      n: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]]
    });
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit() {
    // Write your jquery code here
    // $(document).ready(function () {
    //   alert("Hello from New to design")
    // });
  }
  


  // languageChanged(){
  //   console.log(this.selectedLanguage);
  //   this.translateConfigService.setLanguage(this.selectedLanguage);
  // }

  langchange(event1)
   {
     
      this.selectedLanguage=event1;
      this.translateConfigService.setLanguage(this.selectedLanguage);
   }

}
