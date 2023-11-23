import React, { useState } from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-virtualized-view";
import Header from "../../components/molecules/Header";

const { width } = Dimensions.get('screen');

import styles from './styles';
import EmptyScreen from '../../components/templates/EmptyScreen';

export default function NotificationScreen() {
  const [notifications] = useState([
    {
      id: 1, title: "your order has been delivered", time: 'Recently', icon: "check-circle", color: 'green'
    },
    {
      id: 2, title: "Topup for $100 was successful", time: '10:00 Am', icon: 'cash-100', color: 'orange'
    },
    {
      id: 3, title: "your order has been canceled", time: '6:30 pm', icon: "book-cancel", color: 'red'
    }

  ]);

  return (
    <>
      <Header screenTitle={"Notifications"} isNotificationPage={true} />

      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
        <FlatList
          scrollEnabled={false}
          style={styles.flatList}
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.notificationContainer}>
              <MaterialCommunityIcons
                name={item.icon}
                size={width * 0.1}
                color={item.color}
              />
              <View style={styles.notificationTextContainer}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationBody}>{item.time}</Text>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <EmptyScreen
              title={"No new notiffication!"}
              description={`You will be notified shortly for your current activities`}
              icon={"notifications-off-circle"}
            />
          }
        />
      </ScrollView>
    </>

  );
}
