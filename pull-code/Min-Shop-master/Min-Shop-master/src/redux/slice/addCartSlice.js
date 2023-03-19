import { createSlice } from "@reduxjs/toolkit"

const addCartSlice = createSlice({
    name: 'addCart',
    initialState: {
        listProduct: [],
    },
    reducers: {
        handleAddToCart: (state, action) => {
            state.listProduct.push(action.payload);
        }
    }
})

export default addCartSlice