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
    section: {
        marginBottom: width * 0.05,
    },
    sectionTitle: {
        fontSize: theme.fonts.fontSizeMoreThanSm,
        fontFamily: theme.fonts.RobotoBold,
        color: theme.colors.darkColor,
        marginBottom: width * 0.025,
    },
    sectionText: {
        fontSize: theme.fonts.fontSizeSmall,
        color: theme.colors.greyColor,
        fontFamily: theme.fonts.RobotoRegular,
    },

})