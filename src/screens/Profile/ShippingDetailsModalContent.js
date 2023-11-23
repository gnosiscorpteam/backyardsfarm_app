import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Button from '../../components/atoms/Button';
import InputFieldBordered from "../../components/molecules/InputFieldBordered";
import theme from "../../theme/theme";
const { width } = Dimensions.get('screen');

export default function PaymentMethodsModalContent({ closeModal }) {
    return (
        <View>
            <Text style={styles.modalHeading}>Shipping Method</Text>
            <View style={styles.cardInputContainer}>
                <InputFieldBordered keyboardType={'default'} placeholder={'Enter Street Address'} />
                <InputFieldBordered keyboardType={'default'} placeholder={'Enter City/State'} />
                <InputFieldBordered keyboardType={'default'} placeholder={'Enter Pincode'} />
                <InputFieldBordered keyboardType={'default'} placeholder={'Enter Residence'} />
                <Button btnText="Save" onPressHandler={() => { closeModal() }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalHeading: {
        fontSize: theme.fonts.fontSizeMedium,
        fontFamily: theme.fonts.RobotoBold,
        color: theme.colors.darkColor,
        marginBottom: width * 0.06
    },
    cardInputContainer: {
        marginVertical: width * 0.06
    },
})
