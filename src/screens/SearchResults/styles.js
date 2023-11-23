import { StyleSheet, Dimensions } from "react-native";
import theme from "../../theme/theme";
const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        backgroundColor: theme.colors.backgroundColor,
        padding: width * 0.06,
        alignItems: "center",
        justifyContent: "space-between",
    },
    searchInput: {
        flex: 1,
        color: theme.colors.darkColor,
        marginLeft: width * 0.06,
        fontSize: width * 0.05,
        fontFamily: theme.fonts.RobotoRegular,
    },
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: theme.colors.backgroundColor,
        padding: width * 0.06,
        paddingBottom: width * 0.09,
    },
    foundResultsText: {
        marginBottom: width * 0.04,
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeMedium,
        fontFamily: theme.fonts.RobotoBold
    }
});