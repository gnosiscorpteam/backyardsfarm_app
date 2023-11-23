import { StyleSheet, Dimensions } from "react-native";
import theme from "../../../theme/theme";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        padding: width * 0.07,
        backgroundColor: theme.colors.backgroundColor,
        justifyContent: 'center',
    },
    logo: {
        overflow: "hidden",
        height: height * 0.32,
    },
    loginContainer: {
        alignItems: "center",
        flex: 1,
        width: width - width * 0.1,
    },
    anotherAction: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: width * 0.05,
    },
    text: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizexsm,
        fontFamily: theme.fonts.RobotoRegular
    },
    signup: {
        color: theme.colors.primaryColor,
        marginLeft: width * 0.02,
        fontSize: theme.fonts.fontSizexsm,
        fontFamily: theme.fonts.RobotoBold
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginTop: width * 0.05,
        width: width - width * 0.15,
    },
    checkbox: {
        borderRadius: width * 0.01,
    },
    checkboxText: {
        marginLeft: width * 0.025,
        fontSize: theme.fonts.fontSizeExtraSmall,
        fontFamily: theme.fonts.RobotoRegular,
        color: theme.colors.darkColor
    },
    detailsContainer: {
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: theme.colors.backgroundColor,
        paddingHorizontal: width * 0.07,
        paddingVertical: width * 0.03,

    },
    detailsHeadContainer: {
        width: width - width * 0.1,
        marginBottom: width * 0.04
    },
    heading: {
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeLarge,
        lineHeight: width * 0.11,
        marginBottom: width * 0.03,
        color: theme.colors.darkColor
    },
    paragraphText: {
        fontSize: theme.fonts.fontSizexsm,
        lineHeight: width * 0.06,
        color: theme.colors.greyColor,
        marginBottom: width * 0.05,
        fontFamily: theme.fonts.RobotoRegular
    },
    customButtonStyles: {
        position: 'absolute',
        bottom: width * 0.05,
    },
    paymentMehodBox: {
        backgroundColor: theme.colors.lightColor,
        width: width - width * 0.1,
        height: height * 0.1,
        marginVertical: width * 0.02,
        borderRadius: width * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paymentMehodBoxActive: {
        backgroundColor: theme.colors.borderColor,
        width: width - width * 0.1,
        height: height * 0.1,
        marginVertical: width * 0.02,
        borderRadius: width * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paymentMethodImage: {
        width: '70%',
        height: '100%',
    },
    uploader: {
        backgroundColor: theme.colors.lightColor,
        width: width - width * 0.1,
        height: height * 0.15,
        marginVertical: width * 0.02,
        borderRadius: width * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploaderImg: {
        width: width * 0.15,
        height: '65%'
    },
    uploadtext: {
        color: theme.colors.greyColor,
        fontWeight: 'bold',
        fontSize: width * 0.037
    },
    selectedImage: {
        width: '100%',
        height: '100%',
        borderRadius: width * 0.02,
    },
    selectedImageBox: {
        backgroundColor: theme.colors.lightColor,
        width: width - width * 0.1,
        height: height * 0.3,
        marginVertical: width * 0.02,
        borderRadius: width * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    locationBox: {
        backgroundColor: theme.colors.lightColor,
        width: width - width * 0.1,
        height: height * 0.07,
        borderRadius: width * 0.05,
        alignItems: 'center',
        justifyContent: 'center'
    },
    yourLocationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%'
    },
    locationIcon: {
        width: width * 0.25,
        height: width * 0.2,
        marginLeft: -width * 0.1
    },
    locationText: {
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeSmall,
        color: theme.colors.darkColor
    },
    ml_15: {
        marginLeft: -width * 0.03
    },
    keyboardPadding: {
        flex: 1
    },
});
