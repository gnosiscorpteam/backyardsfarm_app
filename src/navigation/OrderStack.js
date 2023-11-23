import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationStrings from '../constants/NavigationStrings';
import { TrackOrder, Orders, OrderRating } from '../screens';
import StatusBarConfig from "../components/atoms/StatusBarConfig";

const Stack = createStackNavigator();

export default function OrderStack() {
    return (
        <>
            <StatusBarConfig isAuthScreen={false} />
            <Stack.Navigator initialRouteName={NavigationStrings.ORDERS_SCREEN} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NavigationStrings.ORDERS_SCREEN} component={Orders} />
                <Stack.Screen name={NavigationStrings.ORDER_TRACK_SCREEN} component={TrackOrder} />
                <Stack.Screen name={NavigationStrings.RATING_SCREEN} component={OrderRating} />
            </Stack.Navigator>
        </>
       
    );
}
