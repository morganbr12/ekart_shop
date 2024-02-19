import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product: {
    id: number,
      name: String,
      description: String,
      brand: String,
      gender: String,
      category: String,
      size: number[],
      color: String[],
      price: number,
      discountedPrice?: number,
      is_in_inventory: boolean,
      items_left: number,
      imageURL: String,
      slug: string,
  }
}
