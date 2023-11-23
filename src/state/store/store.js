import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../reducers/menuSlice';
import cartReducer from '../reducers/cartSlice';
import orderReducer from '../reducers/orderSlice';

const store = configureStore({
    reducer: {
        menuReducer,
        cartReducer,
        orderReducer
    },
});

export default store;
