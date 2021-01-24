import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './translate-config.service';




import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     AppRoutingModule,
    
     CommonModule,
    FormsModule,
    IonicModule,
    
    ReactiveFormsModule,
   
   
    MatFormFieldModule ,
    MatInputModule,
   
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    })
    ],
  
  
    providers: [
    StatusBar,
    SplashScreen,
    TranslateConfigService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
   exports:[ 
     
    ReactiveFormsModule,
   MatFormFieldModule ,
    MatInputModule,
   ]
})
export class AppModule {}
