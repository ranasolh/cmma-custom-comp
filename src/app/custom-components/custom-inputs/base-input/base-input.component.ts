import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

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
 
 

   ngOnInit()
   
   {
    

    console.log(this.placeholder);
    this.name=new FormControl('',[Validators.required, Validators.minLength(this.min),Validators.maxLength(this.max)]);
    this.parentFormGroup.addControl(this.type,this.name);
   
     

     
  }

  

 

}
