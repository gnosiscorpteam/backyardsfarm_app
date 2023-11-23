import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme/theme';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: theme.colors.backgroundColor,
        padding: width * 0.06,
        paddingBottom: 100
    },
    headBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        paddingTop: width * 0.03
    },
    imgBox: {
        width: '100%',
        alignItems: 'center',
        marginVertical: width * 0.03,
    },
    img: {
        width: '80%',
        aspectRatio: 1,
        height: 'undefined'
    },
    name: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeMedium,
        fontFamily: theme.fonts.RobotoBold
    },
    ratingsBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: width * 0.03,
    },
    raitng: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoBold
    },
    totalSales: {
        color: theme.colors.greyColor,
        fontSize: theme.fonts.fontSizexsm,
        fontFamily: theme.fonts.RobotoMedium
    },
    price: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeMedium,
        fontFamily: theme.fonts.RobotoMedium
    },
    description: {
        color: theme.colors.greyColor,
        fontSize: theme.fonts.fontSizexsm,
        fontFamily: theme.fonts.RobotoRegular,
        marginVertical: width * 0.01
    },
    divider: {
        borderBottomColor: theme.colors.borderColor,
        borderBottomWidth: 0.5,
        marginVertical: width * 0.02
    },
    otherInfoTitle: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoBold,
        marginVertical: width * 0.04
    },
    btnContainer: {
        position: 'absolute',
        bottom: width * 0.05,
        right: width * 0.05,
    },
    cartButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.primaryColor,
        borderRadius: width * 0.05,
        paddingHorizontal: width * 0.01,
    },
    cartButton: {
        padding: width * 0.01,
    },
    cartQuantity: {
        fontSize: theme.fonts.fontSizeSmall,
        paddingHorizontal: width * 0.02,
        color: theme.colors.lightColor,
        fontFamily: theme.fonts.RobotoBold
    },
    infocontain : {
        flexDirection:'row',
        alignItems : 'center',
        paddingRight : width*0.07,
        paddingLeft : width*0.02,
        paddingVertical : width*0.02,
        backgroundColor:theme.colors.lightprimaryColor,
        color : theme.colors.primaryColor,
        borderLeftColor: theme.colors.primaryColor,
        borderLeftWidth: 2,
    },
    infocontent : {
        paddingLeft : width*0.02
    },
    infotitle : {
        fontWeight : 'bold',
        paddingBottom : width*0.01
    },
    infodescription : {
        textAlign : 'justify'
    }
})