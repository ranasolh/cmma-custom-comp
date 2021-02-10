import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-label',
  templateUrl: './ca-label.component.html',
  styleUrls: ['./ca-label.component.scss'],
})
export class CaLabelComponent implements OnInit {

  @Input() placeholder:string;

  constructor() { }

  ngOnInit() {}

}
