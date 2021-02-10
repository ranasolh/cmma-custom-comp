import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-switcher-credentials',
  templateUrl: './ca-switcher-credentials.component.html',
  styleUrls: ['./ca-switcher-credentials.component.scss'],
})
export class CaSwitcherCredentialsComponent implements OnInit {

   icons=["foregetpassword"];
  options=["LOGIN.forgetpassword" ];
  values=["forgetpassword","a","f"];
  index=0;

  constructor() { }

  ngOnInit() {}

}
