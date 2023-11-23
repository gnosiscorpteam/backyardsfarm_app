import { TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, Keyboard, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';
import theme from '../../theme/theme';
import InputField from '../../components/molecules/InputField';
import Button from '../../components/atoms/Button';
import { userProfile } from './assets';
import NavigationStrings from '../../constants/NavigationStrings';
import BottomModal from '../../components/atoms/BottomModal';
import * as ImagePicker from "expo-image-picker";
import { camera, gallery } from './assets'
import Header from "../../components/molecules/Header";

const { width } = Dimensions.get('screen');

export default function EditProfileScreen({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [photoUri, setPhotoUri] = useState(userProfile);

  const handleCameraButtonPress = async () => {
    setVisible(false)

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("OOPs", "Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0]);
    }
  };

  const handleGalleryButtonPress = async () => {
    setVisible(false)
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("OOps", "Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0]);
    }
  };
  return (
    <>
      <Header screenTitle={"Edit Details"} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={[
              styles.contentContainerStyle,
            ]}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.centeredBox}>
              <View style={styles.imgBoxEdit}>
                <Image source={photoUri} style={styles.avatar} />
                <TouchableOpacity onPress={() => setVisible(!visible)}>
                  <Entypo style={styles.cameraIcon} name='camera' size={width * 0.065} color={theme.colors.primaryColor} />
                </TouchableOpacity>
              </View>
            </View>

            <InputField
              icon={'user'}
              placeholder={'Antron Smith'}
              keyboardType={'default'}
            />
            <InputField
              icon={'mail'}
              placeholder={'Example@gmail.com'}
              keyboardType={'email-address'}
            />
            <InputField
              icon={'mobile'}
              placeholder={'+01 345 8765 44'}
              keyboardType={'numeric'}
            />
            <InputField
              icon={'location'}
              placeholder={'Address'}
              keyboardType={'default'}
            />

          </ScrollView>

          <View style={styles.btnContainer}>
            <Button btnText="Save" onPressHandler={() => navigation.navigate(NavigationStrings.PROFILE_SCREEN)} />
          </View>


          <BottomModal isVisible={visible} onCloseModal={() => setVisible(false)}>
            <View style={{ marginVertical: 30, flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <TouchableOpacity style={styles.uploader} onPress={handleGalleryButtonPress}>
                <Image
                  resizeMode="contain"
                  style={styles.uploaderImg}
                  source={gallery}
                />
                <Text style={styles.uploadtext}>From Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.uploader} onPress={handleCameraButtonPress}>
                <Image
                  resizeMode="contain"
                  style={styles.uploaderImg}
                  source={camera}
                />
                <Text style={styles.uploadtext}>Take Photo</Text>
              </TouchableOpacity>
            </View>
          </BottomModal>



        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  )
}