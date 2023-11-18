import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user:any
  alluser:any
  name:any
  email:any
  pass:any
  profile!: FormGroup;
  ngOnInit(): void {
    this.profile = this.builder.group({
      name: [`${this.user.name}`, [Validators.required]],
      email: [`${this.user.email}`, [Validators.required]],
      address: [`${this.user.address}`, [Validators.required]],
      phone: [`${this.user.phone}`, [Validators.required]],
      password: [`${this.user.password}`, [Validators.required]],
      id: [`${this.user.id}`, [Validators.required]],
    })
  }
constructor(private builder: FormBuilder,private router:Router ){
  if("user" in localStorage){
    this.user=JSON.parse(localStorage.getItem("user")!)
  }else{
    this.router.navigateByUrl("/login");
  }

}
pass2:any
update(){
  this.alluser=JSON.parse(localStorage.getItem("newuser")!)
  this.alluser.forEach((element: any) => {
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
  }
  //
  change(){
  this.router.navigateByUrl("/change");

}
}
