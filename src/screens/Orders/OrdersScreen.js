import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view'
import styles from './styles';
import Header from "../../components/molecules/Header";
import EmptyScreen from "../../components/templates/EmptyScreen";
import { Entypo } from '@expo/vector-icons';
import NavigationStrings from '../../constants/NavigationStrings';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { cancelOrder } from '../../state/reducers/orderSlice';

const { width } = Dimensions.get('screen');

const OrderDetailsScreen = () => {
  const orders = useSelector((state) => state.orderReducer.orders);
  const navigation = useNavigation();
  const [orderVisibility, setOrderVisibility] = useState({});
  const dispatch = useDispatch();

  const getTotalQuantity = (items) => {
    let totalQuantity = 0;
    items.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const toggleOrderVisibility = (orderId) => {
    setOrderVisibility((prevState) => ({
      ...prevState,
      [orderId]: !prevState[orderId] || false,
    }));
  };


  const navigateToRatingScreen = () => {
    navigation.navigate(NavigationStrings.RATING_SCREEN)
  }

  const navigateToTrackingScreen = (order) => {
    navigation.navigate(NavigationStrings.ORDER_TRACK_SCREEN, { order })
  }

  const cancelOrderHandler = (orderId) => {
    dispatch(cancelOrder({ orderId }));
  };


  return (
    <>
      <Header screenTitle={"My Orders"} isNavigationToHome={true} />

      <ScrollView style={styles.contentContainerStyle}>
        {orders && orders.length ? orders.map((order, index) => (

          <View key={index} style={styles.orderContainer}>

            <View style={styles.topBar}>
              <Text style={styles.orderNum}>Order number : {order.id}</Text>
              <Text style={styles.orderDate}>{new Date(order.date).toLocaleDateString()}</Text>
            </View>

            <View style={styles.spaceBetween}>
              <Text style={styles.brandName}>Food Holic</Text>
              <TouchableOpacity onPress={() => toggleOrderVisibility(order.id)}>
                <Entypo name={orderVisibility[order.id] ? "chevron-up" : "chevron-down"} size={width * 0.05} />
              </TouchableOpacity>
            </View>
            <Text style={styles.totalItemsDetailKey}>Total Amount: <Text style={styles.totalItemsDetailValue}>${order.total} </Text>  Qty:  <Text style={styles.totalItemsDetailValue}>{getTotalQuantity(order.items)}</Text> Items: <Text style={styles.totalItemsDetailValue}>{order.items.length}</Text></Text>

            {
              orderVisibility[order.id] && <View>
                <Text style={styles.headingItem}>Items</Text>
                {order.items.map((item, itemIndex) => (
                  <View key={itemIndex}>
                    <Text style={styles.orderedItem}>{item.name} * {item.quantity} * ${item.price}</Text>
                  </View>
                ))}
              </View>
            }

            {
              order.status != 'Cancelled' ?
                <TouchableOpacity
                  onPress={() => order.status === "Delivered" ? navigateToRatingScreen() : navigateToTrackingScreen(order)}
                  style={styles.trackBtn}>
                  <Text style={styles.buttonText}>
                    {
                      order.status === "Delivered" ? "Review" : "Track"
                    }
                  </Text>
                </TouchableOpacity> : null
            }

            {
              order.status != 'Cancelled' &&
              <Text style={[
                styles.status,
                {
                  color: order.status === 'Processing' ? 'navy' :
                    order.status === 'Delivered' ? 'green' :
                      order.status === 'Cancelled' ? 'red' : 'black'
                }
              ]}>
                <Entypo
                  name={order.status === 'Processing' ? 'cycle' :
                    order.status === 'Delivered' ? 'check' :
                      order.status === 'Cancelled' ? 'circle-with-cross' : 'circle'}
                  size={width * 0.045}
                />
                <Text> {order.status}</Text>
              </Text>
            }

            {
              order.status == "Cancelled" &&


              <Text style={[
                styles.cancelStatus
              ]}>
                <Entypo
                  name={order.status === 'Cancelled' ? 'circle-with-cross' : 'circle'}
                  size={width * 0.045}
                />
                <Text> {order.status}</Text>
              </Text>

            }

            {order.status === 'Processing' && (
              <TouchableOpacity onPress={() => cancelOrderHandler(order.id)} style={styles.cancelBtn}>
                <Text style={styles.cancelBtnText}>Cancel Order</Text>
              </TouchableOpacity>
            )}

          </View>
        )) : (
          <EmptyScreen
            title={"No orders yet!"}
            description={`Hit the order now button down to create an order`}
            showButton={true}
            btnHandler={() => navigation.navigate(NavigationStrings.HOME_STACK_SCREEN)}
            icon={"cart"}
          />
        )
        }
      </ScrollView>
    </>

  );
};

export default OrderDetailsScreen;
