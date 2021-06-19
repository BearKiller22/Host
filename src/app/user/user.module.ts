import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';

import { MainComponent } from './main/main.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { PricedetailComponent } from './pricedetail/pricedetail.component';


@NgModule({
  declarations: [
    MainComponent,
    PriceComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    ProductdetailComponent,
    PricedetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ],
  exports: [
    MainComponent
  ]
})
export class UserModule { }
