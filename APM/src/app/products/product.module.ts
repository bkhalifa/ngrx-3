import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { reducers } from '../store/reducers/index';
import { ProductEffect } from '../store/effects/ProductEffect';

const productRoutes: Routes = [
  { path: '', component: ProductShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes)
    // StoreModule.forRoot(reducers, {metaReducers}),
    // EffectsModule.forRoot([ProductEffect]),
  ],
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
