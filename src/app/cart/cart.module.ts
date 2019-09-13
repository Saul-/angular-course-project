import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';

@NgModule({
  declarations: [CartContainerComponent, CartItemComponent, CartFormComponent],
  imports: [CommonModule, CartRoutingModule, ReactiveFormsModule]
})
export class CartModule {}
