import React, { useState, useRef } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";
import styles from "./styles";
import NavigationStrings from "../../../constants/NavigationStrings";
import InputField from "../../../components/molecules/InputField";
import Button from "../../../components/atoms/Button";
import AuthTitle from "../../../components/atoms/AuthTitle";
import { logo } from "./assets";
import CheckBox from "expo-checkbox";
import theme from "../../../theme/theme";

const { height } = Dimensions.get('screen');

export default function SignupForm({ navigation }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const scrollViewRef = useRef(null);
    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const hanlderCreateAccount = () => {
        if (!signUpData.username || !signUpData.email || !signUpData.password) {
            Alert.alert("Oops 😞", "All Fields are required")
        } else {
            navigation.navigate(NavigationStrings.DETAILS_SCREEN);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    ref={scrollViewRef}
                    contentContainerStyle={[
                        styles.container,
                    ]}
                    keyboardShouldPersistTaps="handled"
                >
                    <Image style={styles.logo} resizeMode="contain" source={logo} />

                    <View style={styles.loginContainer}>
                        <AuthTitle title={"Sign Up For Free"} />

                        <InputField
                            icon={"user"}
                            placeholder={"Username"}
                            keyboardType={"default"}
                            value={signUpData.username}
                            onChangeText={(text) => setSignUpData({ ...signUpData, username: text })}
                        />

                        <InputField
                            icon={"mail"}
                            placeholder={"Enter Your Email"}
                            keyboardType={"email-address"}
                            value={signUpData.email}
                            onChangeText={(text) => setSignUpData({ ...signUpData, email: text })}
                        />

                        <InputField
                            icon={"lock"}
                            placeholder={"Enter your password"}
                            keyboardType={"default"}
                            isPassword={true}
                            value={signUpData.password}
                            onChangeText={(text) => setSignUpData({ ...signUpData, password: text })}
                        />

                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                color={toggleCheckBox ? theme.colors.secondaryColor : undefined}
                                style={styles.checkbox}
                            />
                            <Text style={styles.checkboxText}>Keep Me Signed In</Text>
                        </View>

                        <Button
                            btnText={"Create Account"}
                            customStyle={{ marginTop: height * 0.03 }}
                            onPressHandler={() => hanlderCreateAccount()}
                        />

                        <View style={styles.anotherAction}>
                            <Text style={styles.text}>Already have an account</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(NavigationStrings.LOGIN_FORM_SCREEN);
                                }}
                            >
                                <Text style={styles.signup}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
