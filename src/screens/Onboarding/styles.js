import { StyleSheet, Dimensions } from "react-native";
import theme from '../../theme/theme';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundColor,
        alignItems: 'center',
        // justifyContent: 'center',
        // padding: width * 0.1,
    },
    contentcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: width * 0.1,
        paddingHorizontal: width * 0.05
    },
    logo: {
        height: height / 1.6,
    },
    title: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeLarge,
        marginBottom: width * 0.03,
        fontFamily: theme.fonts.RobotoBold,
        // marginTop: -width * 0.1
    },
    subTitle: {
        color: theme.colors.greyColor,
        fontSize: theme.fonts.fontSizeSmall,
        textAlign: 'center',
        lineHeight: height * 0.028,
        marginBottom: width * 0.03,
        fontFamily: theme.fonts.RobotoRegular

    },
    skipText: {
        color: theme.colors.greyColor,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeSmall,
        marginVertical: width * 0.02,
    },
});
