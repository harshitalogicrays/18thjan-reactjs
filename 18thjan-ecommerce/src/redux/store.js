import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";

const store=configureStore({
reducer:{
    auth:authSlice.reducer,
    category:categorySlice.reducer,
}
})
export default store