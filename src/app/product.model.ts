export interface NumberRange {
  number?: number;
  range?: '<' | '>';
}


export interface ProductFilters {
  name?: string;
  availability?: boolean;
  quantity?: NumberRange;
  price?: NumberRange;
}


export interface ProductSorts {
  name?: 'ASC' | 'DESC';
  quantity?: 'ASC' | 'DESC';
  price?: 'ASC' | 'DESC';
}
export class Product {

  constructor() {}

  id: string;
  name: string;
  availability: boolean;
  price: number;
  quantity: number;
}
