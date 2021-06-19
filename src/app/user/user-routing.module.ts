import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { PricedetailComponent } from './pricedetail/pricedetail.component';

const routes: Routes = [
    {
      path:"main",
      component:MainComponent,
    },
    {
      path:"contact",
      component:ContactComponent,
    },
    {
      path:"productdetail/:id",
      component:ProductdetailComponent,
    },
    {
      path:"pricedetail/:id",
      component:PricedetailComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
