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

  productOpen;
  selectedProduct: IProduct;
  products$: Observable<IProduct[]> = this.productsService.products$;
  delete = false;
  productToBeDeleted;

  addProduct() {
    this.productOpen = true;
    this.selectedProduct = undefined;
  }

  onEdit(product) {
    this.productOpen = true;
    this.selectedProduct = product;
  }

  handleFinish(event) {
    if (event && event.product) {
      if (this.selectedProduct) {
        // edit flow
        this.productsService.editProduct(this.selectedProduct.id, event.product);
      }
      else {
        // save new
        this.productsService.addProduct(event.product);
      }
    }

    this.productOpen = false;
  }

  onDelete(product) {
    this.delete = true;
    this.productToBeDeleted = product;
  }

  handleCancel() {
    this.delete = false;
  }

  handleConfirm() {
    this.handleCancel();
    // we need to implement this to delete in productsService
    this.productsService.removeProduct(this.productToBeDeleted);
  }

  trackById(index, item) {
    return item.id;
  }
}
