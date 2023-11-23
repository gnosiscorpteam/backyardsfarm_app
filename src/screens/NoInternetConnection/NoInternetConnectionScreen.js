import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { MaterialIcons } from 'react-native-vector-icons';
import styles from './styles';
import theme from '../../theme/theme';

const { width } = Dimensions.get('screen');

export default function NoInternetConnectionScreen() {
  return (
    <View style={styles.centerdBox}>
      <MaterialIcons
        name="wifi-off"
        size={width * 0.4}
        color={theme.colors.darkColor}
        style={styles.cartIcon}
      />
      <Text style={styles.headText}>No internet Connection</Text>
      <Text style={styles.subText}>
        Your internet connection is  currently not available please check or try again
      </Text>
    </View>
  )
}