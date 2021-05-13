import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Productattributes } from "../productattributes";
import { AttributeService } from "../attribute.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Productattributes[] = [];
  createForm;

  constructor(
    public productService: AttributeService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.productService.getProductAttribute().subscribe((data: Productattributes[]) => {
      this.product = data;
    });
  }

  onSubmit(formData) {
    this.productService.createProductAttributes(formData.value).subscribe(res => {
      this.router.navigateByUrl('product-attributes/list');
    });
  }

}
