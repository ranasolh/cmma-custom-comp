import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CaButtonComponent } from '../custom-components/custom-buttons/ca-button/ca-button.component';
import { BaseButtonComponent } from '../custom-components/custom-buttons/base-button/base-button.component';
import { CancelButtonComponent } from '../custom-components/custom-buttons/cancel-button/cancel-button.component';
import { SubmitButtonComponent } from '../custom-components/custom-buttons/submit-button/submit-button.component';

import { PasswordInputComponent } from '../custom-components/custom-inputs/password-input/password-input.component';
import { CaInputComponent } from '../custom-components/custom-inputs/ca-input/ca-input.component';
import { NumberInputComponent } from '../custom-components/custom-inputs/number-input/number-input.component';
import { BaseInputComponent } from '../custom-components/custom-inputs/base-input/base-input.component';
import {SharedModule} from '../shared.module' ;

import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    TranslateModule ,
    SharedModule
  
  ],
  declarations: [HomePage,BaseButtonComponent,CaButtonComponent,CancelButtonComponent,SubmitButtonComponent,
  PasswordInputComponent ,CaInputComponent,NumberInputComponent ,BaseInputComponent,
  
]
})
export class HomePageModule {}
