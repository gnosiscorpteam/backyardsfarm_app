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
        paddingBottom: width * 0.03,
        borderBottomColor: theme.colors.borderColor,
        borderBottomWidth: 0.5,
        marginBottom: width * 0.01
    },
    sectionTitle: {
        fontSize: theme.fonts.fontSizeMoreThanSm,
        fontFamily: theme.fonts.RobotoBold,
        marginBottom: width * 0.015,
        color: theme.colors.darkColor,
    },
    sectionText: {
        fontSize: theme.fonts.fontSizeSmall,
        color: theme.colors.greyColor
    },
})