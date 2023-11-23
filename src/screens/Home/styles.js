import { StyleSheet, Dimensions } from "react-native";
import theme from "../../theme/theme";

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundColor,
        marginBottom: height * 0.05,
    },
    containerStyle: {
        flexGrow: 1
    },
    itemimage: {
        width: width * 0.43,
        height: width * 0.43,
        marginRight: width * 0.03,
        marginBottom: width * 0.03,
        position: 'relative'
    },
    cookingtitle: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cookingName: {
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeSmall,
        color: theme.colors.primaryColor,
    },
    topMenu: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: width * 0.04,
        backgroundColor: theme.colors.primaryColor
    },
    notification: {
        position: 'relative'
    },
    dot: {
        position: 'absolute',
        width: width * 0.03,
        height: width * 0.03,
        backgroundColor: theme.colors.primaryColor,
        borderRadius: width * 0.09,
        top: 0,
        right: 2
    },
    heading: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeXLarge,
        lineHeight: width * 0.12,
        paddingVertical: width * 0.05,
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: theme.colors.lightColor,
        borderRadius: width * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * 0.04
    },
    searchInput: {
        marginLeft: width * 0.02,
        fontSize: theme.fonts.fontSizeSmall,
        color: theme.colors.greyColor,
        fontFamily: theme.fonts.RobotoMedium,
        flex: 1,
        paddingVertical: width * 0.04,
    },
    categoryList: {
        paddingVertical: width * 0.05,
    },
    filterContainer: {
        paddingVertical: width * 0.02,
        borderBottomColor: theme.colors.primaryColor,
    },
    categoryName: {
        fontSize: width * 0.045,
        marginHorizontal: width * 0.04,
    },
    viewAllBox: {
        alignItems: 'flex-end',
        marginBottom: width * 0.03
    },
    showText: {
        fontFamily: theme.fonts.RobotoBold,
        color: theme.colors.primaryColor
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: width * 0.06
    },
    subHeading: {
        color: theme.colors.primaryColor,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: width * 0.05,
        paddingVertical: 10,
        textAlign: 'center'
    },
    description: {
        color: theme.colors.greyColor,
        fontSize: width * 0.035,
        textAlign: 'justify',
        lineHeight: 24,
        paddingTop: width*0.03,
    },
    showMore: {
        fontFamily: theme.fonts.RobotoBold,
        color: theme.colors.greyColor
    },
    introimage: {
        height:width*0.6,
    }
})