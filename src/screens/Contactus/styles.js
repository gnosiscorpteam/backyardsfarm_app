import { StyleSheet, Dimensions } from "react-native";
import theme from "../../theme/theme";
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: theme.colors.backgroundColor,
    },
    map: {
        height: height * 0.15,
    },
    subtitle: {
        color: theme.colors.primaryColor,
        fontSize: theme.fonts.fontSizeMoreThanSm,
        fontFamily: theme.fonts.RobotoRegular,
        fontWeight: 'bold',
        marginVertical: width * 0.01,
        textAlign: 'center',
        paddingTop: height * 0.02,
        paddingBottom: height * 0.01
    },
    contactform: {
        height: height * 0.55,
        paddingHorizontal: height * 0.05,
        borderTopLeftRadius: height * 0.05,
        borderTopRightRadius: height * 0.05,
        backgroundColor: "white"
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
        textAlignVertical: 'top'
    },
    button: {
        margin: 20,
        width: 300, // Set the desired width for the button
        height: 30000,
    },
    buttonContainer: {
        height: 50, // Customize the height here
        backgroundColor: theme.colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    errorcontent: {
        color: 'red'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    shadow: {
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    hearder: {
        height: height * 0.35,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    contactgroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: height * 0.05
    },
    contactblog: {
        backgroundColor: theme.colors.primaryColor,
        width: width * 0.23,
        height: width * 0.23,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconborder: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contacttype: {
        paddingTop: width * 0.02,
        color: 'white'
    },
    sendbutton: {
        backgroundColor: theme.colors.primaryColor
    },
});
