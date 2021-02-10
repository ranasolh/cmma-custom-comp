import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formGroup : FormGroup;
  constructor(private formBuilder: FormBuilder,public menu: MenuController) 
  {
    this.formGroup = this.formBuilder.group({
      n: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]]
    });
   
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
