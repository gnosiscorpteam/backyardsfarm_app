import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.product.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.push({ ...action.payload.product, quantity: action.payload.quantity });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },
        incrementQuantity: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                }
            }
        },
        emptyCart: (state, action) => {
            return [];
        },
    },
});

export const { addToCart, removeFromCart, decrementQuantity, incrementQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
