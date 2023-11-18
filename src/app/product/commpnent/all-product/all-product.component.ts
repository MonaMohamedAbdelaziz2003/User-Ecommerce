import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../models/product';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {
  product: any[] = [];
  cardproduct: any[] = [];
  categories: any[] = [];
  spinner: boolean = false;
  constructor(private service: ProductService) { }
  ngOnInit() {
    this.getProduct();
    this.getcategories();

  }
  newproduct1 = new Array();
  newproduct:any[]=[]
  getProduct() {
    this.service.getAllProduct().subscribe((item:any) => {
      this.spinner=true
      this.product.push(item)
      this.spinner=false
    }, error => {
      this.spinner=false
      alert("error")
    })
    // admin
    // if("newproduct" in localStorage){
    //   this.newproduct1=JSON.parse(localStorage.getItem("newproduct")!)
    //   this.newproduct.push(this.newproduct1)
    // }
  }
  //
  getcategories() {
    this.spinner = true
    this.service.getAllcategories().subscribe((item) => {
      this.categories.push(item)
      this.spinner = false
    }, error => {//for catch error
      this.spinner=false
      alert("error")
    })
  }
  //
  filltercategory(event:any) {
    let val = event.target.value;
    if (val == "all") this.getProduct() ,window.location.reload();
    else this.getcategory(val);
  }
  //
  getcategory(cat: any) {
    this.spinner=true
    this.product=[]
    this.service.getcategories(cat).subscribe((item:any) => {
      this.spinner=false
      this.product.push(item);
    })
  }
  //
  user:any
  addtocard(pro: any) {
      // JSON.stringify //send
      //  JSON.parse  //recive
    this.user=JSON.parse(localStorage.getItem("user")!)
    console.log(pro)
    if (`card${this.user.id}` in localStorage) {
      this.cardproduct = JSON.parse(localStorage.getItem(`card${this.user.id}`)!);
      let exist = this.cardproduct.find((item) => item.item.id == pro.item.id)
      if (!exist) {
        this.cardproduct.push(pro);
        localStorage.setItem(`card${this.user.id}`,JSON.stringify(this.cardproduct))
      }
    } else {
      this.cardproduct.push(pro);
      localStorage.setItem(`card${this.user.id}`,JSON.stringify(this.cardproduct))
    }
  }
}
