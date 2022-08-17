import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {}
export const productSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {
            addProduct: (state, action: PayloadAction<any>) => {

            },
            updateProduct: (state, action: PayloadAction<any>) => {

            },
            deleteProduct: (state, action: PayloadAction<string>) => {

            },
            getProducts: (state) => {

            },
            getProduct: (state, action: PayloadAction<string>) => {

            },
            setProducts: (state, action: PayloadAction<any>) => {

            },
        }
    })
;

export const {addProduct, updateProduct, deleteProduct, getProducts, getProduct, setProducts} = productSlice.actions;
export default productSlice.reducer;

