import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles';
import Header from "../../components/molecules/Header";
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';
import { specialOffer, megaSale } from './assets';
import NavigationStrings from '../../constants/NavigationStrings';
import EmptyScreen from '../../components/templates/EmptyScreen';
import StatusBarConfig from '../../components/atoms/StatusBarConfig';

export default function OffersAndPromoScreen() {
  const navigation = useNavigation();
  const [offers, setOffers] = useState([]);
  const offersData = [
    {
      id: 1,
      title: `Mega Sale: Upto 70% off on all items`,
      img: megaSale,
      bgColor: "#f9cecb",
      textColor: "#000"
    },
    {
      id: 2,
      title: `Get 30% off on your first order!`,
      img: specialOffer,
      bgColor: "#E9F7BA",
      textColor: "#000"
    },
  ]

  useEffect(() => {
    setOffers(offersData);
  }, []);

  return (
    <>
      <StatusBarConfig isAuthScreen={false} />

      <Header screenTitle={"Voucher Promo"} />

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {offers && offers.length ? (
          <FlatList
            data={offers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.promoContainer, { backgroundColor: item.bgColor }]}>
                <View style={styles.textDv}>
                  <Text style={[styles.promoText, { color: item.textColor }]}>{item.title}</Text>

                  <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.HOME_STACK_SCREEN)} style={styles.buyNowBtn}>
                    <Text style={styles.btnText}>Buy Now</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.imgDiv}>
                  <Image
                    source={item.img}
                    style={styles.promoImage}
                    resizeMode='contain'
                  />
                </View>
              </View>
            )}
          />) : (
          <EmptyScreen
            title={"ohh snap! No offers yet!"}
            description={`you doesn't have any offers yet please check again`}
            icon={"gift"}
          />
        )
        }

      </ScrollView>

    </>
  )
}