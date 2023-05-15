import { Component } from '@angular/core';
import { product } from 'src/app/data';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [944, 984, 984].map((n) => `https://cdn1.smartprix.com/rx-i4U4FAoxX-w1200-h1200/4U4FAoxX.jpg`);
 
  trendyproduct:undefined|product[]
  constructor (public productService:ProductService){}

  myCart:any [] = [];

  items:any = [
    {
      id:1,
      name:"New Apple Moble",
      price:789075,
      colour:"White",
      imgUrl:'https://cdn1.smartprix.com/rx-iVyp4t2Vm-w1200-h1200/Vyp4t2Vm.jpg'
    },
    {
      id:2,
      name:"New Apple Moble2",
      price:789075,
      colour:"White"
    },
    {
      id:3,
      name:"New Apple Moble3",
      price:789075,
      colour:"White"
    },
    {
      id:4,
      name:"New Apple Moble4",
      price:789075,
      colour:"White"
    },
    {
      id:5,
      name:"New Apple Moble5",
      price:789075,
      colour:"White"
    }
  ]
  ngOnInIt(){
    this.productService.popularproducts().subscribe((data)=>{
  //console.log(data)
    })
   

    }

    addToCart(product:object){
      this.productService.myCart.push(product);
      console.log("product=====>" , product);
      console.log("myCart length ==>" , this.productService.myCart)
     // this.myCart.push(product);

    }
  }


