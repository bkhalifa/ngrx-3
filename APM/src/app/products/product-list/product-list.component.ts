import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Product } from '../product';
import * as ProductActions from '../../store/actions/productv2.actions';
import { State } from '../../store/reducers/index';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode$: Observable<boolean>;

  products$: Observable<Product[]>;

  // Used to highlight the selected product in the list
  selectedProduct$: Observable<Product | null>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.selectedProduct$ = this.store.select((state: State) =>  {
      console.log('here !')
     return state.fromProduct.currentProduct
    });
    this.store.dispatch(new ProductActions.LoadProducts());
    this.products$ = this.store.select((state: State) => state.fromProduct.products);
    this.displayCode$ = this.store.select((state: State) => state.fromProduct.showProductCode);
  }


  checkChanged(): void {
    this.store.dispatch(new ProductActions.ToggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(new ProductActions.InitilaizeProduct());
  }

  productSelected(product: Product): void {
   this.store.dispatch(new ProductActions.SetCurrentProduct({currentPoructId: product.id}));
  }

}
