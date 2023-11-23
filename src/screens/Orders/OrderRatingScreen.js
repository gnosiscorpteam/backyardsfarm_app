import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { ScrollView } from 'react-native-virtualized-view'
import { meal } from './assets';
import InputField from '../../components/molecules/InputField';
import { Entypo } from '@expo/vector-icons'
const { width } = Dimensions.get('screen');
import theme from "../../theme/theme";
import NavigationStrings from '../../constants/NavigationStrings';
import { useNavigation } from '@react-navigation/native';

export default function OrderRatingScreen() {
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();

  const handleStarClick = (starRating) => {
    setRating(starRating);
  };

  return (
    <>
      <ScrollView style={styles.contentContainerStyle}>

        <View style={styles.centered}>
          <View style={styles.circle}>
            <Image style={styles.circleImg} source={meal} resizeMode={'cover'} />
          </View>

          <Text style={styles.content}>Thank You!</Text>
          <Text style={styles.content}>Enjoy Your Meal</Text>

          <Text style={styles.content2}>Please rate your Food</Text>

          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                style={styles.star}
                onPress={() => handleStarClick(star)}
              >
                <Entypo
                  name={star <= rating ? 'star' : 'star-outlined'}
                  size={width * 0.1}
                  color={theme.colors.primaryColor}
                />
              </TouchableOpacity>
            ))}
          </View>

          <InputField
            icon={'pencil'}
            placeholder={'Leave Feedback'}
            keyboardType={'default'}
          />

          <View style={styles.footer}>
            <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate(NavigationStrings.ORDERS_SCREEN)}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipBtn} onPress={() => navigation.navigate(NavigationStrings.ORDERS_SCREEN)}>
              <Text style={styles.skipBtnText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </>
  )
}