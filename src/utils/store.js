import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./cartSlices";
import productSlices from "./productSlices";

const store = configureStore({
    reducer: {
        cart: cartSlices,
        product: productSlices
    }
});

export default store;