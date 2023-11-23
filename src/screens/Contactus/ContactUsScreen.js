import { View, Text, Image, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import styles from './styles';
import { ScrollView } from "react-native-virtualized-view";
import { Ionicons } from '@expo/vector-icons';
import Header from "../../components/molecules/Header";
import { map } from './assets';
import axios from 'axios';
import { Snackbar, Button, Provider as PaperProvider } from "react-native-paper";

const initialValues = {
  fullname: '',
  email: '',
  msg: '',
  // support: "sales@backyards.farm"
  support: "webtop1026@gmail.com"
};

const validationSchema = yup.object().shape({
  fullname: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  msg: yup.string().required('Message is required'),
});


export default function ContactUsScreen() {
  
  const [snackVisible, setSnackVisible] = useState(false);

  const onSubmit = async (values) => {
    console.log('Submitted values:', values);
    await axios
      .post(`https://backyardfarmapp-3b1ed7a6ed3d.herokuapp.com/api/contact`, values)
      .then(res => {
        console.log("res", res.data.status);
        if (res.data.status) {
          setSnackVisible(!snackVisible)
        }
      })
      .catch(error => {
        console.log("error", error);
      });
  };
  return (
    <>
      <Header screenTitle={"Contact Us"} />

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>

        <View style={styles.hearder}>
          <View style={styles.container}>
            <Image
              style={styles.map}
              resizeMode="contain"
              source={map}
            />
          </View>
          <View style={styles.contactgroup}>
            <View style={styles.contactblog}>
              <View style={styles.iconborder}>
                <Ionicons name="call" size={24} color="white" />
              </View>
              <Text style={styles.contacttype}>Call Us</Text>
            </View>
            <View style={styles.contactblog}>
              <View style={styles.iconborder}>
                <Ionicons name="mail" size={24} color="white" />
              </View>
              <Text style={styles.contacttype}>Email Us</Text>
            </View>
          </View>
        </View>

        <View style={styles.contactform}>
          <Text style={styles.subtitle}>QUICK CONTACT</Text>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formikProps) => (
              <View>
                <Text style={styles.label}>Full Name</Text>
                <View style={styles.shadow}>
                  <TextInput
                    style={styles.input}
                    onChangeText={formikProps.handleChange('fullname')}
                    value={formikProps.values.fullname}
                    onBlur={formikProps.handleBlur('fullname')}
                    placeholder="Full Name"
                  />
                </View>
                <Text style={styles.errorcontent}>{formikProps.touched.fullname && formikProps.errors.fullname}</Text>

                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={formikProps.handleChange('email')}
                  value={formikProps.values.email}
                  onBlur={formikProps.handleBlur('email')}
                  placeholder="Email"
                />
                <Text style={styles.errorcontent}>{formikProps.touched.email && formikProps.errors.email}</Text>

                <Text style={styles.label}>Message</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={formikProps.handleChange('msg')}
                  value={formikProps.values.msg}
                  onBlur={formikProps.handleBlur('msg')}
                  placeholder="Write a message here"
                  editable
                  multiline
                  numberOfLines={5}
                  maxLength={40}
                />
                <Text style={styles.errorcontent}>{formikProps.touched.msg && formikProps.errors.msg}</Text>

                <TouchableOpacity onPress={formikProps.handleSubmit} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Send Now</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>

        
        <PaperProvider>
          <Snackbar
            visible={snackVisible}
            onDismiss={() => setSnackVisible(false)}
            action={{ label: 'Ok' }}>
            Success
          </Snackbar>
        </PaperProvider>

      </ScrollView>
    </>
  );
}