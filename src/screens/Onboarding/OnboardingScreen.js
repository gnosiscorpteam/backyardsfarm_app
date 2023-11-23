import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import NavigationStrings from '../../constants/NavigationStrings';
import slides from './slides';
import theme from '../../theme/theme';
import StatusBarConfig from '../../components/atoms/StatusBarConfig';

const { width } = Dimensions.get('screen');

export default function OnboardingScreen({ route, navigation }) {
    const slideIndex = route.params?.slideIndex || 0;
    const slide = slides[slideIndex];

    const handleNext = () => {
        const nextSlideIndex = slideIndex + 1;
        if (nextSlideIndex >= slides.length) {
            navigation.navigate(NavigationStrings.LOGIN_SCREEN);
        } else {
            navigation.navigate(NavigationStrings.ONBOARDING_SCREEN, {
                slideIndex: nextSlideIndex,
            });
        }
    };

    const handleSkip = () => {
        navigation.navigate(NavigationStrings.LOGIN_SCREEN);
    };

    return (
        <>
            <StatusBarConfig isAuthScreen={true} />
            <View style={styles.container}>
                <Image style={styles.logo} resizeMode='cover' source={slide.image} />
                <View style={styles.contentcontainer}>
                    <Text style={styles.title}>{slide.title}</Text>
                    <Text style={styles.subTitle}>{slide.subTitle}</Text>
                    <TouchableOpacity onPress={handleNext}>
                        <Ionicons name="arrow-forward-circle" size={width * 0.15} color={theme.colors.primaryColor} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSkip}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
