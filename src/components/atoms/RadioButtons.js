import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from "react-native";
import theme from "../../theme/theme";

const { width, height } = Dimensions.get("screen");

function RadioButtons({ label, selected, onSelect }) {
  const handleRadioPress = () => {
    onSelect(label);
  };

  return (
    <TouchableOpacity
      style={styles.radioButtonContainer}
      onPress={handleRadioPress}
    >
      <View
        style={[styles.radioButton, selected && styles.radioButtonSelected]}
      >
        {selected && <View style={styles.radioButtonInner} />}
      </View>
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    width: width * 0.04,
    height: width * 0.04,
    borderRadius: width * 0.09,
    borderWidth: width * 0.005,
    borderColor: theme.colors.primaryColor,
    marginRight: width * 0.03,
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonSelected: {
    borderColor: theme.colors.primaryColor,
  },
  radioButtonInner: {
    width: width * 0.02,
    height: width * 0.02,
    borderRadius: width * 0.09,
    backgroundColor: theme.colors.primaryColor,
  },
  radioButtonLabel: {
    fontSize: theme.fonts.fontSizeSmall,
    color: theme.colors.darkColor,
    fontFamily: theme.fonts.RobotoRegular,
  },
});

export default RadioButtons;
