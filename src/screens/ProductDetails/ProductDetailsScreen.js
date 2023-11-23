import { View, Text, Image, Dimensions, Alert, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Button from '../../components/atoms/Button';
import { Ionicons } from "@expo/vector-icons";
import styles from './styles';
import theme from '../../theme/theme';
import images from '../../data/images';
import MenuCard from '../../components/molecules/MenuCard';
import { ScrollView } from 'react-native-virtualized-view'
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from "../../state/reducers/menuSlice";
import { addToCart } from '../../state/reducers/cartSlice';
import NavigationStrings from '../../constants/NavigationStrings';
import CartButton from '../../components/molecules/CartButton';
import { sendNotification } from "../../services/NotificationService";
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

export default function ProductDetailsScreen({ navigation, route }) {
  const { product } = route.params;
  const [similarProducts, setSimilarProducts] = useState([]);
  const [cartCount, setCartCount] = useState(1);
  const dispatch = useDispatch();
  const { wishlist, products } = useSelector(state => state.menuReducer);

  const isInWishlist = wishlist.includes(product.id);


  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product.id));
    }
  };

  const addToCartHandler = () => {
    const payload = {
      product,
      quantity: cartCount
    }
    dispatch(addToCart(payload));

    const notificationTitle = 'Product Added to Cart';
    const notificationBody = `${product.name} has been added to your cart.`;

    Alert.alert('success', 'Your product has been added to cart')
    sendNotification(notificationTitle, notificationBody);

    navigation.navigate(NavigationStrings.CART_STACK_SCREEN)
  };

  const decQuantity = () => {
    cartCount > 1 && setCartCount(cartCount - 1)
  }

  const incQuantity = () => {
    setCartCount(cartCount + 1)
  }


  useEffect(() => {
    setSimilarProducts(products.filter(p => p.category === product.category && p.id !== product.id))
    setCartCount(1)
  }, [product]);

  return (
    <>
      <View style={styles.headBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={width * 0.07} color={theme.colors.darkColor} />
        </TouchableOpacity>
        {/* <Ionicons
          name={isInWishlist ? "heart" : "heart-outline"}
          size={width * 0.06}
          color={isInWishlist ? theme.colors.primaryColor : theme.colors.darkColor}
          onPress={() => toggleWishlist()}
        /> */}
      </View>


      <ScrollView contentContainerStyle={styles.contentContainerStyle}>

        <Text style={styles.name}>{product.name}</Text>

        {
          product.category == 'Others' ?
            null :
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.ratingsBox}>
                  {[...Array(5)].map((_, i) => (
                    <Ionicons
                      key={i}
                      name={
                        i < Math.floor(product.rating)
                          ? "star"
                          : i - product.rating < 0.5
                            ? "star-half"
                            : "star-outline"
                      }
                      size={width * 0.03}
                      color={theme.colors.primaryColor}
                    />))}
                  <Text style={styles.raitng}> {product.rating}</Text>
                  <Text style={styles.totalSales}> ({product.total_sales})</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.price}>${product.price} / oz</Text>

                <CartButton quantity={cartCount} decQuantity={decQuantity} incQuantity={incQuantity} />
              </View>
            </View>
        }



        <View style={styles.imgBox}>
          <Image resizeMode='contain' style={styles.img} source={images[product.img]} />
        </View>

        <Text style={styles.otherInfoTitle}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.divider} />

        {product.category == 'Others' ?
          null :
          <View>
            <View style={styles.infocontain}>
              <Feather name="info" size={24} color="black" />
              <View style={styles.infocontent}>
                <Text style={styles.infotitle}>Informational Message</Text>
                <Text style={styles.infodescription}>10% off for recurring subscription. $2.50 per ounce - 10% = $2.25 per ounce *minimum 10 oz order</Text>
              </View>
            </View>

            <View style={styles.divider} />
          </View>
        }


        <View style={styles.extraInfo}>
          <Text style={styles.otherInfoTitle}>People Also Like</Text>
          <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal={true} data={similarProducts} renderItem={({ item }) => <MenuCard item={item} />} />
        </View>

      </ScrollView>

      {product.category == 'Others' ? null :
        <View style={styles.btnContainer}>
          <Button onPressHandler={addToCartHandler} btnText={'Add to cart'} isDisabled={false} />
        </View>
      }
    </>
  )
} 