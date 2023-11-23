import { StyleSheet, Dimensions, TextInput } from "react-native";
import React from "react";
import theme from "../../theme/theme";

const { width } = Dimensions.get("screen");

export default function InputFieldBordered({ placeholder, keyboardType }) {
  return (
    <TextInput
      style={styles.cardInput}
      placeholder={placeholder}
      keyboardType={keyboardType}
      numberOfLines={2}
    />
  );
}

const styles = StyleSheet.create({
  cardInput: {
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    borderRadius: width * 0.01,
    padding: width * 0.025,
    marginBottom: width * 0.07,
  },
});
