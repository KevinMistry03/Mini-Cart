import {configureStore, createAsyncThunk} from '@reduxjs/toolkit'
import CartSlice from './Slice/CartSlice'
import axios from 'axios';


export const store = configureStore({
    reducer:{
        'CartSlice': CartSlice.reducer
    }
})