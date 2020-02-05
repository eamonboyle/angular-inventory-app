import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService, IProduct } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {

  constructor(private productsService: ProductService) { }

  products$: Observable<IProduct[]> = this.productsService.products$;

  trackById(index, item) {
    return item.id;
  }
}
