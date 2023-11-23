import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import { addToWishlist, removeFromWishlist } from "../../state/reducers/menuSlice";
import { removeFromCart } from '../../state/reducers/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import images from '../../data/images';
import styles from './styles';
import { ScrollView } from "react-native-virtualized-view";
import theme from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Button from '../../components/atoms/Button'
import NavigationStrings from '../../constants/NavigationStrings'
import CartButton from '../../components/molecules/CartButton';
import { incrementQuantity, decrementQuantity } from '../../state/reducers/cartSlice';
import { SwipeListView } from 'react-native-swipe-list-view';
import Header from "../../components/molecules/Header";
import EmptyScreen from '../../components/templates/EmptyScreen';

const { width } = Dimensions.get('screen');

export default function CartScreen() {
  const cart = useSelector(state => state.cartReducer);
  const { wishlist } = useSelector(state => state.menuReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [subTotal, setSubTotal] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist(productId));
    }
  };
  const removeItemFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const goToCheckout = () => {
    console.log("dddAAA", cart)
    const total = subTotal + 20;
    navigation.navigate(NavigationStrings.CHECKOUT_DELIVERY_SCREEN, { total });
  };


  useEffect(() => {
    let totalSubtotal = 0;
    let maxDeliveryCharge = 0;

    cart.forEach((item) => {
      const itemSubtotal = parseFloat(item.price) * item.quantity;
      totalSubtotal += itemSubtotal;

      const itemDeliveryCharge = parseFloat(item.delivery_charges.slice(1)); // Remove the "$" sign
      if (itemDeliveryCharge > 0) {
        maxDeliveryCharge += itemDeliveryCharge;
      }

    });

    setShippingCharge(maxDeliveryCharge);
    setSubTotal(totalSubtotal);

  }, [cart]);

  return (
    <>

      <Header screenTitle={"Cart"} />

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {cart.length ?
          (<View style={styles.swipeRightBox}>
            <MaterialCommunityIcons name="gesture-swipe-right" size={width * 0.035} />
            <Text style={styles.swipeText}>
              Swipe on an item to delete
            </Text>
          </View>)
          : null}

        {cart.length === 0 ? (
          <EmptyScreen
            title={"Cart is Empty!"}
            description={`Add your favourite dish now which you want to buy later`}
            showButton={true}
            btnHandler={() => navigation.navigate(NavigationStrings.PRODUCTS_STACK_SCREEN)}
            icon={"cart"}
          />
        ) : (
          <SwipeListView
            data={cart}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  activeOpacity={.9}
                  onPress={() => navigation.navigate(NavigationStrings.PRODUCT_DETAILS_SCREEN, { product: item })} style={styles.cartItemContainer}>
                  <View style={styles.imageContainer}>
                    <Image resizeMode='contain' source={images[item.img]} style={styles.productImage} />
                  </View>
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.productPrice}>${item.price}</Text>
                      <CartButton mini={true} quantity={item.quantity}
                        incQuantity={() => dispatch(incrementQuantity(item))}
                        decQuantity={() => dispatch(decrementQuantity(item))}
                      />

                    </View>
                  </View>

                </TouchableOpacity>
              )
            }}
            renderHiddenItem={({ item }) => (
              <View style={styles.productActions}>

                {/* <TouchableOpacity style={styles.wishlist} onPress={() => toggleWishlist(item.id)}>
                  <Ionicons
                    name={wishlist.includes(item.id) ? "heart" : "heart-outline"}
                    size={width * 0.05}
                    color={wishlist.includes(item.id) ? theme.colors.tertiaryColor : theme.colors.lightColor}
                  />
                </TouchableOpacity > */}
                <TouchableOpacity style={styles.wishlist} onPress={() => removeItemFromCart(item.id)}>
                  <Ionicons name="trash-outline" size={width * 0.05} color={theme.colors.lightColor} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            leftOpenValue={0}
            rightOpenValue={-130}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        )
        }
      </ScrollView>

      {cart.length ? (
        <View style={styles.bottomBox}>
          {/* <View style={styles.promoCodeBox}>
            <TextInput style={styles.promoInput} placeholder='Enter Promo Code' />
            <TouchableOpacity style={styles.promoButton}>
              <Text style={styles.textApply}>Apply</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.amtRow}>
            <Text style={styles.amtTextHead}>Subtotal</Text>
            <Text style={styles.amtTextValue}>${subTotal.toFixed(2)}</Text>
          </View>
          <View style={styles.amtRow}>
            <Text style={styles.amtTextHead}>Shipping</Text>
            <Text style={styles.amtTextValue}>$20.00</Text>
          </View>
          <View style={styles.amtRow}>
            <Text style={styles.amtTextHead}>Total</Text>
            <Text style={styles.amtTextValue}>${(subTotal + 20.00).toFixed(2)}</Text>
          </View>
          <View style={styles.customBtnContainer}>
            <Button customStyle={{ width: '60%' }} onPressHandler={goToCheckout} btnText={'Checkout'} isDisabled={false} />
          </View>
        </View>)
        : null}
    </>
  );
}
