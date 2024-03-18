import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const cartApi = createAsyncThunk('cartApi', async () => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products`);
        const data = res.data;
        return data
    } catch (error) {
        console.log(error);
    }
});

export const CartSlice = createSlice({
    name: 'CartSlice',
    initialState: {
        Data: [],
        Cart: [],
        error: null,
        isLoading: null
    },
    reducers: {
        addToCart: (state,action) => {
            state.Cart.push(action.payload);
        },
        removeCartItem: (state,action) => {
            state.Cart.splice(0,1);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cartApi.fulfilled, (state,action) => {
            state.error = false;
            state.Data = action.payload
            state.isLoading = false
        });
        builder.addCase(cartApi.pending , (state) => {
            state.error = true;
            state.isLoading = false
        });
    }
});

export const {addToCart,removeCartItem} = CartSlice.actions;
export default CartSlice;