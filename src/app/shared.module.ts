import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MaterialModule} from './material.module' ;
import { TranslateModule} from '@ngx-translate/core';





import { CaInputComponent } from './custom-components/custom-inputs/ca-input/ca-input.component';





import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import rrulePlugin from '@fullcalendar/rrule'

import { CaSelectSwitcherComponent } from './custom-components/custom-select/ca-select-switcher/ca-select-switcher.component';
import { CaSwitcherLanguagesComponent } from './custom-components/custom-select/ca-switcher-languages/ca-switcher-languages.component';
import { LongPressModule } from 'ionic4-long-press';
import { CaInputUsernameComponent } from './custom-components/custom-inputs/ca-input-username/ca-input-username.component';
import { CaInputEmailComponent } from './custom-components/custom-inputs/ca-input-email/ca-input-email.component';
import { CaMapComponent } from './custom-components/custom-map/ca-map/ca-map.component';
import { CaCalenderComponent } from './custom-components/custom-calender/ca-calender/ca-calender.component';
import { CaBoxCheckComponent } from './custom-components/custom-box/ca-box-check/ca-box-check.component';
import { CaBoxRadioComponent } from './custom-components/custom-box/ca-box-radio/ca-box-radio.component';
import { CaSelectAutocompleteComponent } from './custom-components/custom-select/ca-select-autocomplete/ca-select-autocomplete.component';
import { CaSelectDropdownComponent } from './custom-components/custom-select/ca-select-dropdown/ca-select-dropdown.component';
import { CaInputPasswordComponent } from './custom-components/custom-inputs/ca-input-password/ca-input-password.component';
import { CaInputNumberComponent } from './custom-components/custom-inputs/ca-input-number/ca-input-number.component';
import { CaButtonSubmitComponent } from './custom-components/custom-button/ca-button-submit/ca-button-submit.component';
import { CaButtonCancelComponent } from './custom-components/custom-button/ca-button-cancel/ca-button-cancel.component';
import { CaButtonComponent } from './custom-components/custom-button/ca-button/ca-button.component';
import { CaDropdownLanguagesComponent } from './custom-components/custom-select/ca-dropdown-languages/ca-dropdown-languages.component';
import { CaAutocompleteCountriesComponent } from './custom-components/custom-select/ca-autocomplete-countries/ca-autocomplete-countries.component';
import { CaInputFirstnameComponent } from './custom-components/custom-inputs/ca-input-firstname/ca-input-firstname.component';
import { CaInputLastnameComponent } from './custom-components/custom-inputs/ca-input-lastname/ca-input-lastname.component';
import { CaSwitcherCredentialsComponent } from './custom-components/custom-select/ca-switcher-credentials/ca-switcher-credentials.component';
import { CaLabelComponent } from './custom-components/custom-labels/ca-label/ca-label.component';


FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin ,
  rrulePlugin
]);


@NgModule({
 
 
  declarations:[CaSelectAutocompleteComponent,CaSelectDropdownComponent,CaSelectSwitcherComponent,
   CaInputComponent ,CaCalenderComponent,CaMapComponent,CaSwitcherLanguagesComponent, CaInputUsernameComponent, CaInputEmailComponent,CaBoxCheckComponent,CaBoxRadioComponent ,CaInputPasswordComponent,CaInputNumberComponent, CaButtonSubmitComponent,CaButtonCancelComponent ,CaButtonComponent ,CaDropdownLanguagesComponent,CaAutocompleteCountriesComponent,CaInputFirstnameComponent,CaInputLastnameComponent, CaSwitcherCredentialsComponent,CaLabelComponent] ,
  imports:[MaterialModule,IonicModule,CommonModule ,TranslateModule,FormsModule,ReactiveFormsModule, FullCalendarModule ,LongPressModule],
  
  exports:[CaSelectAutocompleteComponent,CaSelectDropdownComponent,MaterialModule,IonicModule,CommonModule ,TranslateModule,FormsModule,ReactiveFormsModule, CaInputUsernameComponent, CaInputEmailComponent,
    CaInputComponent,CaSelectSwitcherComponent,CaSwitcherLanguagesComponent,CaMapComponent,CaCalenderComponent,
    FullCalendarModule ,CaBoxCheckComponent,CaBoxRadioComponent,CaInputPasswordComponent,CaInputNumberComponent,
    CaButtonSubmitComponent,CaButtonCancelComponent ,CaButtonComponent,CaDropdownLanguagesComponent,
    TranslateModule,CaAutocompleteCountriesComponent,CaLabelComponent,CaInputFirstnameComponent,CaInputLastnameComponent, CaSwitcherCredentialsComponent]
})
export class SharedModule { }
