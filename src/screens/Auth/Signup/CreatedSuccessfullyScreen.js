import React from 'react'
import SuccessScreen from '../../../components/templates/SuccessScreen'
import NavigationStrings from '../../../constants/NavigationStrings'

export default function CreatedSuccessfullyScreen({ navigation }) {
  return (
    <SuccessScreen msg={'Your Profile is ready to use'} buttonText={'Try Order'} onPressHandler={() => navigation.navigate(NavigationStrings.LOGIN_SCREEN)} />
  )
}