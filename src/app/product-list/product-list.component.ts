import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  products = ["Embreagem", "Kit Embreagem", "Coxim Amortecedor" ]
}
