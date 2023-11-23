import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme/theme";
import Button from "../atoms/Button";

const { width } = Dimensions.get("screen");

export default function EmptyScreen({
  title,
  description,
  icon,
  showButton,
  btnHandler,
  customStyle,
}) {
  return (
    <View style={[styles.centerdBox, customStyle]}>
      <Ionicons
        name={icon}
        size={width * 0.3}
        color={theme.colors.darkColor}
        style={styles.icon}
      />
      <Text style={styles.headText}>{title}</Text>
      <Text style={styles.subText}>{description}</Text>
      {showButton && (
        <View style={styles.btnContainer}>
          <Button
            btnText={"Order Now"}
            onPressHandler={btnHandler}
            customStyle={{ width: width * 0.5 }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centerdBox: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: width * 0.3,
  },
  icon: {
    opacity: 0.2,
  },
  headText: {
    color: theme.colors.darkColor,
    fontSize: theme.fonts.fontSizeMedium,
    fontFamily: theme.fonts.RobotoBold,
    marginVertical: width * 0.03,
  },
  subText: {
    color: theme.colors.greyColor,
    fontSize: width * 0.045,
    fontFamily: theme.fonts.RobotoRegular,
    paddingHorizontal: width * 0.08,
    textAlign: "center",
    lineHeight: width * 0.07,
  },
  btnContainer: {
    marginTop: width * 0.08,
  },
});
