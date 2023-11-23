import { StyleSheet, Dimensions } from "react-native";
import theme from "../../theme/theme";
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: theme.colors.backgroundColor,
        padding: width * 0.06,
        paddingBottom: width * 0.08,
    },
    tableheader : {
        flexDirection: 'row',
        paddingVertical : height*0.01,
    },
    headertext : {
        fontSize : theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoRegular,
        // fontSize: theme.fonts.fontSizeExtraSmall,
        fontWeight: '700',
    },
    addresstext : {
        fontSize : theme.fonts.fontSizeSmall,
        paddingBottom : height*0.01
    },
    addresssection : {
        paddingTop : height*0.03,
        paddingBottom : height*0.08,
    },
    detailtext:{
        fontSize: theme.fonts.fontSizexsm
    },
    swipeRightBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: width * 0.02
    },
    swipeText: {
        color: theme.colors.greyColor,
        fontFamily: theme.fonts.RobotoRegular,
        fontSize: theme.fonts.fontSizeExtraSmall
    },
    cartItemContainer: {
        flexDirection: 'row',
        backgroundColor: theme.colors.lightColor,
        padding: width * 0.03,
        borderRadius: width * 0.04,
        marginVertical: width * 0.02,
        alignItems: 'center'
    },
    imageContainer: {
        width: width * 0.2,
        marginRight: width * 0.05,
    },
    productImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: theme.fonts.fontSizeMoreThanSm,
        fontFamily: theme.fonts.RobotoMedium,
        color: theme.colors.darkColor,
        marginBottom: width * 0.01,
    },
    productPrice: {
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoBold,
        color: theme.colors.primaryColor,
    },
    productActions: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        padding: width * 0.04,
        borderRadius: width * 0.04,
        alignItems: 'center',
        height: '100%'
    },
    wishlist: {
        backgroundColor: theme.colors.primaryColor,
        padding: width * 0.02,
        borderRadius: 100,
        marginHorizontal: width * 0.01
    },
    customBtnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomBox: {
        backgroundColor: theme.colors.tomatoColor,
        padding: width * 0.06,
        margin: width * 0.04,
        borderRadius: width * 0.03
    },
    promoCodeBox: {
        position: 'relative',
        marginBottom: width * 0.04
    },
    promoInput: {
        backgroundColor: theme.colors.lightColor,
        height: height * 0.05,
        borderRadius: width * 0.05,
        paddingLeft: width * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeSmall,
    },
    promoButton: {
        backgroundColor: theme.colors.primaryColor,
        position: 'absolute',
        bottom: 0,
        right: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width * 0.05,
        paddingHorizontal: width * 0.07
    },
    textApply: {
        color: theme.colors.lightColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeSmall
    },
    amtRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: width * 0.02
    },
    amtTextHead: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeSmall
    },
    amtTextValue: {
        color: theme.colors.greyColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeSmall
    },
    mainHeading: {
        color: theme.colors.primaryColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeLarge,
        letterSpacing: .9,
        marginBottom: width * 0.02
    },
    spaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkoutPageHeading: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeSmall,
        marginBottom: width * 0.04
    },
    changeText: {
        color: theme.colors.primaryColor,
        fontFamily: theme.fonts.RobotoRegular,
        fontSize: theme.fonts.fontSizeExtraSmall,
        marginBottom: width * 0.04
    },
    addressHead: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeMoreThanSm,
        borderBottomColor: theme.colors.greyColor,
        borderBottomWidth: 0.5,
        padding: width * 0.02,
        marginBottom: width * 0.02
    },
    addressLong: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoRegular,
        fontSize: theme.fonts.fontSizeSmall,
        borderBottomColor: theme.colors.greyColor,
        borderBottomWidth: 0.5,
        padding: width * 0.02,
        marginBottom: width * 0.02
    },
    contactNum: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoRegular,
        fontSize: theme.fonts.fontSizeSmall,
        padding: width * 0.02,
        paddingTop: 0
    },
    radioButtonContanier: {
        padding: width * 0.03,
        width: '100%'
    },
    horizontalLine: {
        borderWidth: 0.3,
        borderColor: theme.colors.greyColor,
        width: '80%',
        marginVertical: width * 0.04,
        marginLeft: width * 0.07
    },
    padding20: {
        marginVertical: width * 0.09
    },
    totalText: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeMoreThanSm,
    },
    totalAmount: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeMedium,
    },
    btnContainer2: {
        // position: 'absolute',
        // bottom: width * 0.05,
        // right: width * 0.05,
    },
    
    label: {
        fontFamily: theme.fonts.RobotoRegular,
        fontSize: theme.fonts.fontSizeExtraSmall,
        fontWeight: '500',
        color: '#4F3824',
        paddingBottom: 2
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        textAlignVertical: 'center'
    },

    errorcontent: {
        color: 'red'
    },

    note: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeMoreThanSm,
        backgroundColor: theme.colors.tomatoColor,
        padding: width * 0.04,
        textAlign: 'center',
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius: width * 0.05,
    },
    pad20: {
        paddingHorizontal: width * 0.05,
        paddingBottom: width * 0.05,
    },
    innerBox: {
        padding: width * 0.03,
        borderBottomColor: theme.colors.greyColor,
        borderBottomWidth: 0.4
    },
    info: {
        color: theme.colors.greyColor,
        fontFamily: theme.fonts.RobotoRegular,
        fontSize: theme.fonts.fontSizexsm,
        marginTop: width * 0.02
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: width * 0.03
    },
    custombtnstyling: {
        width: '50%'
    },
    cancelBtnText: {
        fontSize: theme.fonts.fontSizeSmall,
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoMedium,
        marginLeft: width * 0.02
    }
});
