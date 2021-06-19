import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserModule } from './user/user.module';

import { MainComponent } from './user/main/main.component';
import { PriceComponent } from './user/price/price.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { ProductComponent } from './user/product/product.component';

import { ProductdetailComponent } from './user/productdetail/productdetail.component';
import { PricedetailComponent } from './user/pricedetail/pricedetail.component';


const routes: Routes = [
  {
    path:"",
    component:MainComponent,
  },
  {
    path:"price",
    component:PriceComponent,
  },
  {
    path:"about",
    component:AboutComponent,
  },
  {
    path:"contact",
    component:ContactComponent,
  },
  {
    path:"product",
    component:ProductComponent,
  },
  {
    path:"main",
    component:MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,UserModule]
})
export class AppRoutingModule { }
