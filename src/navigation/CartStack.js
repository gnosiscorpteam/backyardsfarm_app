import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationStrings from '../constants/NavigationStrings';
import { Cart, CheckoutPayment, CheckoutDelivery } from '../screens';

const Stack = createStackNavigator();

export default function CartStack() {
    return (
        <Stack.Navigator initialRouteName={NavigationStrings.CART_SCREEN} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.CART_SCREEN} component={Cart} />
            <Stack.Screen name={NavigationStrings.CHECKOUT_DELIVERY_SCREEN} component={CheckoutDelivery} />
            <Stack.Screen name={NavigationStrings.CHECKOUT_PAYMENT_SCREEN} component={CheckoutPayment} />
        </Stack.Navigator>
    );
}
