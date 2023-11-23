import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationStrings from '../constants/NavigationStrings';
import { Profile, EditProfile } from '../../src/screens';
import StatusBarConfig from '../components/atoms/StatusBarConfig'

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <>
            <StatusBarConfig isAuthScreen={false} />

            <Stack.Navigator initialRouteName={NavigationStrings.PROFILE_SCREEN} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NavigationStrings.PROFILE_SCREEN} component={Profile} />
                <Stack.Screen name={NavigationStrings.EDIT_PROFILE_SCREEN} component={EditProfile} />
            </Stack.Navigator>
        </>

    );
}