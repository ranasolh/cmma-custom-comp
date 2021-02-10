import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formGroupRegister : FormGroup;

  constructor(private formBuilder: FormBuilder,public menu: MenuController) 
  {
    this.formGroupRegister = this.formBuilder.group({
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
