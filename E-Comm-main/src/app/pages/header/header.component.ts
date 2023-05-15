import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { product } from 'src/app/data';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  menuType:String='default'
  sellerName:string=''
  searchresult:undefined|product[]
  userName:string=""
  constructor(private route:Router){}
 
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
    if(val.url){
      if(localStorage.getItem('seller') && val.url.includes('seller')){
        console.log("in Seller area")
        this.menuType='seller'
        if(localStorage.getItem('seller') ){
          let sellerStore=localStorage.getItem('seller')
          let sellerData=sellerStore && JSON.parse(sellerStore);
          this.sellerName=sellerData.name
        }
      } else if (localStorage.getItem('user') != undefined){
        let userStore=localStorage.getItem('user')
        userStore = JSON.stringify(userStore)
  let userData=userStore && JSON.parse(userStore)
  this.userName=userData.name;
  this.menuType='user' 

      } else{
        console.log("outside the seller area")
        this.menuType='default'
      }
    }
    })
  }
  Logout(){
    localStorage.removeItem('seller')
    this.route.navigate([''])

}
userlogout(){
  localStorage.removeItem('user')
  this.route.navigate(['user-auth'])

}


}