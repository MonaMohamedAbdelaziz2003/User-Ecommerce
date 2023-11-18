import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dataUsers:any;
  email:any
  constructor(private router:Router) {
    if("user" in localStorage){
      this.dataUsers = JSON.parse(localStorage.getItem("user")!);
      this.email=this.dataUsers.email
    }else{
      this.email="mm"
    }

  }
  user:any;
  logout(){
    if("user" in localStorage){
      localStorage.removeItem("user");
      this.router.navigateByUrl("/product");
      this.email="mm"
    }
  }
  back(){
    this.email="mm"
    localStorage.removeItem("user")
    location.reload()
  }
  //
ul:any
  show(){
    this.ul=document.getElementById("ul")
this.ul.classList.toggle("show")
  }
}
