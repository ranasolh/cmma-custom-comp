import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-ca-select-autocomplete',
  templateUrl: './ca-select-autocomplete.component.html',
  styleUrls: ['./ca-select-autocomplete.component.scss'],
})
export class CaSelectAutocompleteComponent implements OnInit {

  @Output() defaultChange = new EventEmitter<string>();
  @Input()  default:string ="en";
  @Input() options:any;

 
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  
  keys;

  constructor(private translateConfigService: TranslateConfigService ,private translate: TranslateService) { }

  ngOnInit()
   {
   
    this.keys=Object.keys(this.options);
   
    


    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    
   }

   private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
     
    return this.keys.filter(option => option.toLowerCase().includes(filterValue));
  }

 


  langChanged(lang)
  {
    console.log("lang",lang);
    this.default=lang;
    console.log("default",this.default);
    this.defaultChange.emit(this.default);
   
  }

}
