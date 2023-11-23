import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import styles from './styles';
import NavigationStrings from '../../../constants/NavigationStrings';
import InputField from '../../../components/molecules/InputField';
import Button from '../../../components/atoms/Button';
import AuthTitle from '../../../components/atoms/AuthTitle';
import { facebookIcon, googleIcon, logo } from '../assets';
import { useFocusEffect } from '@react-navigation/native';

export default function LoginScreen({ navigation }) {
  const scrollViewRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      setEmail('admin@example.com');
      setPassword('admin123');
    }, [])
  );

  const handleLoginPress = () => {
    if (!email || !password) {
      Alert.alert("Oops 😞", "Email and password is required")
    } else {
      if (email === "admin@example.com" && password === "admin123") {
        navigation.navigate(NavigationStrings.HOME_TAB_SCREEN);
      } else {
        Alert.alert("Oops 😞", "Invalid Credentials")
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={[
            styles.container,
          ]}
          keyboardShouldPersistTaps="handled"
        >
          <Image style={styles.logo} resizeMode="contain" source={logo} />

          <View style={styles.loginContainer}>
            <AuthTitle title={'Login To Your Account'} />

            <InputField
              icon={'mail'}
              placeholder={'Example@gmail.com'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <InputField
              icon={'lock'}
              placeholder={'Enter your password'}
              keyboardType={'default'}
              isPassword={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.marginVertical30}></View>

            {/* <TouchableOpacity
              style={styles.marginVertical30}
              onPress={() => {
                navigation.navigate(NavigationStrings.FORGOT_PASSWORD_SCREEN);
              }}>
              <Text style={styles.forgetPassText}>Forgot Your Password?</Text>
            </TouchableOpacity> */}

            <Button btnText={'Login'} onPressHandler={handleLoginPress} />

            <Text style={styles.continueText}>Or</Text>
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={styles.socialButtons}>
                <Image style={styles.socialIcon} source={facebookIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButtons}>
                <Image style={styles.socialIcon} source={googleIcon} />
              </TouchableOpacity>
            </View>

            {/* <View style={styles.anotherAction}>
              <Text style={styles.text}>Don't have an account</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(NavigationStrings.SIGNUP_SCREEN);
                }}>
                <Text style={styles.signup}>Signup</Text>
              </TouchableOpacity>
            </View> */}
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
