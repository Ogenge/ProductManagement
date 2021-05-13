import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from "../product";
import { ProductsService } from "../products.service";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product[] = [];
  createForm;

  constructor(
    public productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      catergoryname:[''],
      size: [''],
      color: [''],
      price: [''],
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.product = data;
    });
  }

  onSubmit(formData) {
    this.productService.createProduct(formData.value).subscribe(res => {
      this.router.navigateByUrl('product/list');
    });
  }
}
