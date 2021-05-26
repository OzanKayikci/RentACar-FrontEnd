import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toastrService:ToastrService) { }

  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.carID===car.carID);
    if (item) {
      item.isItRental=true;
      this.toastrService.warning("Araç zaten seçili");
    }else{
      let cartItem = new CartItem();
      cartItem.car=car;
      this.toastrService.success("Araç eklendi ", car.carName);
      cartItem.isItRental=false;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(car:Car){
    let item:CartItem = CartItems.find(c=>c.car.carID===car.carID);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
