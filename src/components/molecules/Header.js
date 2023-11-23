import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import theme from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import NavigationStrings from "../../constants/NavigationStrings";
const { width, height } = Dimensions.get("screen");

function Header({ screenTitle, isNavigationToHome, isNotificationPage }) {
  const navigation = useNavigation();

  const navigationTo = () => {
    if (isNavigationToHome){
      navigation.navigate(NavigationStrings.Home_SCREEN)
    }else if(isNotificationPage){
      navigation.navigate(NavigationStrings.HOME_MAIN_SCREEN)
    }else {
      navigation.goBack()
    }
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigationTo()}>
        <Entypo
          name="chevron-left"
          size={width * 0.07}
          color={theme.colors.darkColor}
        />
      </TouchableOpacity>
      <Text style={styles.heading}> {screenTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: theme.colors.backgroundColor,
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.02,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: theme.colors.borderColor,
    borderBottomWidth: 0.8,
  },
  heading: {
    width: width * 0.75,
    color: theme.colors.darkColor,
    fontSize: theme.fonts.fontSizeMedium,
    fontFamily: theme.fonts.RobotoBold,
  },
});

export default Header;
