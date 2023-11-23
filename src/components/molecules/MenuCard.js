import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import images from "../../data/images";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import NavigationStrings from "../../constants/NavigationStrings";
const { width, height } = Dimensions.get("screen");
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../state/reducers/menuSlice";

export default function MenuCard({ item }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.menuReducer);

  const isItemInWishlist = wishlist.includes(item.id);

  const toggleWishlist = () => {
    if (isItemInWishlist) {
      dispatch(removeFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item.id));
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(NavigationStrings.PRODUCT_DETAILS_SCREEN, {
          product: item,
        })
      }
    >
      <View style={[styles.card]}>
        <Image
          resizeMode="contain"
          style={styles.dishImg}
          source={images[item.img]}
        />
        <View style={styles.divider} />
        <View>

          <Text style={styles.dishName}>{item.name}</Text>

          {item.category == 'Others' ?
            null :
            <View>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, i) => (
                  <Ionicons
                    key={i}
                    name={
                      i < Math.floor(item.rating)
                        ? "star"
                        : i - item.rating < 0.5
                          ? "star-half"
                          : "star-outline"
                    }
                    size={width * 0.035}
                    color={theme.colors.primaryColor}
                  />
                ))}
              </View>

              <View style={styles.row}>
                <Text style={styles.dishPrice}>
                  ${item.price}
                </Text>
                <Text style={styles.text}> {item.discount}</Text>

                {/* <Ionicons
              name={isItemInWishlist ? "heart" : "heart-outline"}
              size={width * 0.04}
              color={theme.colors.primaryColor}
              onPress={toggleWishlist}
            /> */}
              </View>
            </View>
          }

        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.lightColor,
    width: width * 0.43,
    borderRadius: width * 0.03,
    padding: width * 0.02,
    marginRight: width * 0.03,
    marginBottom: width * 0.03,
  },
  dishImg: {
    width: "100%",
    height: height * 0.15,
  },
  ratingContainer: {
    marginVertical: width * 0.02,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: theme.colors.primaryColor,
    fontFamily: theme.fonts.RobotoBold,
    fontSize: theme.fonts.fontSizeExtraSmall,
    backgroundColor: theme.colors.lightColor,
    paddingVertical: width * 0.01,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: theme.colors.borderColor,
    marginVertical: width * 0.03,
  },
  dishName: {
    fontFamily: theme.fonts.RobotoMedium,
    fontSize: theme.fonts.fontSizeSmall,
    color: theme.colors.darkColor,
  },
  dishPrice: {
    fontFamily: theme.fonts.RobotoBold,
    fontSize: theme.fonts.fontSizeSmall,
    color: theme.colors.darkColor,
  },
});
