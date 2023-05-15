import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  myCart:any [] = [];

  constructor(private http :HttpClient) { }
  addproduct(data:product){
 
    return this.http.post('http://localhost:3000/products',data)
  }
  productLists(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  deleteproduct(id:number){
   return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  popularproducts(){
    return this.http.get<product[]>(`http://localhost:3000/products/?_limit=3 `);
  } 

}
