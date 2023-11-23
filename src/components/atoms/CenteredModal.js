import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import theme from "../../theme/theme";

const { width, height } = Dimensions.get("screen");

export default function CenteredModal({ children, isVisible, customStyle }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.outerContainer}>
            <TouchableWithoutFeedback>
              <View style={[styles.innerContainer, customStyle]}>
                <View>{children}</View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    minHeight: height * 0.4,
    width: width * 0.89,
    backgroundColor: theme.colors.lightColor,
    borderRadius: width * 0.05,
  },
});
