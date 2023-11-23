import { createSlice } from '@reduxjs/toolkit';
import products from "../../data/product.json";

const initialState = {
    menu: [],
    products: products,
    wishlist: []
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.menu = action.payload;
        },
        addToWishlist: (state, action) => {
            const productId = action.payload;
            if (!state.wishlist.includes(productId)) {
                state.wishlist.push(productId);
            }
        },
        removeFromWishlist: (state, action) => {
            const productId = action.payload;
            state.wishlist = state.wishlist.filter(id => id !== productId);
        },
    },
});

export const { setMenu, addToWishlist, removeFromWishlist } = menuSlice.actions;
export default menuSlice.reducer;
