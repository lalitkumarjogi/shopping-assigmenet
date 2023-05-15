import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';
import { SellerAddPComponent } from './pages/seller-add-p/seller-add-p.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'herder',component:HeaderComponent},
{path:'seller-add',component:SellerAddPComponent,canActivate:[AuthGuard]},
  {path:'seller-auth',component:SellerAuthComponent},
  { component:SellerHomeComponent,path:'seller-home' ,canActivate:[AuthGuard]},
  {path:'user-auth',component:UserAuthComponent}
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
