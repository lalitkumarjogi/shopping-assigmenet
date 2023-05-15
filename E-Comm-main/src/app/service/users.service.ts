import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { login, signup } from '../data';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isLoginError=new EventEmitter<boolean>(false)

  constructor(private http:HttpClient,private route:Router) { }

  usersign(user:signup){
    this.http.post("http://localhost:3000/user",user,{ observe: 'response' }).subscribe((result)=>{
       console.log(result);
       if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        this.route.navigate(["/"])
       }

    })
  }
  userlogin(data:login){
  this.http.get<signup[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
  {observe:'response'}).subscribe((result)=>{
     if(result && result.body && result.body.length ){
      console.log("user Login")
      localStorage.setItem('user',JSON.stringify(result.body[0]))
        this.route.navigate(["/"])
     } else{
         console.log("user Login Failed")
         this.isLoginError.emit(true)
     }
     
  })
  }

  userreload(){
    if (localStorage.getItem('user'))
    this.route.navigate(['user-auth'])
  }

}
