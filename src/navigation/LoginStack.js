import React from 'react'
import { TouchableOpacity, Dimensions } from 'react-native';
import { Login, NewPassword, Otp, ForgotPassword, PasswordResetSuccessful } from '../screens'
import { createStackNavigator } from "@react-navigation/stack";
import NavigationStrings from '../constants/NavigationStrings';
import theme from '../theme/theme'
import { Entypo } from "@expo/vector-icons";
import StatusBarConfig from '../components/atoms/StatusBarConfig';

const Stack = createStackNavigator();
const { width } = Dimensions.get('screen');

export default function LoginStack({ navigation }) {
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
                    name={NavigationStrings.LOGIN_FORM_SCREEN}
                    component={Login}
                />
                <Stack.Screen
                    options={navigationOptions(NavigationStrings.LOGIN_FORM_SCREEN)}
                    name={NavigationStrings.FORGOT_PASSWORD_SCREEN}
                    component={ForgotPassword}
                />
                <Stack.Screen
                    options={navigationOptions(NavigationStrings.FORGOT_PASSWORD_SCREEN)}
                    name={NavigationStrings.OTP_SCREEN}
                    component={Otp}
                />
                <Stack.Screen
                    options={navigationOptions(NavigationStrings.OTP_SCREEN)}
                    name={NavigationStrings.NEW_PASSWORD_SCREEN}
                    component={NewPassword}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NavigationStrings.RESET_SUCCESSFULLY}
                    component={PasswordResetSuccessful}
                />
            </Stack.Navigator>
        </>
       
    )
}