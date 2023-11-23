import { StyleSheet, Dimensions } from "react-native";
import theme from "../../theme/theme";
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: theme.colors.backgroundColor,
        padding: width * 0.06,
        marginBottom: width * 0.08,
    },
    orderContainer: {
        backgroundColor: theme.colors.lightColor,
        padding: width * 0.03,
        borderRadius: width * 0.04,
        marginVertical: width * 0.02,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.3,
        borderBottomColor: theme.colors.greyColor,
        borderBottomStyle: 'dashed',
        paddingVertical: width * 0.02
    },
    orderNum: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoMedium
    },
    orderDate: {
        color: theme.colors.greyColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoRegular
    },
    brandName: {
        paddingVertical: width * 0.015,
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeMoreThanSm,
        fontFamily: theme.fonts.RobotoBold
    },
    totalItemsDetailKey: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoRegular
    },
    totalItemsDetailValue: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoBold
    },
    headingItem: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeMoreThanSm,
        fontFamily: theme.fonts.RobotoMedium,
        paddingVertical: width * 0.03,
    },
    orderedItem: {
        color: theme.colors.greyColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoRegular,
    },
    trackBtn: {
        padding: width * 0.02,
        borderRadius: width * 0.09,
        borderColor: theme.colors.greyColor,
        borderWidth: 1.5,
        borderStyle: 'solid',
        width: '30%',
        marginVertical: width * 0.04,
        textAlign: 'center'
    },
    buttonText: {
        color: theme.colors.greyColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoBold,
        textAlign: 'center'
    },
    status: {
        color: theme.colors.primaryColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoBold,
        position: 'absolute',
        bottom: 38,
        right: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelStatus: {
        color: theme.colors.primaryColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoBold,
        marginVertical: width * 0.05,
        textAlign: 'right',
        marginRight: 30
    },
    orderDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: width * 0.03,
    },
    orderId: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoMedium
    },
    progressContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    progressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '65%',
    },
    progressCircle: {
        width: width * 0.03,
        height: width * 0.03,
        borderRadius: width * 0.04,
        backgroundColor: theme.colors.primaryColor,
        position: 'absolute',
        top: 0,
        left: -5
    },
    progressLine: {
        width: 1.5,
        height: height * 0.1,
        backgroundColor: theme.colors.primaryColor,
        position: 'relative',
        top: 40,
    },
    progressTextContainer: {
        marginLeft: width * 0.09,
    },
    progressTime: {
        color: theme.colors.greyColor,
        fontFamily: theme.fonts.RobotoRegular,
        fontSize: theme.fonts.fontSizexsm,
        flex: 0.3

    },
    progressStatus: {
        flex: 0.4,
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizexsm,
    },
    activeStatus: {
        color: theme.colors.primaryColor,
    },
    progressCircleActive: {
        width: width * 0.042,
        height: width * 0.042,
        borderRadius: width * 0.04,
        left: -7
    },
    totalContainer: {
        borderTopColor: theme.colors.borderColor,
        borderTopWidth: 0.6,
        paddingVertical: width * 0.03,
        marginVertical: width * 0.03,
        paddingHorizontal: width * 0.05
    },
    totalBillBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: width * 0.07

    },
    totalBil: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeMoreThanSm
    },
    totalBillAmt: {
        color: theme.colors.primaryColor,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeMedium
    },
    payMethod: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeMoreThanSm
    },
    cardDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: width * 0.03
    },
    payNum: {
        color: theme.colors.greyColor,
        fontFamily: theme.fonts.RobotoRegular,
        fontSize: theme.fonts.fontSizeSmall
    },
    paymentOpt: {
        color: theme.colors.tomatoColor,
        backgroundColor: 'red',
        paddingHorizontal: width * 0.03,
        paddingVertical: width * 0.03,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeSmall,
    },
    cancelBtn: {
        padding: width * 0.01,
    },
    cancelBtnText: {
        color: theme.colors.secondaryColor,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeSmall,
        marginBottom: 18
    },
    spaceBetween: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 4
    },
    circle: {
        width: width * 0.4,
        height: width * 0.4,
        borderRadius: width * 0.3,
        borderWidth: 10,
        borderColor: theme.colors.primaryColor,
        marginBottom: width * 0.1,
    },
    centered: {
        alignItems: 'center',
        paddingTop: width * 0.15
    },
    circleImg: {
        width: '100%',
        height: '100%',
        borderRadius: width * 0.4,
    },
    content: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeLarge,
        fontFamily: theme.fonts.RobotoBold,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content2: {
        color: theme.colors.greyColor,
        fontSize: theme.fonts.fontSizeMoreThanSm,
        fontFamily: theme.fonts.RobotoRegular,
        marginVertical: width * 0.03,
        letterSpacing: 0.5,
        textAlign: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: width * 0.09
    },
    submitBtn: {
        backgroundColor: theme.colors.primaryColor,
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.065,
        borderRadius: width * 0.03
    },
    submitButtonText: {
        color: theme.colors.lightColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoBold,
    },
    skipBtn: {
        width: '30%',
        flex: 0.3,
    },
    skipBtnText: {
        textAlign: 'center',
        color: theme.colors.primaryColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoBold,
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: width * 0.02,
    },
    star: {
        marginHorizontal: 5,
    },
});
