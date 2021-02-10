import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-ca-input',
  templateUrl: './ca-input.component.html',
  styleUrls: ['../css/cs.css'],
})
export class CaInputComponent 
 {
  @Input() type:string
  @Input() placeholder:string
  @Input() minLength:number
  @Input() maxLength:number
  @Input() min:number;
  @Input() max:number ;
  @Input() parentFormGroup : FormGroup;
  @Input() isrequired :boolean;
  @Input() value:string | number ;
  @Input() icon:string ;
  @Output() valueChange = new EventEmitter<string| number>();
  @Input() pattern:string;
  @Input() ControlName:string;
  name:FormControl ;
  ismyTextFieldType: boolean;

 togglemyPasswordFieldType(){
   this.ismyTextFieldType = !this.ismyTextFieldType;
 }




  ngOnInit()
  
  {
   
 
  //  console.log(this.placeholder);
   if(this.isrequired)
   {
     this.name=new FormControl('',[Validators.required, Validators.minLength(this.minLength),Validators.maxLength(this.maxLength),Validators.pattern(this.pattern),Validators.min(this.min),Validators.max(this.max)]);
   }
   else
 { 
    this.name=new FormControl('',[Validators.minLength(this.minLength),Validators.maxLength(this.maxLength) ,Validators.min(this.min),Validators.max(this.max)]);
 }
 
 console.log("formgroup",this.parentFormGroup)
 console.log("controlname",this.ControlName)
 this.parentFormGroup.addControl(this.ControlName,this.name);
  
   $(".toggle-password").click(function() {

     $(this).toggleClass("fa-eye fa-eye-slash");
     var input = $($(this).attr("toggle"));
     if (input.attr("type") == "password") {
       input.attr("type", "text");
     } else {
       input.attr("type", "password");
     }
   });

    
 }

 
 Inputchange(value)
 {
  
   this.value=value;
   // console.log("default",this.value);
   this.valueChange.emit(this.value);
   // console.log("emit done");
 }




}
