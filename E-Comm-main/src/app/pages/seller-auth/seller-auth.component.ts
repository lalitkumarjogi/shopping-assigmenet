import { Component } from '@angular/core';
import { SellerService } from 'src/app/service/seller.service';
import { signup } from 'src/app/data';
import {Router} from '@angular/router'

@Component({ 
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
    showlogin=false
    authError:string=''
  constructor(private seller:SellerService,private router:Router){}

ngOnInit() :void{
  this.seller.reloadSeller()
}

  signup(seller:signup){
    console.log(seller)
    this.seller.usersignup(seller)
  }
  login(data:signup){
    this.authError="";
    this.seller.userlogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
   if(isError){
  this.authError="email or password is not correct" 
   }
    })
  }
  openlogin(){
   this.showlogin=true
  }
  opensignup(){
    this.showlogin=false

  }
}
