import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import styles from "./styles";
import theme from "../../theme/theme";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../state/reducers/menuSlice";
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from "../../constants/NavigationStrings";
import images from "../../data/images";

const { width } = Dimensions.get("screen");


export default function HomeScreen() {

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

  const renderCookingItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(NavigationStrings.PRODUCT_DETAILS_SCREEN, {
          product: item,
        })
      }
    >
      <View style={styles.itemimage}>
        <Image
          resizeMode="cover"
          source={images[item.cookingImg]}
          style={styles.itemimage}
        />
        <View style={styles.cookingtitle}>
          <Text style={styles.cookingName}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        containerStyle={styles.containerStyle}
      >
        <View style={styles.topMenu}>
          {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="align-left" color={'white'} size={width * 0.07} />
          </TouchableOpacity> */}
          <Text style={{ paddingLeft: 10, fontWeight: 'bold', color: theme.colors.lightColor, fontSize: theme.fonts.fontSizeSmall }}>Welcome to Backyards Form</Text>
          {/* <TouchableOpacity style={styles.notification} onPress={() => navigation.navigate(NavigationStrings.NOTIFICATION_SCREEN)}>
          </TouchableOpacity> */}
        </View>

        <Image
          resizeMode="cover"
          source={images.IntroVideo}
          style={styles.introimage}
        />

        <View style={{}}>

          {/* who we are? */}
          <ImageBackground source={require('../../assets/image/opacity-productlogo.png')}>
            <View style={{  paddingHorizontal: width * 0.06, paddingVertical: width * 0.1 }}>
              <Text style={styles.subHeading}>Why are we?</Text>
              {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/image/productlogo.png')} style={{ width: width * 0.8, height: width * 0.55 }} />
              </View> */}
              <Text style={styles.description}>Backyard Farms is a local Texas urban farm started by a family to support their son's dream of becoming a farmer. Backyard Farms is excited to grow microgreens in your local neighborhoods, providing fresh produce from organic soil and seeds. We hope you enjoy the product and look forward to continuing to grow quality produce for your table!</Text>
            </View>
          </ImageBackground>
          {/* who we are? */}

          {/* Get inpired to elevate your cooking */}

          <View style={{ paddingHorizontal: width * 0.06, paddingBottom: width * 0.06 }}>
            <Text style={styles.subHeading}>Get inspired to elevate {"\n"}your cooking</Text>

            <TouchableOpacity
              style={styles.viewAllBox}
              onPress={() => showMore("menu")}
            >

              <Text
                style={!showMoreMenu ? styles.showMore : styles.showText}
              >
                {showMoreMenu ? "Show Less" : "Show More"}
              </Text>
            </TouchableOpacity>

            <FlatList
              disableVirtualization={true}
              key={showMoreMenu ? "twoColumns" : "oneColumn"}
              horizontal={!showMoreMenu && true}
              numColumns={showMoreMenu && 2}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={products}
              renderItem={renderCookingItem}
            />
          </View>

          {/* Get inpired to elevate your cooking */}

        </View>


      </ScrollView>
    </SafeAreaView>
  );
}
