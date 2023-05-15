import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import {FormsModule} from '@angular/forms';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { HomeComponent } from './home/home.component';
import { SellerAddPComponent } from './seller-add-p/seller-add-p.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserAuthComponent } from './user-auth/user-auth.component';
import  { ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    HeaderComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    HomeComponent,
    SellerAddPComponent,
    UserAuthComponent
  ],
  exports:[
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,SellerHomeComponent,ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,NgbModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
