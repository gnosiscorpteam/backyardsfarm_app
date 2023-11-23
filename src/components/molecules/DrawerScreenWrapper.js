import { StyleSheet } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

const DrawerScreenWrapper = ({ children }) => {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { scale: interpolate(progress.value, [0, 1], [1, 0.8], "clamp") },
      {
        rotateY: `${interpolate(
          progress.value,
          [0, 1],
          [0, -0.2],
          "clamp"
        )}deg`,
      },
      { translateX: interpolate(progress.value, [0, 1], [0, 0, -60], "clamp") },
    ],
    overflow: "hidden",
    borderRadius: progress.value && 20,
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DrawerScreenWrapper;
