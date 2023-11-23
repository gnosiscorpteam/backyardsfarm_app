import { StyleSheet, Dimensions } from "react-native";
import theme from "../../theme/theme";
const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    centerdBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    cartIcon: {
        opacity: 0.2
    },
    headText: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeMedium,
        fontFamily: theme.fonts.RobotoBold,
        marginVertical: width * 0.03,
    },
    subText: {
        color: theme.colors.greyColor,
        fontSize: width * 0.045,
        fontFamily: theme.fonts.RobotoRegular,
        paddingHorizontal: width * 0.08,
        textAlign: 'center',
        lineHeight: width * 0.07
    },
    btnContainer: {
        marginTop: width * 0.08
    },
})
