import React from 'react'
import SuccessScreen from '../../../components/templates/SuccessScreen'
import NavigationStrings from '../../../constants/NavigationStrings'

export default function PasswordResetSuccssfulScreen({ navigation }) {
    return (
        <SuccessScreen msg={'Password reset successfully'} buttonText={'Login Now'} onPressHandler={() => navigation.navigate(NavigationStrings.LOGIN_FORM_SCREEN)} />
    )
}