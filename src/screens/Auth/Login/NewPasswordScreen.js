import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
  Dimensions
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Button from "../../../components/atoms/Button";
import NavigationStrings from "../../../constants/NavigationStrings";
import InputField from "../../../components/molecules/InputField";
import { useFocusEffect } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

export default function NewPasswordScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      setCPassword('');
      setPassword('');
    }, [])
  );

  const handleNextButton = () => {
    if (!cpassword || !password) {
      Alert.alert("Oops 😞", "All fields are required!")
    } else {
      navigation.navigate(NavigationStrings.RESET_SUCCESSFULLY);
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
            <Text style={styles.heading}>Reset your password {"\n"}here</Text>
            <Text style={styles.paragraphText}>
              Choose a strong password which contains {"\n"}alphabets numeric
              and a symbol{" "}
            </Text>

            <InputField
              icon={"lock"}
              placeholder={"New password"}
              keyboardType={"default"}
              isPassword={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <InputField
              icon={"lock"}
              placeholder={"Confirm password"}
              keyboardType={"default"}
              isPassword={true}
              value={cpassword}
              onChangeText={(text) => setCPassword(text)}
            />

            <View style={styles.custommBtnStyle}>
              <Button
                btnText={"Next"}
                onPressHandler={() => handleNextButton()}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
