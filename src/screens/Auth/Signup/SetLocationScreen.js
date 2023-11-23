import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Button from "../../../components/atoms/Button";
import styles from "./styles";
import NavigationStrings from '../../../constants/NavigationStrings';
import * as Location from 'expo-location';
import axios from 'axios';
import { location } from "./assets";

export default function SetLocationScreen({ navigation }) {
    const [userLocation, setUserLocation] = React.useState(null);

    const getLocationAsync = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }

        try {
            let location = await Location.getCurrentPositionAsync({});
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
            );

            if (response.data) {
                const addressParts = response.data.address;
                const formattedAddress = `${addressParts.city}, ${addressParts.state}, ${addressParts.country}, ${addressParts.postcode}`;
                setUserLocation(formattedAddress);
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.detailsContainer}>
            <View style={styles.detailsHeadContainer}>
                <Text style={styles.heading}>Set Your Location</Text>
                <Text style={styles.paragraphText}>
                    This data will be displayed in your account {"\n"}profile for security{" "}
                </Text>
            </View>

            <View style={styles.yourLocationRow}>
                <Image resizeMode="contain" source={location} style={styles.locationIcon} />
                <Text style={[styles.locationText, styles.ml_15]}>Your Location</Text>
            </View>

            <TouchableOpacity style={styles.locationBox} onPress={getLocationAsync}>

                {userLocation ? (
                    <Text style={styles.locationText}>
                        Your location: {userLocation}
                    </Text>
                ) : <Text style={styles.locationText}>Set Location</Text>
                }
            </TouchableOpacity>



            <Button
                customStyle={styles.customButtonStyles}
                btnText={"Next"}
                onPressHandler={() => navigation.navigate(NavigationStrings.CREATED_SUCCESSFULLY)}
            />
        </ScrollView>
    );
}
