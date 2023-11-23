import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions
} from "react-native";
import styles from "./styles";
import Buttton from "../../../components/atoms/Button";
import NavigationStrings from "../../../constants/NavigationStrings";
import SplitOTPInput from "../../../components/templates/SplitOTPInput";

const { width } = Dimensions.get('screen');

export default function OtpScreen({ navigation }) {
  const [isOtpEntered, setIsOtpEntered] = useState(false);

  const handleOTPChange = (otpValues) => {
    const isFilled = otpValues.every((value) => value !== "");
    setIsOtpEntered(isFilled);
  };

  const handleNextPress = () => {
    if (isOtpEntered) {
      navigation.navigate(NavigationStrings.NEW_PASSWORD_SCREEN);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : width * 0.055}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[styles.fp_container]}>
            <Text style={styles.heading}>
              Enter 4-digit {"\n"}Verification code
            </Text>
            <Text style={styles.paragraphText}>
              Code sent to +626253**** This code will {"\n"}expire in 01:30
            </Text>

            <SplitOTPInput length={4} onChange={handleOTPChange} />

            <View style={styles.custommBtnStyle}>
              <Buttton
                btnText={"Next"}
                onPressHandler={handleNextPress}
                isDisabled={!isOtpEntered}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
