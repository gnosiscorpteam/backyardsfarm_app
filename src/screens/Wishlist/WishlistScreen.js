import { View, Text, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import images from '../../data/images';
import styles from './styles';
import { ScrollView } from "react-native-virtualized-view";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import theme from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';
import { SwipeListView } from 'react-native-swipe-list-view';
import { addToCart } from '../../state/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from "../../state/reducers/menuSlice";
import Header from "../../components/molecules/Header";
import EmptyScreen from '../../components/templates/EmptyScreen';

const { width } = Dimensions.get('screen');

export default function WishlistScreen() {
  const dispatch = useDispatch();
  const { wishlist, products } = useSelector(state => state.menuReducer);
  const navigation = useNavigation();

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist(productId));
    }
  };

  const addTocartItem = (itemId) => {
    const product = products.find(p => p.id === itemId);
    const payload = {
      product,
      quantity: 1
    }
    dispatch(addToCart(payload));
    Alert.alert("Alert", "Product has been added to Cart")
    navigation.navigate(NavigationStrings.CART_STACK_SCREEN)
  };

  const renderWishlistItem = ({ item }) => {
    const product = products.find(p => p.id === item);
    if (!product) {
      return null
    }

    return (
      <TouchableOpacity style={styles.wishlistItem}
        activeOpacity={.9}
        onPress={() => {
          navigation.navigate(NavigationStrings.PRODUCT_DETAILS_SCREEN, { product });
        }}
      >
        <View style={styles.imageContainer}>
          <Image resizeMode='cover' source={images[product.img]} style={styles.productImage} />
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name}</Text>

          <TouchableOpacity style={[styles.wishlist, { position: 'absolute', top: 0, right: 0 }]} onPress={() => toggleWishlist(product.id)}>
            <Ionicons
              name={wishlist.includes(product.id) ? "heart" : "heart-outline"}
              size={width * 0.045}
              color={wishlist.includes(product.id) ? theme.colors.tertiaryColor : theme.colors.lightColor}
            />
          </TouchableOpacity >

          <Text style={styles.productPrice}>Price: ${product.price} | {product.time_taken} </Text>
          <Text style={styles.deliveryInfo}>
            Delivery Fee: {product.delivery_charges}
          </Text>

        </View>
      </TouchableOpacity>


    );
  };


  return (
    <>
      <Header screenTitle={"My Favourites"} />

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {wishlist.length ?
          (<View style={styles.swipeRightBox}>
            <MaterialCommunityIcons name="gesture-swipe-right" size={width * 0.035} />
            <Text style={styles.swipeText}>
              Swipe on an item to add to cart
            </Text>
          </View>)
          : null}
        {wishlist.length === 0 ? (
          <EmptyScreen
            title={"Nothing is in wishlist!"}
            description={`Add your favourite dish now which you want to buy later`}
            icon={"cart"}
          />
        ) : (
          <SwipeListView
            data={wishlist}
            keyExtractor={item => item}
            renderItem={renderWishlistItem}
            renderHiddenItem={({ item }) => (
              <View style={styles.productActions}>
                <TouchableOpacity style={styles.wishlist} onPress={() => addTocartItem(item)}>
                  <Ionicons name="cart" size={width * 0.05} color={theme.colors.lightColor} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            leftOpenValue={0}
            rightOpenValue={-70}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        )}
      </ScrollView>
    </>
  );
}