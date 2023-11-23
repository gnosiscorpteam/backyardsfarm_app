import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import theme from '../../theme/theme';
import styles from './styles';
import { ScrollView } from 'react-native-virtualized-view'
import Header from '../../components/molecules/Header';

export default function TrackOrderScreen() {
    const { params } = useRoute();

    const { total, status, paymentMethod, id } = params.order;
    const orderStatuses = [
        { label: 'Confirmed', time: '1:00 pm' },
        { label: 'Processing', time: '2:00 pm' },
        { label: 'On the Way', time: '3:00 pm' },
        { label: 'Delivered', time: '4:00 pm' },
    ];

    const activeStatusIndex = orderStatuses.findIndex((item) => item.label === status);

    return (

        <>
            <Header screenTitle={"My Orders"} />

            <ScrollView style={styles.contentContainerStyle}>
                <Text style={styles.heading}>Track Order</Text>
                <View style={styles.orderDetails}>
                    <Text style={styles.orderId}>Order Id: {id}</Text>
                    <Text style={styles.orderDate}> Today</Text>
                </View>

                <View style={styles.progressContainer}>
                    {orderStatuses.map((orderStatusItem, index) => (
                        <View key={index} style={styles.progressItem}>
                            <Text style={styles.progressTime}>{orderStatusItem.time}</Text>
                            <View style={{ textAlign: 'center' }}>
                                <View style={[
                                    styles.progressLine,
                                    {
                                        backgroundColor:
                                            index === orderStatuses.length - 1 ? 'transparent' :
                                                index <= activeStatusIndex - 1 ? theme.colors.primaryColor : theme.colors.borderColor,
                                    },
                                ]}>
                                    <View
                                        style={[
                                            styles.progressCircle,
                                            status == orderStatusItem.label && styles.progressCircleActive,
                                        ]}
                                    />
                                </View>
                            </View>

                            <Text
                                style={[
                                    styles.progressStatus,
                                    status == orderStatusItem.label && styles.activeStatus,
                                ]}
                            >
                                {orderStatusItem.label}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={styles.totalContainer}>
                    <View style={styles.totalBillBox}>
                        <Text style={styles.totalBil}>Total Bill</Text>
                        <Text style={styles.totalBillAmt}>${total.toFixed(2)}</Text>
                    </View>
                    <Text style={styles.payMethod}>Payment Method:</Text>
                    <View style={styles.cardDetails}>
                        <Text style={styles.payNum}>xxxx xxxx xx 2450</Text>
                        <Text style={styles.paymentOpt}>{paymentMethod}</Text>
                    </View>
                </View>
            </ScrollView>

        </>
    );
}

