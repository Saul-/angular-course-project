import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductDetailContainerComponent } from './product-detail-container/product-detail-container.component';
import { ProductComponent } from './components/product/product.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductDetailContainerComponent,
    ProductComponent,
    ProductAlertsComponent,
    ProductItemComponent
  ],
  imports: [CommonModule, ProductsRoutingModule]
})
export class ProductsModule {}
