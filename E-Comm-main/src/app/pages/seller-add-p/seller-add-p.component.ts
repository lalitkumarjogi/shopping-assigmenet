import { Component } from '@angular/core';
import { product } from 'src/app/data';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-seller-add-p',
  templateUrl: './seller-add-p.component.html',
  styleUrls: ['./seller-add-p.component.css']
})
export class SellerAddPComponent {
   addproductMessage:string|undefined
  constructor(private product:ProductService){}

  submit(data:product){
     this.product.addproduct(data).subscribe((result)=>{
      console.log(result)
      if(result){
        this.addproductMessage="product is successfully added"
      } 
      setTimeout(()=>this.addproductMessage=undefined,3000)
     })
  }
}
