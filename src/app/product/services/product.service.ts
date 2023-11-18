import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enveronment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProduct() {
    return this.http.get(environment.Api+'products');
  }
  
  getProductbyid(id:any) {
    return this.http.get(environment.Api+'products/'+id);
  }

  getAllcategories() {
    return this.http.get(environment.Api+'products/categories');
  }

  getcategories(cat:any) {
    return this.http.get(environment.Api+'products/category/'+cat);
  }
}
