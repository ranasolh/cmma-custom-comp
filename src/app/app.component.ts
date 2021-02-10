import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from './translate-config.service';
import { DocumentService } from './services/document.service';
import { Environment } from '@ionic-native/google-maps';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  options={"":"HOME.selectLanguage" ,"en":"HOME.english" , "ar":"HOME.arabic" ,"fr":"HOME.french"}
  selectedLanguage:string ="en";
  public selectedIndex = 0;
  isLoggedIn=false;
  
  public appPages = [
    {
      title: 'SIDEMENU.home',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'SIDEMENU.add',
      url: '/schedule-events',
      icon: 'alarm'
    },
    {
      title: 'SIDEMENU.logout',
      url: '/logout',
      icon: 'exit'
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private documentService: DocumentService,private translateConfigService: TranslateConfigService ,private translate: TranslateService
  ) {
    this.translateConfigService.setLanguage("en");
    this.initializeApp();
  }

  initializeApp() {
    this.translateConfigService.setLanguage("en");
    this.platform.ready().then(() => {
   

      if (document.URL.startsWith('http'))
      {
        Environment.setEnv({
          API_KEY_FOR_BROWSER_RELEASE: "AIzaSyBaTVlHDndpSgbdDnRsCy2xFJt2tB41NB0",
          API_KEY_FOR_BROWSER_DEBUG: "AIzaSyBaTVlHDndpSgbdDnRsCy2xFJt2tB41NB0"
        });
      }


      this.translateConfigService.setLanguage("en");
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

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

  ngOnInit() 
  {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
  }
}
