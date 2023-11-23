import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Button from '../../components/atoms/Button'
import { success } from './assets'
import theme from '../../theme/theme';

const { width, height } = Dimensions.get('screen');

export default function OrderCompletedSucessFully({ continueShopping, goToOrdersPage }) {
  return (
    <View style={Styles.parentContainer}>
      <Image resizeMode='contain' source={success} style={Styles.check} />
      <Text style={Styles.title}>Your Order is successfully placed</Text>
      {/* <Text style={Styles.subTitle}>You Can track the delivery in the  `Orders` section</Text> */}
      <View>
        <Button onPressHandler={continueShopping} customStyle={Styles.customBtn} btnText={'Continue Shopping'} />
        {/* <Text onPress={goToOrdersPage} style={Styles.goToOrder}>Go to orders</Text> */}
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  parentContainer: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent:'space-between',
    paddingBottom: width * 0.06,
    minHeight: height * 0.55,
  },
  customBtn: {
    width: width * 0.6,
    paddingVertical: width * 0.05,
    borderRadius: width * 0.09,
  },
  check: {
    width: '52%',
  },
  title: {
    fontSize: theme.fonts.fontSizeLarge,
    fontFamily: theme.fonts.RobotoBold,
    color: theme.colors.darkColor,
    marginTop: -(width * 0.15),
    textAlign: 'center',
    paddingHorizontal: width * 0.09,
    lineHeight: width * 0.09,
    marginBottom: width * 0.04,
  },
  subTitle: {
    fontSize: theme.fonts.fontSizeSmall,
    fontFamily: theme.fonts.RobotoRegular,
    color: theme.colors.greyColor,
    textAlign: 'center',
    paddingHorizontal: width * 0.09,
    marginTop: -(width * 0.02),
    marginBottom: width * 0.04,

  },
  goToOrder: {
    fontSize: theme.fonts.fontSizeSmall,
    fontFamily: theme.fonts.RobotoMedium,
    color: theme.colors.greyColor,
    textAlign: 'center',
    marginTop: width * 0.03
  }
})