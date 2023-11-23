import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import theme from "../../theme/theme";
import { Entypo } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");

export default function InputField({
  icon,
  placeholder,
  keyboardType,
  isPassword,
  value,
  onChangeText,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <View style={styles.inputBox}>
      {icon && (
        <Entypo
          name={icon}
          size={width * 0.055}
          color={theme.colors.secondaryColor}
          style={styles.icon}
        />
      )}
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={isPasswordVisible ? false : isPassword}
        value={value}
        onChangeText={onChangeText}
      />

      {isPassword && (
        <TouchableOpacity onPress={() => togglePasswordVisibility()}>
          <Entypo
            name={isPasswordVisible ? "eye-with-line" : "eye"}
            size={width * 0.052}
            color={theme.colors.secondaryColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  inputBox: {
    width: width - width * 0.1,
    height: height * 0.062,
    borderRadius: width * 0.025,
    backgroundColor: theme.colors.lightColor,
    marginTop: width * 0.05,
    borderWidth: 0.1,
    borderColor: theme.colors.borderColor,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    paddingLeft: width * 0.05,
  },
  input: {
    marginLeft: width * 0.035,
    color: theme.colors.darkColor,
    fontSize: theme.fonts.fontSizeExtraSmall,
    fontFamily: theme.fonts.RobotoRegular,
    height: "100%",
    flex: 0.95,
  },
});
