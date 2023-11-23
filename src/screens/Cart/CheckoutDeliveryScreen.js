import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import NavigationStrings from '../../constants/NavigationStrings'
import styles from './styles';
import { ScrollView } from "react-native-virtualized-view";
import Button from '../../components/atoms/Button';
import RadioButtons from "../../components/atoms/RadioButtons";
import Header from "../../components/molecules/Header";
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  country: '',
  zipcode: ''
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  address: yup.string().required('Adress is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  country: yup.string().required('Country is required'),
  zipcode: yup.string().required('Zip code is required'),
});

export default function CheckoutDeliveryScreen({ route }) {
  const { total } = route.params;
  const navigation = useNavigation();
  const [deliveryMethod, setDeliveryMethod] = useState("Door delivery");
  const address = ['Marvis Kaprobo', 'KM 5 refinery rooad opposite re {"\n"} public road, effrun delta state kmbu', '+234 9011039271'];

  const handleDeliveryMethod = (method) => {
    setDeliveryMethod(method);
  };

  const goToCheckout = () => {
    navigation.navigate(NavigationStrings.CHECKOUT_PAYMENT_SCREEN, { total, deliveryMode: deliveryMethod, address });
  };

  const onSubmit = (values) => {
    console.log('Submitted values:', values);
    navigation.navigate(NavigationStrings.CHECKOUT_PAYMENT_SCREEN, { total, deliveryMode: deliveryMethod, address, delivery : values });
  };

  return (
    <>
      <Header screenTitle={"Checkout"} />

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.mainHeading}>Delivery</Text>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formikProps) => (
            <View>
              <Text style={styles.label}>First Name</Text>
              <View style={styles.shadow}>
                <TextInput
                  style={styles.input}
                  onChangeText={formikProps.handleChange('firstName')}
                  value={formikProps.values.firstName}
                  onBlur={formikProps.handleBlur('firstName')}
                  placeholder="Jhon"
                />
              </View>
              <Text style={styles.errorcontent}>{formikProps.touched.firstName && formikProps.errors.firstName}</Text>

              <Text style={styles.label}>Last Name</Text>
              <View style={styles.shadow}>
                <TextInput
                  style={styles.input}
                  onChangeText={formikProps.handleChange('lastName')}
                  value={formikProps.values.lastName}
                  onBlur={formikProps.handleBlur('lastName')}
                  placeholder="Doe"
                />
              </View>
              <Text style={styles.errorcontent}>{formikProps.touched.lastName && formikProps.errors.lastName}</Text>

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={formikProps.handleChange('email')}
                value={formikProps.values.email}
                onBlur={formikProps.handleBlur('email')}
                placeholder="Email"
              />
              <Text style={styles.errorcontent}>{formikProps.touched.email && formikProps.errors.email}</Text>

              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                onChangeText={formikProps.handleChange('phone')}
                value={formikProps.values.phone}
                onBlur={formikProps.handleBlur('phone')}
                placeholder="(000)-000-0000"
              />
              <Text style={styles.errorcontent}>{formikProps.touched.phone && formikProps.errors.phone}</Text>

              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.input}
                onChangeText={formikProps.handleChange('address')}
                value={formikProps.values.address}
                onBlur={formikProps.handleBlur('address')}
                placeholder="304 Werninger Street"
              />
              <Text style={styles.errorcontent}>{formikProps.touched.address && formikProps.errors.address}</Text>

              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.input}
                onChangeText={formikProps.handleChange('city')}
                value={formikProps.values.city}
                onBlur={formikProps.handleBlur('city')}
                placeholder="Houston"
              />
              <Text style={styles.errorcontent}>{formikProps.touched.city && formikProps.errors.city}</Text>

              <Text style={styles.label}>State</Text>
              <TextInput
                style={styles.input}
                onChangeText={formikProps.handleChange('state')}
                value={formikProps.values.state}
                onBlur={formikProps.handleBlur('state')}
                placeholder="Texas"
              />
              <Text style={styles.errorcontent}>{formikProps.touched.state && formikProps.errors.state}</Text>

              <Text style={styles.label}>Country</Text>
              <TextInput
                style={styles.input}
                onChangeText={formikProps.handleChange('country')}
                value={formikProps.values.country}
                onBlur={formikProps.handleBlur('country')}
                placeholder="United States"
              />
              <Text style={styles.errorcontent}>{formikProps.touched.country && formikProps.errors.country}</Text>

              <Text style={styles.label}>ZipCode</Text>
              <TextInput
                style={styles.input}
                onChangeText={formikProps.handleChange('zipcode')}
                value={formikProps.values.zipcode}
                onBlur={formikProps.handleBlur('zipcode')}
                placeholder="77032"
              />
              <Text style={styles.errorcontent}>{formikProps.touched.zipcode && formikProps.errors.zipcode}</Text>

              {/* <TouchableOpacity onPress={formikProps.handleSubmit} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Send Now</Text>
              </TouchableOpacity> */}
              <View style={styles.btnContainer2}>
                <Button onPressHandler={formikProps.handleSubmit} btnText={'Send Now'} isDisabled={false} />
              </View>
            </View>
          )}
        </Formik>

        {/* <View style={[styles.spaceBetween, styles.padding20]}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        </View> */}

      </ScrollView>

      {/* <View style={styles.btnContainer2}>
        <Button onPressHandler={goToCheckout} btnText={'Proceed to payment'} isDisabled={false} />
      </View> */}
    </>
  )
}