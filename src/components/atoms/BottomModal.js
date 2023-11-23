import React from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import theme from "../../theme/theme";

const { width, height } = Dimensions.get("screen");

export default function BottomModal({ children, isVisible, onCloseModal }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <TouchableWithoutFeedback>
        <View style={styles.overlayLayer}>
          <TouchableWithoutFeedback>
            <View style={styles.outerModalContainer}>
              <View style={styles.innerContainer}>
                <TouchableOpacity
                  onPress={() => onCloseModal()}
                  style={styles.closeIcon}
                >
                  <Entypo
                    name="cross"
                    size={width * 0.06}
                    color={theme.colors.darkColor}
                  />
                </TouchableOpacity>
                {children}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlayLayer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  outerModalContainer: {
    minHeight: height * 0.4,
    marginTop: "auto",
    backgroundColor: theme.colors.lightColor,
    borderTopLeftRadius: width * 0.057,
    borderTopRightRadius: width * 0.057,
  },
  innerContainer: {
    padding: width * 0.05,
  },
  closeIcon: {
    alignItems: "flex-end",
  },
});
