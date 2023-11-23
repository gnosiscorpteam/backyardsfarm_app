import { View, Text, TouchableWithoutFeedback, Platform, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import InputField from '../../../components/molecules/InputField'
import Button from '../../../components/atoms/Button'
import styles from './styles';
import NavigationStrings from '../../../constants/NavigationStrings';
import { Alert } from 'react-native';

export default function DetailsScreen({ navigation }) {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    mobile: ""
  })

  const hanlderNextButton = () => {
    if (!details.fname || !details.lname || !details.mobile) {
      Alert.alert("Oops 😞", "All Fields are required")
    } else {
      navigation.navigate(NavigationStrings.PAYMENT_METHOD_SCREEN);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : undefined}
        style={styles.keyboardPadding}
      >
        <ScrollView contentContainerStyle={styles.detailsContainer}>
          <View style={styles.detailsHeadContainer}>
            <Text style={styles.heading}>Fill in your bio to get {"\n"}started</Text>
            <Text style={styles.paragraphText}>This data will be displayed in your account {"\n"}profile for security </Text>
          </View>

          <View style={{ marginBottom: 100 }}>
            <InputField
              placeholder={"First Name"}
              keyboardType={"default"}
              value={details.fname}
              onChangeText={(text) => setDetails({ ...details, fname: text })}
            />
            <InputField
              placeholder={"Last Name"}
              keyboardType={"default"}
              value={details.lname}
              onChangeText={(text) => setDetails({ ...details, lname: text })}
            />

            <InputField
              placeholder={"Mobile Number"}
              keyboardType={"numeric"}
              value={details.mobile}
              onChangeText={(text) => setDetails({ ...details, mobile: text })}
            />
          </View>

          <Button
            customStyle={styles.customButtonStyles}
            btnText={"Next"}
            onPressHandler={() => hanlderNextButton()}
          />


        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  )
}