import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent  {
  change!: FormGroup;
  constructor(private builder: FormBuilder,private router:Router) {}
  ngOnInit(): void {
    this.change = this.builder.group({
      oldPassword: ["", [Validators.required]],
      newPassword: ["", [Validators.required]],
    })
  }
  //
  dataUsers:any
  user:any
  test:any
  changePassword(){
    if (this.change.status == "VALID") {
        this.dataUsers = JSON.parse(localStorage.getItem("newuser")!);
        this.user = JSON.parse(localStorage.getItem("user")!);
        this.dataUsers.forEach((user: any):any => {
          if (user.password === this.change.value.oldPassword && user.email === this.user.email) {
            localStorage.removeItem(user);
            user.password=this.change.value.newPassword
            user.email=this.user.email
            user.name=this.user.name
            user.address=this.user.address
            user.phone=this.user.phone
            user.id=this.user.id
            localStorage.setItem("user",JSON.stringify(user));
            this.test=1
          }
          localStorage.setItem("newuser",JSON.stringify(this.dataUsers));
        });
        if(!this.test) {
          this.test=2
        }

  } else {
    console.log("field all");
  }
  console.log(this.test)
}

/**
 *
 *  this.alluser.forEach((element: any) => {
      if(element.email==this.user.email){
        this.pass2= element.password
        localStorage.removeItem(element);
        element.password=this.pass2
        element.email=this.profile.value.email
        element.name=this.profile.value.name
        element.address=this.profile.value.address
        element.phone=this.profile.value.phone
        element.id=this.profile.value.id
        localStorage.setItem("user",JSON.stringify(element));
      }
    });
    localStorage.setItem("newuser",JSON.stringify(this.alluser));
 */
}
