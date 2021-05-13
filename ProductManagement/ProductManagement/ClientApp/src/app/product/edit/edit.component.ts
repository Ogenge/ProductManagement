import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from "../product";
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  sku: number;
  products: Product;
  product: Product[] = [];
  editForm;
  constructor(
    public productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      sku: [''],
      name: ['', Validators.required],
      catergoryname: [''],
      size: [''],
      color: [''],
      price: [''],
    });
  }

  ngOnInit(): void {
    this.sku = this.route.snapshot.params['sku'];

    this.productService.getProducts().subscribe((data: Product[]) => {
      this.product = data;
    });

    this.productService.getProduct(this.sku).subscribe((data: Product[]) => {
      this.product = data;
      this.editForm.patchValue(data);
    });
  }

  onSubmit(formData) {
    this.productService.updateProduct(formData.value).subscribe(res => {
      this.router.navigateByUrl('product/list');
    });
  }
}
