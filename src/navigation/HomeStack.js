import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  ProductDetails,
  Home,
  Contactus,
  SearchResults,
  Notification
} from "../screens/index";
import NavigationStrings from "../constants/NavigationStrings";
import { Ionicons } from "@expo/vector-icons";
import theme from "../theme/theme";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerScreenWrapper from "../components/molecules/DrawerScreenWrapper";
import ProfileStack from './ProfileStack';
import CartStack from './CartStack';
import { Dimensions } from "react-native";
const { width } = Dimensions.get('screen');
import StatusBarConfig from "../components/atoms/StatusBarConfig";
import { useDispatch, useSelector } from "react-redux";
import ProductsMainStack from "./ProductsStack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeMainStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={NavigationStrings.HOME_MAIN_SCREEN}>
      <Stack.Screen
        name={NavigationStrings.HOME_MAIN_SCREEN}
        component={Home}
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

export default function HomeStack() {
  

  const cart = useSelector(state => state.cartReducer);

  return (
    <>
      <StatusBarConfig isAuthScreen={false} />

      {/* <DrawerScreenWrapper> */}
        <Tab.Navigator
          initialRouteName={NavigationStrings.HOME_STACK_SCREEN}
          shifting={true}
          labeled={false}
          sceneAnimationEnabled={false}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              let iconName;
              let iconColor = focused
                ? theme.colors.primaryColor
                : theme.colors.darkColor;

              if (route.name === NavigationStrings.HOME_STACK_SCREEN) {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === NavigationStrings.CONTACTUS_SCREEN) {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === NavigationStrings.PRODUCTS_STACK_SCREEN) {
                iconName = focused ? "ios-list-circle-sharp" : "ios-list-circle-outline";
              } else if (route.name === NavigationStrings.CART_STACK_SCREEN) {
                iconName = focused ? "cart-sharp" : "cart-outline";
              }

              return (
                <Ionicons
                  name={iconName}
                  size={width * 0.07}
                  color={iconColor}
                  style={{
                    textShadowColor: focused
                      ? theme.colors.secondaryColor
                      : "transparent",
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: focused ? 8 : 0,
                  }}
                />
              );
            },
            tabBarActiveTintColor: theme.colors.primaryColor,
            inactiveTintColor: theme.colors.darkColor,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: theme.colors.backgroundColor,
            tabBarInactiveBackgroundColor: theme.colors.backgroundColor,
            tabBarStyle: {
              borderTopWidth: 0,
              elevation: 0,
              position: "absolute",
              bottom: 20,
              left: 10,
              right: 10,
            },
            unmountOnBlur: true
          })}
        >
          <Tab.Screen
            options={({ route }) => ({
              tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                if (
                  routeName === NavigationStrings.PRODUCT_DETAILS_SCREEN ||
                  routeName === NavigationStrings.SEARCH_RESULTS_SCREEN || routeName === NavigationStrings.NOTIFICATION_SCREEN
                ) {
                  return { display: "none" };
                }
                return {
                  borderTopWidth: 0,
                  elevation: 0,
                  position: "absolute",
                  bottom: 20,
                  left: 10,
                  right: 10,
                };
              })(route),
            })}
            name={NavigationStrings.HOME_STACK_SCREEN}
            component={HomeMainStack}
          />
          <Tab.Screen name={NavigationStrings.PRODUCTS_STACK_SCREEN}
            options={({ route }) => ({
              tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                if (
                  routeName === NavigationStrings.PRODUCT_DETAILS_SCREEN ||
                  routeName === NavigationStrings.SEARCH_RESULTS_SCREEN || routeName === NavigationStrings.NOTIFICATION_SCREEN
                ) {
                  return { display: "none" };
                }
                return {
                  borderTopWidth: 0,
                  elevation: 0,
                  position: "absolute",
                  bottom: 20,
                  left: 10,
                  right: 10,
                };
              })(route),
            })}
            component={ProductsMainStack} />
            
          <Tab.Screen
            options={{
              tabBarStyle: { display: "none" },
              tabBarBadge: cart.length > 0 ? cart.length : null
            }}
            name={NavigationStrings.CART_STACK_SCREEN} component={CartStack} />

          <Tab.Screen
            name={NavigationStrings.CONTACTUS_SCREEN}
            component={Contactus}
            options={{
              tabBarStyle: { display: "none" },
            }}
          />
          
        </Tab.Navigator>
      {/* </DrawerScreenWrapper> */}
    </>
  );
}
