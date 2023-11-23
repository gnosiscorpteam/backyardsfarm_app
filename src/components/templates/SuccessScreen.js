import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import theme from "../../theme/theme";
import Button from "../atoms/Button";
const { width } = Dimensions.get("screen");

export default function SuccessScreen({ msg, buttonText, onPressHandler }) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require("../../assets/images/success-mark.png")}
      />
      <Text style={styles.congratsText}>Congrats!</Text>
      <Text style={styles.msgText}>{msg}</Text>
      <View style={styles.buttonContainer}>
        <Button
          customStyle={styles.buttonStyle}
          btnText={buttonText}
          onPressHandler={onPressHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.lightBackground,
  },
  img: {
    width: width * 0.55,
  },
  congratsText: {
    color: theme.colors.primaryColor,
    fontFamily: theme.fonts.RobotoBold,
    fontSize: theme.fonts.fontSizeXLarge,
    margin: width * 0.02,
    marginTop: -width * 0.05,
  },
  msgText: {
    color: theme.colors.greyColor,
    fontFamily: theme.fonts.RobotoMedium,
    fontSize: theme.fonts.fontSizeSmall,
  },
  buttonStyle: {
    width: width * 0.6,
  },
  buttonContainer: {
    position: "absolute",
    bottom: width * 0.08,
  },
});
