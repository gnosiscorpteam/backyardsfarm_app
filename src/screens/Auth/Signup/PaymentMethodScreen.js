import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Button from "../../../components/atoms/Button";
import styles from "./styles";
import NavigationStrings from '../../../constants/NavigationStrings';
import { payoneer, paypal, visa } from './assets';
import { useState } from "react";

export default function PaymentMethodScreen({ navigation }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paypal')
  return (
    <ScrollView contentContainerStyle={styles.detailsContainer}>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsHeadContainer}>
          <Text style={styles.heading}>Payment Method</Text>
          <Text style={styles.paragraphText}>
            This data will be displayed in your account {"\n"}profile for security{" "}
          </Text>
        </View>

        <TouchableOpacity onPress={() => setSelectedPaymentMethod("paypal")} style={selectedPaymentMethod === "paypal" ? styles.paymentMehodBoxActive : styles.paymentMehodBox}>
          <Image
            resizeMode="contain"
            style={styles.paymentMethodImage}
            source={paypal}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedPaymentMethod("visa")}
          style={selectedPaymentMethod === "visa" ? styles.paymentMehodBoxActive : styles.paymentMehodBox}>
          <Image
            resizeMode="contain"
            style={styles.paymentMethodImage}
            source={visa}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedPaymentMethod("payoneer")}
          style={selectedPaymentMethod === "payoneer" ? styles.paymentMehodBoxActive : styles.paymentMehodBox}>
          <Image
            resizeMode="contain"
            style={styles.paymentMethodImage}
            source={payoneer}
          />
        </TouchableOpacity>

        <Button
          customStyle={styles.customButtonStyles}
          btnText={"Next"}
          onPressHandler={() => navigation.navigate(NavigationStrings.UPLOAD_PROFILE_PHOTO_SCREEN)}
        />
      </View>
    </ScrollView>
  );
}
