import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-text-box',
  templateUrl: './custom-text-box.component.html',
  styleUrls: ['./custom-text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextBoxComponent),
      multi: true
    }
  ]
})
export class CustomTextBoxComponent implements ControlValueAccessor  {

  @Input()
  public label: string;
 
  @Input()
  public placeholder: string;
 
  @Input()
  public required = false;
 
  @Input()
  public disabled = false;
 
  @Input()
  public data: string;
 
  @Input()
  public minlength = 0;

  constructor() { }


  public onChangeFn = (_: any) => {};
 
  public onTouchedFn = () => {};
 
  public registerOnChange(fn: any): void {
     this.onChangeFn = fn;
  }
 
  public registerOnTouched(fn: any): void {
     this.onTouchedFn = fn;
  }
 
  public setDisabledState(isDisabled: boolean): void {
     this.disabled = isDisabled;
  }
 
  public writeValue(obj: any): void {
     this.data = obj;
  }
 
  public onChange() {
     this.onChangeFn(this.data);
  }

  ngOnInit() {}

}
