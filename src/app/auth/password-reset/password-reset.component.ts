import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
constructor(private builder: FormBuilder) {}
reset!: FormGroup;
  ngOnInit(): void {
    this.reset = this.builder.group({
      email: ["", [Validators.required]],
    })
  }
  alluser:any;
  count:any=0
  getreset(){
   if("newuser" in localStorage&&this.reset.status == "VALID"){
     this.alluser = JSON.parse(localStorage.getItem("newuser")!);
     this.alluser.forEach((element:any )=> {
      if(element.email==this.reset.value.email){
       setTimeout(() => {
         this.count=element.password;
       }, 3000);
      }
     });
    }
  }
  
}
