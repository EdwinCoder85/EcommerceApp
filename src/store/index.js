import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import cart from './slices/carts.slice'

const store = configureStore({
  reducer: {
    products, cart
  }
});

export default store;
