import { Image, View, ImageBackground } from "react-native";
import { bgImage, logo } from './assets';
import styles from "./styles";

export default function SplashScreen() {
    return (
        <ImageBackground
            imageStyle={{ opacity: 1 }}
            style={styles.imageBackground}
        >
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={logo}
                />
            </View>
        </ImageBackground>
    );
}