import { StyleSheet, Dimensions } from "react-native";
import theme from "../../../theme/theme";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        padding: width * 0.07,
        backgroundColor: theme.colors.backgroundColor,
        justifyContent: 'center'
    },
    logo: {
        overflow: "hidden",
        height: height * 0.3,
        maxWidth: width * 0.6,
    },
    loginContainer: {
        alignItems: "center",
        flex: 1,
        width: width - width * 0.14,
    },
    continueText: {
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeExtraSmall,
        color: theme.colors.darkColor,
        marginVertical: width * 0.04
    },
    marginVertical30: {
        marginVertical: width * 0.06,
        width: width - width * 0.14,
    },
    socialButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width * 0.25,
    },
    forgetPassText: {
        color: theme.colors.primaryColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeSmall,
        textAlign: 'right'
    },
    anotherAction: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: width * 0.05,
    },
    text: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoRegular,
        fontSize: theme.fonts.fontSizexsm
    },
    signup: {
        color: theme.colors.primaryColor,
        fontFamily: theme.fonts.RobotoBold,
        marginLeft: width * 0.02,
        fontSize: theme.fonts.fontSizexsm
    },
    fp_container: {
        flexGrow: 1,
        paddingHorizontal: width * 0.07,
        paddingVertical: width * 0.03,
        backgroundColor: theme.colors.backgroundColor,
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
    fp_card: {
        backgroundColor: theme.colors.lightColor,
        borderRadius: width * 0.04,
        paddingVertical: width * 0.05,
        paddingHorizontal: width * 0.07,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: width * 0.05
    },
    fp_cardcontent: {
        marginLeft: width * 0.04
    },
    fp_cardText: {
        fontSize: theme.fonts.fontSizeSmall,
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoRegular
    },
    fp_optionNumber: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: -width * 0.04,
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoRegular
    },
    fp_dotText: {
        fontSize: width * 0.09,
        fontFamily: theme.fonts.RobotoBold
    },
    fp_numText: {
        fontSize: theme.fonts.fontSizeSmall,
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoRegular
    },
    custommBtnStyle: {
        position: 'absolute',
        bottom: width * 0.05,
        width: width,
        alignItems: 'center'
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
});
