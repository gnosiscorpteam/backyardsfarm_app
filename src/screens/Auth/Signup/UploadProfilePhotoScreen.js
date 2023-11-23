import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Button from "../../../components/atoms/Button";
import styles from "./styles";
import NavigationStrings from '../../../constants/NavigationStrings';
import * as ImagePicker from "expo-image-picker";
import { camera, gallery } from './assets'

export default function UploadProfilePhotoScreen({ navigation }) {
    const [photoUri, setPhotoUri] = useState(null);

    const handleCameraButtonPress = async () => {
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
            setPhotoUri(result.assets[0].uri);
        }
    };

    const handleGalleryButtonPress = async () => {
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
            setPhotoUri(result.assets[0].uri);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.detailsContainer}>
            <View style={styles.detailsHeadContainer}>
                <Text style={styles.heading}>Upload Your Profile {"\n"}Picture</Text>
                <Text style={styles.paragraphText}>
                    This data will be displayed in your account {"\n"}profile for security{" "}
                </Text>
            </View>

            {photoUri ? (
                <View style={styles.selectedImageBox}>
                    <Image
                        resizeMode={'cover'}
                        style={styles.selectedImage}
                        source={{ uri: photoUri }}
                    />
                </View>

            ) : (
                <>
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
                </>
            )}

            <Button
                customStyle={styles.customButtonStyles}
                btnText={"Next"}
                onPressHandler={() => navigation.navigate(NavigationStrings.SET_LOCATION_SCREEN)}
            />
        </ScrollView>
    );
}
