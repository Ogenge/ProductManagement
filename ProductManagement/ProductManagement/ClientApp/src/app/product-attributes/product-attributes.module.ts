import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAttributesRoutingModule } from './product-attributes-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ProductAttributesRoutingModule
  ]
})
export class ProductAttributesModule { }
