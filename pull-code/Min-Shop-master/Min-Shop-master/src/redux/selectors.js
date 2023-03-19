import {createSelector} from '@reduxjs/toolkit'

export const cartSelector = (state) => state.addToCart.listProduct
export const searchResultSelector = (state) => state.searchItem.searchResult
export const storeSelector = createSelector(
    cartSelector,
    searchResultSelector,
    (cartStore, searchRes) => {
        //hàm này sẽ return về store dưới dạng obj, ta có thể tùy biến kết quả
        //điều đặc biệt của cách viết này là ta có thể viết lồng kết quả vào nhau để xử lý
        return {
            cartStore,
            searchRes
        };
    }
)
