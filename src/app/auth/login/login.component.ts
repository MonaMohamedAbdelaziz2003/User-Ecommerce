import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private builder: FormBuilder,private router:Router) {}
  login!: FormGroup;
  ngOnInit(): void {
    this.login = this.builder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }
  dataUsers: any;
  admin: any;
  getlogin() {
    if (this.login.status == "VALID") {
        if("newuser" in localStorage) {
          this.dataUsers = JSON.parse(localStorage.getItem("newuser")!);
          this.dataUsers.forEach((user: any):any => {
            if (user.email === this.login.value.email && user.password === this.login.value.password) {
              localStorage.setItem("user",JSON.stringify(user));
              this.router.navigateByUrl("/product");
              console.log("success");
            } else {
              console.log("wrong");
            }
          });
        } else {
          console.log("not found");
        }
    } else {
      console.log("field all");
    }
  }

}
