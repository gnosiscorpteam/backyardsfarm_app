import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationStrings from '../constants/NavigationStrings';
import { Onboarding } from '../screens'
import LoginStack from "./LoginStack";
import SignupStack from "./SignupStack";
import CustomDrawer from './CustomDrawer';

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator initialRouteName={NavigationStrings.ONBOARDING_SCREEN} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.ONBOARDING_SCREEN} component={Onboarding} />
            <Stack.Screen name={NavigationStrings.LOGIN_SCREEN} component={LoginStack} />
            <Stack.Screen name={NavigationStrings.SIGNUP_SCREEN} component={SignupStack} />
            <Stack.Screen name={NavigationStrings.HOME_TAB_SCREEN} component={CustomDrawer} />
        </Stack.Navigator>
    );
}
