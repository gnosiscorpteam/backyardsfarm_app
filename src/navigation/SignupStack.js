import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationStrings from '../constants/NavigationStrings';
import theme from "../theme/theme";
import { TouchableOpacity, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Signup, Details, PaymentMethod, UploadProfilePhoto, CreatedSuccessfully, SetLocation } from '../screens'
import StatusBarConfig from "../components/atoms/StatusBarConfig";

const Stack = createStackNavigator();
const { width } = Dimensions.get("screen");

export default function SignupStack({ navigation }) {
    const navigationOptions = (page) => {
        return {
            title: "",
            headerStyle: {
                backgroundColor: theme.colors.backgroundColor,
            },
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(page)}
                    style={{
                        marginLeft: width * 0.05,
                        backgroundColor: theme.colors.tertiaryColor,
                        padding: width * 0.01,
                        borderRadius: width * 0.02,
                    }}
                >
                    <Entypo
                        name="chevron-left"
                        size={width * 0.075}
                        color={theme.colors.primaryColor}
                    />
                </TouchableOpacity>
            ),
        };
    };

    return (
        <>
            <StatusBarConfig isAuthScreen={true} />
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NavigationStrings.SIGNUP_FORM_SCREEN}
                    component={Signup}
                />
                <Stack.Screen
                    options={navigationOptions(NavigationStrings.SIGNUP_FORM_SCREEN)}
                    name={NavigationStrings.DETAILS_SCREEN}
                    component={Details}
                />
                <Stack.Screen
                    options={navigationOptions(NavigationStrings.DETAILS_SCREEN)}
                    name={NavigationStrings.PAYMENT_METHOD_SCREEN}
                    component={PaymentMethod}
                />
                <Stack.Screen
                    options={navigationOptions(NavigationStrings.PAYMENT_METHOD_SCREEN)}
                    name={NavigationStrings.UPLOAD_PROFILE_PHOTO_SCREEN}
                    component={UploadProfilePhoto}
                />
                <Stack.Screen
                    options={navigationOptions(NavigationStrings.UPLOAD_PROFILE_PHOTO_SCREEN)}
                    name={NavigationStrings.SET_LOCATION_SCREEN}
                    component={SetLocation}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NavigationStrings.CREATED_SUCCESSFULLY}
                    component={CreatedSuccessfully}
                />

            </Stack.Navigator>
        </>
       
    );
}
