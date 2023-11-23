import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import styles from "./styles";
import theme from "../../theme/theme";
import { Feather } from "@expo/vector-icons";
import MenuCard from "../../components/molecules/MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../state/reducers/menuSlice";
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from "../../constants/NavigationStrings";

const { width } = Dimensions.get("screen");

export default function ProductLitScreen() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Microgreens");
  const [popularFoods, setPopularFoods] = useState([]);
  const [bestDeals, setBestDeals] = useState([]);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMorePopularFoods, setShowMorePopularFoods] = useState(false);
  const [showMoreBestDeals, setShowMoreBestDeals] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const { menu, products } = useSelector((state) => state.menuReducer);

  useEffect(() => {
    setCategories([...new Set(products.map((p) => p.category))]);
    const popularFoodsToday = products.filter(
      (product) => parseInt(product.total_sales) > 200
    );
    const todayBestDeals = products.filter(
      (product) => parseInt(product.discount) > 9
    );
    setPopularFoods(popularFoodsToday);
    setBestDeals(todayBestDeals);
  }, []);

  useEffect(() => {
    dispatch(setMenu(products.filter((p) => p.category === selectedCategory)));
  }, [selectedCategory, dispatch]);

  const filterMenuItems = (item) => {
    setSelectedCategory(item);
    setShowMoreMenu(false);
    setShowMorePopularFoods(false);
    setShowMoreBestDeals(false);
  };

  const showMore = (listName) => {
    if (listName === "menu") {
      setShowMoreMenu(!showMoreMenu);
      setShowMorePopularFoods(false);
      setShowMoreBestDeals(false);
    } else if (listName === "popularFoods") {
      setShowMorePopularFoods(!showMorePopularFoods);
      setShowMoreMenu(false);
      setShowMoreBestDeals(false);
    } else if (listName === "bestDeals") {
      setShowMoreBestDeals(!showMoreBestDeals);
      setShowMorePopularFoods(false);
      setShowMoreMenu(false);
    }
  };

  const renderMenuItem = ({ item }) => <MenuCard item={item} />;

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.filterContainer,
        {
          borderBottomWidth: selectedCategory === item ? 3 : 0,
        },
      ]}
      onPress={() => filterMenuItems(item)}
    >
      <Text
        style={[
          styles.categoryName,
          {
            color:
              selectedCategory === item
                ? theme.colors.primaryColor
                : theme.colors.greyColor,
            fontFamily:
              selectedCategory === item
                ? theme.fonts.RobotoMedium
                : theme.fonts.RobotoRegular,
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source={require('../../assets/image/product.png')} resizeMode="repeat" style={styles.backgroundcontainer}> */}
        <ImageBackground style={styles.backgroundcontainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            containerStyle={styles.containerStyle}
          >
            {/* <View style={styles.topMenu}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="align-left" size={width * 0.07} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notification} onPress={() => navigation.navigate(NavigationStrings.NOTIFICATION_SCREEN)}>
            <Feather name="bell" size={width * 0.07} />
            <View style={styles.dot} />
          </TouchableOpacity>

        </View> */}

            <Text style={styles.heading}>Let's buy {"\n"}fresh Microgreens</Text>

            <Pressable style={styles.searchBar} onPress={() => navigation.navigate(NavigationStrings.SEARCH_RESULTS_SCREEN)}>
              <Feather name="search" size={width * 0.06} />
              <Text style={styles.searchInput}>Search</Text>
            </Pressable>

            <FlatList
              disableVirtualization={true}
              style={styles.categoryList}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              horizontal={true}
              data={categories}
              keyExtractor={(item) => item.toString()}
              renderItem={renderCategoryItem}
            />

            <TouchableOpacity
              style={styles.viewAllBox}
              onPress={() => showMore("menu")}
            >
              {showMoreMenu ? (
                <Text style={styles.showText}>Show Less</Text>
              ) : (
                <Feather
                  name="arrow-right"
                  size={width * 0.055}
                  color={theme.colors.greyColor}
                />
              )}
            </TouchableOpacity>

            <FlatList
              disableVirtualization={true}
              key={showMoreMenu ? "twoColumns" : "oneColumn"}
              horizontal={!showMoreMenu && true}
              numColumns={showMoreMenu && 2}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={menu}
              renderItem={renderMenuItem}
            />

            <View style={styles.row}>
              <Text style={styles.subHeading}>Popular Microgreens</Text>
              <TouchableOpacity onPress={() => showMore("popularFoods")}>
                <Text
                  style={!showMorePopularFoods ? styles.showMore : styles.showText}
                >
                  {showMorePopularFoods ? "Show Less" : "Show More"}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              disableVirtualization={true}
              key={
                showMorePopularFoods ? "popularFoodsList" : "popularFoodsListTwo"
              }
              horizontal={!showMorePopularFoods && true}
              numColumns={showMorePopularFoods && 2}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={popularFoods}
              renderItem={renderMenuItem}
            />

            <View style={styles.row}>
              <Text style={styles.subHeading}>Best Deals</Text>

              <TouchableOpacity onPress={() => showMore("bestDeals")}>
                <Text
                  style={!showMoreBestDeals ? styles.showMore : styles.showText}
                >
                  {showMoreBestDeals ? "Show Less" : "Show More"}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              disableVirtualization={true}
              key={showMoreBestDeals ? "bestDealsOneList" : "bestDealsTwoList"}
              horizontal={!showMoreBestDeals && true}
              numColumns={showMoreBestDeals && 2}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={bestDeals}
              renderItem={renderMenuItem}
            />
          </ScrollView>
        </ImageBackground>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}
