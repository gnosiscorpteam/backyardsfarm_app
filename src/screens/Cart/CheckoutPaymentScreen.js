import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-virtualized-view";
import Button from '../../components/atoms/Button';
import RadioButtons from "../../components/atoms/RadioButtons";
import RadioButtonWithCheckmark from "../../components/atoms/RadioButtonWithCheckmark";
import CenteredModal from '../../components/atoms/CenteredModal';
import OrderCompletedSucessFully from './OrderCompletedSucessFully';
import NavigationStrings from '../../constants/NavigationStrings';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../../state/reducers/cartSlice';
import { addOrder } from '../../state/reducers/orderSlice';
import Header from "../../components/molecules/Header";
import { useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';

const { height } = Dimensions.get('screen');

export default function CheckoutPaymentScreen({ route }) {
  const { total, deliveryMode, address, delivery } = route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer);

  const [deliveryMethod, setDeliveryMethod] = useState(deliveryMode);
  const [paymentMethod, setPaymentMethod] = useState("Bank Account");
  const [modalVisible, setModalVisible] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const joinedAddress = address.join(', ');
  const cleanedAddress = joinedAddress.replace(/\{|\}|\n/g, '');

  useEffect(() => {
    setModalVisible(false);
    setOrderCompleted(false)
  }, []);

  const handleDeliveryMethod = (method) => {
    setDeliveryMethod(method);
  };


  const handlePaymentMethodSelect = (option) => {
    setPaymentMethod(option);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  function generateOrderId() {
    const randomSuffix = Math.floor(Math.random() * 1000);
    const timestamp = new Date().valueOf();
    const uniqueId = (timestamp * 1000 + randomSuffix).toString(36);
    const paddedId = uniqueId.padStart(7, '0');
    return paddedId;
  }

  const proceedButtonHandler = () => {
    const orderItems = cartItems.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    const order = {
      id: generateOrderId(),
      items: orderItems,
      deliveryAddress: cleanedAddress,
      paymentMethod,
      status: 'Processing',
      total,
      date: new Date().toISOString()
    };

    dispatch(addOrder(order));

    dispatch(emptyCart());
    setModalVisible(false);
    setOrderCompleted(true)
  }

  const continueShopping = () => {
    setOrderCompleted(false)
    navigation.reset({
      index: 0,
      routes: [{ name: NavigationStrings.HOME_STACK_SCREEN }],
    });
  }

  const goToOrdersPage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: NavigationStrings.ORDER_STACK_SCREEN }],
    });
  };

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`https://backyardfarmapp-3b1ed7a6ed3d.herokuapp.com/api/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: total,
      })
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    } = await fetchPaymentSheetParams();


    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      alert(`Error code: ${error.code}`, error.message);
    } else {
      // alert('Success', 'Your order is confirmed!');
      proceedButtonHandler();
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);


  return (
    <>
      <Header screenTitle={"Checkout"} />

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {/* <Text style={styles.mainHeading}>Confirm the details</Text> */}
        <View>
          <View>
            <Text style={styles.mainHeading}>Shipping details:</Text>
            <View style={styles.tableheader}>
              <Text style={[styles.headertext , {flex: 0.4}]}>Name</Text>
              <Text style={[styles.headertext,{flex: 0.35}]}>Quantity</Text>
              <Text style={[styles.headertext,{flex: 0.25}]}>Price</Text>
            </View>
            <View>
              {cartItems.map((item) => {
                return (
                  <View style={styles.tableheader}>
                    <Text style={[styles.detailtext , {flex: 0.4}]}>{item.name}</Text>
                    <Text style={[styles.detailtext , {flex: 0.35}]}>{item.quantity}</Text>
                    <Text style={[styles.detailtext , {flex: 0.25}]}>{item.price}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.addresssection}>
            <Text style={styles.mainHeading}>Address:</Text>
            <Text style={styles.addresstext}>{delivery.address}</Text>
            <Text style={styles.addresstext}>{delivery.city}, {delivery.state} {delivery.zipcode}</Text>
          </View>
        </View>
        <View>
          <Button onPressHandler={() => openPaymentSheet()} btnText={'CHECKOUT'} isDisabled={!loading} />
        </View>

      </ScrollView>

      <View style={styles.btnContainer2}>
        {/* <Button onPressHandler={() => showModal()} btnText={'Proceed to payment'} isDisabled={false} /> */}
      </View>

      <CenteredModal isVisible={modalVisible}>
        <Text style={styles.note}>Please Note</Text>
        <View style={styles.pad20}>
          <View style={styles.innerBox}>
            <Text style={styles.amtTextHead}>Shipping Details</Text>
            <Text style={styles.info}>{cleanedAddress}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text style={styles.amtTextHead}>Selected Payment Method</Text>
            <Text style={styles.info}>{paymentMethod}: 98679040</Text>
          </View>
          <View style={styles.innerBox}>
            <Text style={styles.amtTextHead}>Delivery Method</Text>
            <Text style={styles.info}>{deliveryMethod}</Text>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={() => closeModal()} style={styles.cancelBtnText}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
            {/* <Button onPressHandler={proceedButtonHandler} customStyle={styles.custombtnstyling} btnText={'Proceed'} /> */}
          </View>
        </View>

      </CenteredModal>

      {/* Order Completed Modal */}
      <CenteredModal isVisible={orderCompleted}>
        <OrderCompletedSucessFully continueShopping={continueShopping} goToOrdersPage={goToOrdersPage} />
      </CenteredModal>

    </>
  )
}
