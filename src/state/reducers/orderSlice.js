// orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [
        {
            date: "2023-09-27T07:19:25.103Z",
            deliveryAddress: "Marvis Kaprobo, KM 5 refinery rooad opposite re \"\" public road, effrun delta state kmbu, +234 9011039271",
            id: "gp3zdqnyhn",
            items: [
                {
                    name: "Veg Manchurian",
                    price: "9.99",
                    quantity: 1
                }
            ],
            paymentMethod: "Bank Account",
            status: "Delivered",
            total: 34.99
        },
        {
            date: "2023-09-27T07:21:14.766Z",
            deliveryAddress: "Marvis Kaprobo, KM 5 refinery rooad opposite re \"\" public road, effrun delta state kmbu, +234 9011039271",
            id: "gp3zfjyfm3",
            items: [
                {
                    name: "Strawberry Lemon",
                    price: "3.99",
                    quantity: 2
                },
                {
                    name: "Fruit Salad",
                    price: "4.99",
                    quantity: 1
                }
            ],
            paymentMethod: "Card",
            status: "Cancelled",
            total: 44.97
        },
    ]
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
            console.log(action.payload)
        },
        cancelOrder: (state, action) => {
            const { orderId } = action.payload;
            const orderToUpdate = state.orders.find(order => order.id === orderId);
            if (orderToUpdate) {
                orderToUpdate.status = 'Cancelled';
            }
        },

    },
});

export const { addOrder, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;
