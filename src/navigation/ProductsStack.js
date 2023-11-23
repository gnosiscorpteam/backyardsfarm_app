import React from "react";
import {
  ProductDetails,
  SearchResults,
  Notification,
  Products
} from "../screens/index";
import NavigationStrings from "../constants/NavigationStrings";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function ProductsMainStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={NavigationStrings.PRODUCTS_MAIN_SCREEN}>
      <Stack.Screen
        name={NavigationStrings.PRODUCTS_MAIN_SCREEN}
        component={Products}
      />
      <Stack.Screen
        name={NavigationStrings.PRODUCT_DETAILS_SCREEN}
        component={ProductDetails}
      />
      <Stack.Screen
        name={NavigationStrings.SEARCH_RESULTS_SCREEN}
        component={SearchResults}
      />
      <Stack.Screen
        name={NavigationStrings.NOTIFICATION_SCREEN}
        component={Notification}
      />
    </Stack.Navigator>
  );
}
