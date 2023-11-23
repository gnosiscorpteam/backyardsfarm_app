import { View, Text, TouchableOpacity, Image, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-virtualized-view";
import styles from "./styles";
import Header from "../../components/molecules/Header";
import { Entypo } from '@expo/vector-icons';
import theme from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { userProfile } from './assets';
import Button from '../../components/atoms/Button';
import NavigationStrings from "../../constants/NavigationStrings";
import BottomModal from '../../components/atoms/BottomModal';
import PaymentMethodsModalContent from "./PaymentMethodsModalContent";
import ShippingDetailsModalContent from "./ShippingDetailsModalContent";
import FAQ from "./FAQ";
import Help from "./Help";

const { width } = Dimensions.get('screen');

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const profileMenuItems = [
    { id: 1, title: "Payment Methods" },
    { id: 2, title: "Shipping Address" },
    { id: 3, title: "My Orders" },
    { id: 4, title: "Favourites" },
    { id: 5, title: "Voucher Promo" },
    { id: 6, title: "Notification" },
    { id: 7, title: "Privacy policy" },
    { id: 8, title: "Security" },
    { id: 9, title: "Faq" },
    { id: 10, title: "Help" },
    { id: 11, title: "Log out" },
  ]

  const showModal = (content) => {
    setModalContent(content);
    if (content === "My Orders") {
      navigation.navigate(NavigationStrings.ORDER_STACK_SCREEN)
    } else if (content === "Favourites") {
      navigation.navigate(NavigationStrings.WISHLIST_SCREEN)
    } else if (content === "Notification") {
      navigation.navigate(NavigationStrings.HOME_STACK_SCREEN, {
        screen: NavigationStrings.NOTIFICATION_SCREEN
      })
    } else if (content === "Voucher Promo") {
      navigation.navigate(NavigationStrings.OFFERS_AND_PROMO_SCREEN)
    } else if (content === "Privacy policy") {
      navigation.navigate(NavigationStrings.PRIVACY_POLICY_SCREEN)
    } else if (content === "Security") {
      navigation.navigate(NavigationStrings.SECURITY_SCREEN)
    } else if (content === "Log out") {
      navigation.navigate(NavigationStrings.LOGIN_FORM_SCREEN)
    } else {
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent("");
  };

  return (
    <>
      <Header screenTitle={"My Profile"} />

      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.personalDetailsContainer}>
          <Text style={styles.text}>Personal Details</Text>
          <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.EDIT_PROFILE_SCREEN)}>
            <Entypo name="edit" size={width * 0.05} color={theme.colors.primaryColor} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(NavigationStrings.EDIT_PROFILE_SCREEN)}>
          <View style={styles.imgBox}>
            <Image style={styles.img} resizeMode="contain" source={userProfile} />
          </View>
          <View>
            <Text style={styles.name}>Adron Smith</Text>
            <Text style={styles.email}>Adronsmith@gmail.com</Text>
            <Text style={[styles.email, styles.marginTop5]}>+234 9014 3890</Text>
            <Text style={styles.email}>12 Main St Aberyscir {"\n"} LD3 5YD United Kingdom</Text>
          </View>
        </TouchableOpacity>

        <FlatList
          scrollEnabled={false}
          data={profileMenuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => showModal(item.title)} style={[styles.card, styles.spaceBet]}>
              <Text style={styles.text}>{item.title}</Text>
              <Entypo name="chevron-right" size={width * 0.05} />
            </TouchableOpacity >
          )}
        />

      </ScrollView>

      <View style={styles.btnContainer}>
        <Button btnText="Update" onPressHandler={() => navigation.navigate(NavigationStrings.HOME_STACK_SCREEN)} />
      </View>

      <BottomModal isVisible={modalVisible} onCloseModal={closeModal}>
        {modalContent === "Payment Methods" && (
          <PaymentMethodsModalContent closeModal={closeModal} />
        )}

        {modalContent === "Shipping Address" && (
          <ShippingDetailsModalContent closeModal={closeModal} />
        )}

        {modalContent === "Faq" && (
          <FAQ />
        )}

        {modalContent === "Help" && (
          <Help />
        )}

      </BottomModal>
    </>
  );
}
