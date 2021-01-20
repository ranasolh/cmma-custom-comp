import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['../css/base.css'],
})
export class BaseButtonComponent implements OnInit {

  @Input() data:string;

  constructor() { }

  ngOnInit() {}

}
