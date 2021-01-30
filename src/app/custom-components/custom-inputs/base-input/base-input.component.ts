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
   ismyTextFieldType: boolean;

  togglemyPasswordFieldType(){
    this.ismyTextFieldType = !this.ismyTextFieldType;
  }
 
   alerterror()
   {
     console.log("error");
     console.log(this.parentFormGroup.get(this.type));
    this.parentFormGroup.get(this.type).markAsTouched();
    console.log(this.parentFormGroup.get(this.type));
   }
 

   ngOnInit()
   
   {
    

    console.log(this.placeholder);
    this.name=new FormControl('',[Validators.required, Validators.minLength(this.min),Validators.maxLength(this.max)]);
    this.parentFormGroup.addControl(this.type,this.name);
   
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

  

 

}
