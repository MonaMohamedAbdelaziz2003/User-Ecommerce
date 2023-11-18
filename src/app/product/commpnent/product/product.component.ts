import {EventEmitter,Output,Input, Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: any = {}
  @Output() item = new EventEmitter()
  check: boolean = false
  amount:number=0
  user:any
  constructor(private router:Router){}
  add() {
    if("user" in localStorage)
    {
      this.user=JSON.parse(localStorage.getItem("user")!)
      if(this.amount!==0){
          this.user=JSON.parse(localStorage.getItem(`card${this.user.id}`)!)
          this.item.emit({ item: this.data, quantity: this.amount});
        }else{
            this.router.navigateByUrl("/product");
          }
    }else{
            this.router.navigateByUrl("/login");
    }

  }
  ///////////
  // data1:any
  // detailsPro(){
  //   this.data1=JSON.parse(this.data)
  //     localStorage.setItem(`detPro`,JSON.stringify(this.data1))
  //     this.router.navigateByUrl("/details/12m");
  // }
}
