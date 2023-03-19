import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'filters',
    initialState: {
        searchResult: ''
    },
    reducers: {
        handleSearch: (state,action) => {
            state.searchResult = action.payload
        }
    }
})

export default searchSlice