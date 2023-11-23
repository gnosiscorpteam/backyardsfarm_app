import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import theme from "../../theme/theme";

const { width } = Dimensions.get("screen");

const RadioButtonWithCheckmark = ({ icon, label, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.rbContainer}>
      <Text style={selected ? styles.checkmark : styles.dot}>
        {selected ? "✓" : "○"}
      </Text>
      <View style={styles.icon}>
        <FontAwesome
          name={icon}
          size={width * 0.03}
          color={theme.colors.lightColor}
        />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rbContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    color: theme.colors.darkColor,
    fontFamily: theme.fonts.RobotoBold,
    fontSize: theme.fonts.fontSizeMedium,
    marginRight: width * 0.06,
  },
  checkmark: {
    color: theme.colors.primaryColor,
    fontFamily: theme.fonts.RobotoBold,
    fontSize: theme.fonts.fontSizeLarge,
    marginRight: width * 0.04,
  },
  icon: {
    backgroundColor: theme.colors.secondaryColor,
    padding: width * 0.022,
    margin: width * 0.026,
    borderRadius: width * 0.02,
  },
  label: {
    color: theme.colors.darkColor,
    fontFamily: theme.fonts.RobotoRegular,
    fontSize: theme.fonts.fontSizeSmall,
  },
});

export default RadioButtonWithCheckmark;
