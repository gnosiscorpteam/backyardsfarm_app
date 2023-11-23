import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import theme from "../../theme/theme";
const { width } = Dimensions.get('screen');
import Button from '../../components/atoms/Button'

export default function Help() {
    return (
        <View>
            <Text style={styles.modalHeading}>Help</Text>

            <Text style={styles.text}>
                If you need assistance or have any questions, please feel free to
                contact our customer support team. {"\n"}  {"\n"}Our support team is available 24/7 to assist you with any inquiries or issues you may have. Whether it's about placing an order, tracking your delivery, or any other concerns, we're here to help.
            </Text>

            <Button btnText={'Contact Support'} onPressHandler={() => console.log('pressed')} />

            <Text style={styles.contactInfo}>
                You can also reach us via email at:{" "}
                <Text style={styles.supportEmail}>support@foodHolicapp.com</Text>
            </Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    modalHeading: {
        fontSize: theme.fonts.fontSizeMedium,
        fontFamily: theme.fonts.RobotoBold,
        color: theme.colors.darkColor,
        marginBottom: width * 0.06,
    },
    text: {
        marginBottom: width * 0.07,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoRegular,
        color: theme.colors.darkColor,
    },
    contactInfo: {
        marginVertical: width * 0.06,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoRegular,
        color: theme.colors.darkColor,
    },
    supportEmail: {
        textDecorationLine: "underline",
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoMedium,
        color: "#4682B4"
    },
});
