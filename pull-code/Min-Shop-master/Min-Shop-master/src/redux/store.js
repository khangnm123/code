import { configureStore } from "@reduxjs/toolkit";
import addCartSlice from './slice/addCartSlice'
import searchSlice from "./slice/searchSlice";
const store = configureStore({
    reducer: {
        addToCart: addCartSlice.reducer,
        searchItem: searchSlice.reducer,
    }
})

export default store