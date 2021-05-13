import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  product: Product[] = [];

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.product = data;
    })
  }

}
