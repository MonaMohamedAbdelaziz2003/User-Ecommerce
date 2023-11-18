import { JsonpInterceptor } from '@angular/common/http';
import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  user:any
  constructor(private service:CardService,private router:Router) {
    this.getproductcard();
    this.gettotle();
    this.user=JSON.parse(localStorage.getItem("user")!)

  }
  cardproduct: any=[];
  cardproduct1:any;
  current_user: any;
  total: any;
  getproductcard() {
    this.gettotle();
    if("user" in localStorage) {
      this.current_user = JSON.parse(localStorage.getItem("user")!);
      this.cardproduct = JSON.parse(localStorage.getItem(`card${this.current_user.id}`)!);

    }
  }
  //
  gettotle(){
    this.total = 0;
    for (let x in this.cardproduct) {
      this.total += this.cardproduct[x].item.price * this.cardproduct[x].quantity;
    }
  }
  //
  add(index:number) {
    this.cardproduct[index].quantity++
    localStorage.setItem(`card${this.user.id}`,JSON.stringify( this.cardproduct ));
    this.gettotle();
  }
  mins(index:number) {
    if(this.cardproduct[index].quantity>1){

      this.cardproduct[index].quantity--
    }
    localStorage.setItem(`card${this.user.id}`,JSON.stringify( this.cardproduct ));
    this.gettotle();
  }
  detectchange() {
    localStorage.setItem(`card${this.user.id}`,JSON.stringify( this.cardproduct ));
    this.gettotle();
  }
  delete(index: number) {
    this.cardproduct.splice(index, 1);
    this.gettotle();
    localStorage.setItem(`card${this.user.id}`,JSON.stringify( this.cardproduct ));
  }
  clearall() {
    this.cardproduct.splice(0, this.cardproduct.length);
    this.gettotle();
    localStorage.setItem(`card${this.user.id}`,JSON.stringify( this.cardproduct ));
  }
  success:boolean=false
  allorder:any=[]
  addtocard() {
      let pro = this.cardproduct.map((item:any) => {
        return {id:item.item.id,quantite:item.quantity}
      })
      let model={
        date:new Date(),
        name:this.user.name,
        email:this.user.email,
        product:pro,
      }
      this.service.addcard(model)
        .subscribe((res) => {
          this.success = true;
      })
      if("allorder" in localStorage){
        this.allorder=JSON.parse(localStorage.getItem("allorder")!);
      }
    // console.log(model)
    this.allorder.forEach((element:any,index:any )=> {
      if(element.name==this.user.name&&element.email==this.user.email){
        this.allorder.splice(index, 1)
      }
      // console.log(element)
    });
    // console.log(model)
      this.allorder.push(model);
      localStorage.setItem("allorder",JSON.stringify(this.allorder));
  }


}
