import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import theme from "../../theme/theme";

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
    imageBackground: {
        flex: 1,
        backgroundColor: theme.colors.tertiaryColor,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: width * 0.4,
    }
});
