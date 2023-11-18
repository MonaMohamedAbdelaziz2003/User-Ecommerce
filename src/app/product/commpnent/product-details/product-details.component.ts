import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  id: any
  loading:boolean=false
  data:any[0]=[]
  newproduct1:any
  constructor(route: ActivatedRoute,private service:ProductService) {
    this.id=route.snapshot.paramMap.get("id")
    // if("detPro" in localStorage){
    //   this.newproduct1=JSON.parse(localStorage.getItem("detPro")!)
    //   console.log(this.newproduct1)
    // }
  }
  test=0
  ngOnInit(): void {
    // admin
    // if("detPro" in localStorage){
    //   this.getproduct();
    //   this.getproduct2();
    // }else{
    //   this.getproduct();
    // }
      this.getproduct();
  }
  getproduct() {
    this.loading=true
    this.service.getProductbyid(this.id).subscribe(item => {
      this.data.push(item);
      this.loading = false
    })
  }
  // admin
  // getproduct2() {
  //   this.newproduct1=JSON.parse(localStorage.getItem("detPro")!)
  //   this.test=1
  //   console.log(this.newproduct1)
  //   // localStorage.removeItem("detPro")
  // }
}
