import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  constructor(private builder: FormBuilder,private router:Router) {console.log(localStorage.getItem("user"))}
  signup!: FormGroup;
  ngOnInit(): void {
    this.signup = this.builder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      address: ["", [Validators.required]],
      password: ["", [Validators.required]],
      id: [new Date, [Validators.required]],
    })
  }
  newuser: any[]=[]
  getsignup(){
    if (this.signup.status === 'VALID') {
      if("newuser" in localStorage){
        this.newuser = JSON.parse(localStorage.getItem("newuser")!);
      }
       this.newuser.push(this.signup.value)
       localStorage.setItem("newuser", JSON.stringify(this.newuser));
       localStorage.setItem("user",JSON.stringify(this.signup.value));
       this.router.navigateByUrl("/product");
    }
  }
}
