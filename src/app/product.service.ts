import { Injectable } from '@angular/core';
import { BehaviorSubject, generate } from 'rxjs';

export interface IProduct {
  id: number;
  name: string;
  active: boolean;
  expirationDate: string;
  description: string;
  type: string;
  features?: string[];
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  products: IProduct[] = [{
    id: generateId(),
    name: 'iPhone X',
    active: true,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone 4',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone 5',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone 5s',
    active: true,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone 6s',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone 7',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone 7s',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone 8',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone 8s',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone 3GS',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },];

  products$ = new BehaviorSubject<IProduct[]>(this.products);

  removeProduct(product) {
    const index = this.products.indexOf(product);
    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1)
    ];

    this.products$.next(this.products);
  }

  addProduct(product) {
    this.products = [
      {
        id: generateId(),
        ...product,
      },
      ...this.products,
    ];
    this.products$.next(this.products);
  }

  editProduct(id, product) {
    const index = this.products.findIndex(p => p.id === id);
    this.products = [
      ...this.products.slice(0, index),
      {
        id,
        ...product,
      },
      ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
  }
}
