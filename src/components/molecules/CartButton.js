import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme/theme";
const { width } = Dimensions.get("screen");

const CartButton = ({ quantity, incQuantity, decQuantity, mini }) => {
  return (
    <View
      style={[
        styles.cartButtonContainer,
        { paddingHorizontal: mini ? width * 0.005 : width * 0.03 },
      ]}
    >
      <TouchableOpacity
        style={{ padding: !mini ? width * 0.01 : width * 0.009 }}
        onPress={decQuantity}
      >
        <Ionicons
          name="remove-outline"
          size={width * 0.04}
          color={theme.colors.lightColor}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.cartQuantity,
          {
            fontSize: mini
              ? theme.fonts.fontSizeExtraSmall
              : theme.fonts.fontSizeSmall,
          },
        ]}
      >
        {quantity}
      </Text>
      <TouchableOpacity style={styles.cartButton} onPress={incQuantity}>
        <Ionicons
          name="add-outline"
          size={width * 0.04}
          color={theme.colors.lightColor}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.primaryColor,
    borderRadius: width * 0.05,
  },
  cartQuantity: {
    fontSize: theme.fonts.fontSizeSmall,
    paddingHorizontal: width * 0.02,
    color: theme.colors.lightColor,
    fontFamily: theme.fonts.RobotoBold,
  },
});

export default CartButton;
