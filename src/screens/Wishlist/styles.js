import { StyleSheet, Dimensions } from "react-native";
import theme from "../../theme/theme";
const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: theme.colors.backgroundColor,
        padding: width * 0.06,
        paddingBottom: width * 0.08,
    },
    swipeRightBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: width * 0.05,
    },
    swipeText: {
        marginLeft:width * 0.02,
        color: theme.colors.greyColor,
        fontFamily: theme.fonts.RobotoRegular,
        fontSize: theme.fonts.fontSizeExtraSmall
    },
    wishlistItem: {
        flexDirection: 'row',
        backgroundColor: theme.colors.lightColor,
        padding: width * 0.04,
        borderRadius: width * 0.04,
        marginVertical: width * 0.03,
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
        fontSize: width * 0.05,
        fontFamily: theme.fonts.RobotoBold,
        color: theme.colors.darkColor,
        marginBottom: width * 0.01,
    },
    productPrice: {
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoRegular,
        color: theme.colors.darkColor,
    },
    deliveryInfo: {
        fontSize: theme.fonts.fontSizeExtraSmall,
        color: theme.colors.greyColor,
        fontFamily: theme.fonts.RobotoRegular,
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
        borderRadius: width * 0.09,
        marginHorizontal: width * 0.01
    },
});
