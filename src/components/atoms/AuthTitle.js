import { StyleSheet, Text } from "react-native";
import React from "react";
import theme from "../../theme/theme";

export default function AuthTitle({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: theme.colors.darkColor,
    fontSize: theme.fonts.fontSizeMedium,
    fontFamily: theme.fonts.RobotoBold,
  },
});
