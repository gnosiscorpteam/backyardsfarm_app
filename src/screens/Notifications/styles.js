import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme/theme';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: theme.colors.backgroundColor,
        paddingHorizontal: width * 0.06,
        paddingTop: width * 0.02
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: width * 0.02,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.borderColor,
    },
    notificationTextContainer: {
        marginLeft: width * 0.04,
    },
    notificationTitle: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeMoreThanSm,
        fontFamily: theme.fonts.RobotoMedium,
    },
    notificationBody: {
        color: theme.colors.greyColor,
        fontSize: theme.fonts.fontSizeSmall,
        fontFamily: theme.fonts.RobotoRegular,
        marginTop: width * 0.03,
    },
});
