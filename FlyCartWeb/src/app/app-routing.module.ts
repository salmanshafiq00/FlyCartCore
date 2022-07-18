import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {ProductFormComponent} from './product/product-form/product-form.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "product", component: ProductComponent},
  {path: "product/productForm", component: ProductFormComponent},
  {path: "product/productForm/:productID", component: ProductFormComponent},
  {path: "category", component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent, ProductComponent, 
  ProductFormComponent, CategoryComponent];
