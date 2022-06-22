import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { PageNotFoundComponent } from '../auth/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:WelcomeScreenComponent},
  {path:'list/details/:id', component:ProductDetailsComponent},
  {path:'list', component:ProductListComponent},
  {path:'product-list/add-new-product', component:AddNewProductComponent}
  /*page not found still remaining*/
  ,{
    path : '**', component : PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    WelcomeScreenComponent,
    ProductListComponent,
    ProductDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],

  exports : [
    WelcomeScreenComponent,
    ProductListComponent,
    ProductDetailsComponent,
    PageNotFoundComponent
  ]
})
export class FeaturesModule { }
