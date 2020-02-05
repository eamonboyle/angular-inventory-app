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
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone X',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone X',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone X',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone X',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone X',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone X',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone X',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone X',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },{
    id: generateId(),
    name: 'iPhone X',
    active: false,
    description: 'Like brand new',
    expirationDate: '01/15/2020',
    type: 'mobile'
  },];

  products$ = new BehaviorSubject<IProduct[]>(this.products);
}
