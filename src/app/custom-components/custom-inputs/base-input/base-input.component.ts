import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['../css/base.css'],
})
export class BaseInputComponent implements OnInit
 {

   @Input() type:string
   @Input() placeholder:string
   @Input() min:number
   @Input() max:number
  //  @Input() pattern:string
  //  @Input() labelError:string
   @Input()
   parentFormGroup : FormGroup;
   name:FormControl ;
  " 'placeholder'" :FormControl =new FormControl('',Validators.required); 

 

   ngOnInit(){
  this.parentFormGroup.addControl(this.placeholder,
    // new FormControl(this.placeholder,[Validators.required, Validators.minLength(this.min),Validators.maxLength(this.max)]));
    this.name=new FormControl('',[Validators.required, Validators.minLength(this.min),Validators.maxLength(this.max)]));
    this.parentFormGroup.addControl('name',this.name);
   
     console.log(this.placeholder);

  }

 

}
