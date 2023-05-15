import { Component, OnInit } from '@angular/core';
import { product} from 'src/app/data';
import { ProductService } from 'src/app/service/product.service';

import {faTrash} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  icon=faTrash
  productLists:undefined | product[]
  productMessage:undefined |string
  constructor(private product:ProductService){}

 ngOnInit(): void {
   
   this.list()

}
delete(id:number){
 console.log("Test id" ,id)
  
 this.product.deleteproduct(id).subscribe((result)=>{
  if(result){
  this.productMessage="Product is delete";
  this.list()
  
  }
 })
 
  
 setTimeout(() => {
    this.productMessage=undefined
 }, 3000);
}

list(){
  this.product.productLists().subscribe((result)=>{
    console.log(result)
    this.productLists=result
   })
}
}
