import { StyleSheet, Dimensions } from "react-native";
import theme from "../../theme/theme";
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: theme.colors.backgroundColor,
        padding: width * 0.06,
        paddingBottom: width * 0.2,
    },
    personalDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: width * 0.04
    },
    text: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeMoreThanSm
    },
    text2: {
        color: theme.colors.darkColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: theme.fonts.fontSizeSmall
    },
    card: {
        backgroundColor: theme.colors.lightColor,
        marginVertical: width * 0.03,
        borderRadius: width * 0.03,
        padding: width * 0.04,
        flexDirection: 'row'
    },
    imgBox: {
        width: '30%',
        backgroundColor: theme.colors.tomatoColor,
        marginRight: width * 0.05,
        borderRadius: width * 0.03,
        height: '80%'
    },
    img: {
        width: '100%',
        aspectRatio: 1,
        height: 'undefined'
    },
    name: {
        color: theme.colors.darkColor,
        fontSize: theme.fonts.fontSizeMoreThanSm,
        fontFamily: theme.fonts.RobotoBold,
    },
    email: {
        color: theme.colors.greyColor,
        fontSize: theme.fonts.fontSizexsm,
        fontFamily: theme.fonts.RobotoRegular,
        marginTop: width * 0.01
    },
    spaceBet: {
        justifyContent: 'space-between',
    },
    btnContainer: {
        position: 'absolute',
        bottom: width * 0.05,
        right: width * 0.05,
    },
    centeredBox: {
        alignItems:'center',
        justifyContent:'center'
    },
    imgBoxEdit: {
        backgroundColor: theme.colors.lightColor,
        borderWidth: 0.3,
        borderColor: theme.colors.greyColor,
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
        marginBottom: width * 0.06,
        position: 'relative',
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: width * 0.3,
        overflow: 'hidden'
    },
    cameraIcon: {
        position: 'absolute',
        left: width * 0.09,
        bottom: width * 0.2,
    },
    uploader: {
        backgroundColor: theme.colors.lightColor,
        height: height * 0.15,
        marginVertical: width * 0.02,
        borderRadius: width * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploaderImg: {
        width: width * 0.15,
        height: '65%'
    },
    uploadtext: {
        color: theme.colors.greyColor,
        fontWeight: 'bold',
        fontSize: width * 0.037
    },
});
