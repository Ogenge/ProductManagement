import { Component, OnInit } from '@angular/core';
import { Productattributes } from "../productattributes";
import { AttributeService } from "../attribute.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  product: Productattributes[] = [];

  constructor(public productService: AttributeService) { }

  ngOnInit(): void {
    this.productService.getProductAttribute().subscribe((data: Productattributes[]) => {
      this.attribute = data;
    })
  }
}
