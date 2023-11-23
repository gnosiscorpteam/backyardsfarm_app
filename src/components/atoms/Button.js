import { Pressable, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import theme from "../../theme/theme";
const { width } = Dimensions.get("screen");

export default function Button({
  onPressHandler,
  btnText,
  customStyle,
  isDisabled,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.actionButton,
        customStyle,
        {
          backgroundColor: pressed
            ? theme.colors.secondaryColor
            : isDisabled
            ? theme.colors.tomatoColor
            : theme.colors.primaryColor,
        },
      ]}
      onPress={onPressHandler}
      disabled={isDisabled}
    >
      <Text style={styles.actionText}>{btnText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: theme.colors.primaryColor,
    width: width - width * 0.1,
    padding: width * 0.04,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width * 0.03,
  },
  actionText: {
    color: theme.colors.lightColor,
    fontSize: theme.fonts.fontSizeSmall,
    fontFamily: theme.fonts.RobotoBold,
  },
});
