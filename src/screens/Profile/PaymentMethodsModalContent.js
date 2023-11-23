import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import RadioButtons from "../../components/atoms/RadioButtons";
import Button from '../../components/atoms/Button';
import InputFieldBordered from "../../components/molecules/InputFieldBordered";
import theme from "../../theme/theme";
const { width } = Dimensions.get('screen');

export default function PaymentMethodsModalContent({ closeModal }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Card");
  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <View>
      <Text style={styles.modalHeading}>Payment Method</Text>
      <View style={styles.paymentOptions}>
        <RadioButtons
          label="Card"
          onSelect={handlePaymentMethodSelect}
          selected={selectedPaymentMethod === "Card"}
        />
        <RadioButtons
          label="Bank Account"
          onSelect={handlePaymentMethodSelect}
          selected={selectedPaymentMethod === "Bank Account"}
        />
        <RadioButtons
          label="Paypal"
          onSelect={handlePaymentMethodSelect}
          selected={selectedPaymentMethod === "Paypal"}
        />
      </View>

      {selectedPaymentMethod === "Card" && (
        <View style={styles.cardInputContainer}>
          <InputFieldBordered keyboardType={'numeric'} placeholder={'Enter Card Number'} />
          <Button btnText="Save" onPressHandler={() => { closeModal() }} />
        </View>
      )}

      {selectedPaymentMethod === "Bank Account" && (
        <View style={styles.cardInputContainer}>
          <InputFieldBordered keyboardType={'default'} placeholder={'Bank Holder Name'} />
          <InputFieldBordered keyboardType={'numeric'} placeholder={'Bank Account No.'} />
          <InputFieldBordered keyboardType={'numeric'} placeholder={'IFCS Code'} />

          <Button btnText="Save" onPressHandler={() => { closeModal() }} />
        </View>
      )}

      {selectedPaymentMethod === "Paypal" && (
        <View style={styles.cardInputContainer}>
          <InputFieldBordered keyboardType={'email-address'} placeholder={'Enter Paypal Email Address'} />
          <Button btnText="Save" onPressHandler={() => { closeModal() }} />
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  modalHeading: {
    fontSize: theme.fonts.fontSizeMedium,
    fontFamily: theme.fonts.RobotoBold,
    color: theme.colors.darkColor,
    marginBottom: width * 0.06
  },
  paymentOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: width * 0.03,
  },
  cardInputContainer: {
    marginVertical: width * 0.06
  },
})

