import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: theme.colors.backgroundColor,
        padding: width * 0.06,
        paddingBottom: width * 0.08,
    },
    promoContainer: {
        flexDirection: 'row',
        backgroundColor: theme.colors.tomatoColor,
        justifyContent: 'space-between',
        borderRadius: width * 0.02,
        height: width * 0.4,
        alignItems: 'center',
        paddingHorizontal: width * 0.04,
        marginBottom: width * 0.05
    },
    textDv: {
        flex: 0.6,
    },
    imgDiv: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promoImage: {
        width: width * 0.39,
        height: '100%',
        aspectRatio: 1
    },
    promoText: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: width * 0.045,
        lineHeight: width * 0.068
    },
    buyNowBtn: {
        backgroundColor: theme.colors.lightColor,
        paddingVertical: width * 0.03,
        paddingHorizontal: width * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        marginTop: width * 0.03,
        borderRadius: width * 0.09
    },
    btnText: {
        color: theme.colors.primaryColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeSmall,
    },
})