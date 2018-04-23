import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ProductComponent } from './product/product.component';
// import { UserComponent } from './user/user.component';
import { FunctionComponent } from './function/function.component';
import { RoleComponent } from './role/role.component';
import { ProductCategoryComponent } from './product-category/product-category.component';


import {mainRoutes} from './main.routes';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
    ],
  declarations: [MainComponent, ProductComponent, FunctionComponent, RoleComponent, ProductCategoryComponent]
})
export class MainModule { }
