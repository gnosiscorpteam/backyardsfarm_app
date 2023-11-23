import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import NavigationStrings from '../constants/NavigationStrings';
import theme from '../theme/theme';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const CustomDrawerContent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => navigation.navigate(NavigationStrings.HOME_STACK_SCREEN)}
            >
                <MaterialIcons name={'explore'} size={width * 0.06} color={theme.colors.lightColor} />
                <Text style={styles.text}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => navigation.navigate(NavigationStrings.PROFILE_STACK_SCREEN)}
            >
                <Ionicons name={'md-person'} size={width * 0.06} color={theme.colors.lightColor} />
                <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => navigation.navigate(NavigationStrings.ORDER_STACK_SCREEN)}
            >
                <Ionicons name={'md-basket'} size={width * 0.06} color={theme.colors.lightColor} />
                <Text style={styles.text}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => navigation.navigate(NavigationStrings.OFFERS_AND_PROMO_SCREEN)}
            >
                <Ionicons name={'md-gift'} size={width * 0.06} color={theme.colors.lightColor} />
                <Text style={styles.text}>My Offers</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => navigation.navigate(NavigationStrings.PRIVACY_POLICY_SCREEN)}
            >
                <Ionicons name={'md-lock-closed'} size={width * 0.06} color={theme.colors.lightColor} />
                <Text style={styles.text}>Privacy policy</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.drawerItemLast}
                onPress={() => navigation.navigate(NavigationStrings.SECURITY_SCREEN)}
            >
                <Ionicons name={'md-shield'} size={width * 0.06} color={theme.colors.lightColor} />
                <Text style={styles.text}>Security</Text>
            </TouchableOpacity> */}


            <TouchableOpacity style={styles.signout_btn} onPress={() => navigation.navigate(NavigationStrings.LOGIN_SCREEN)}>
                <Text style={styles.signoutText}>Log out</Text>
                <AntDesign name="logout" size={width * 0.05} color={theme.colors.primaryColor} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: width * 0.2,
        paddingStart: width * 0.09
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: width * 0.06,
        borderBottomColor: theme.colors.lightColor,
        borderBottomWidth: width * 0.001
    },
    drawerItemLast: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: width * 0.06,
    },
    text: {
        color: theme.colors.lightColor,
        fontFamily: theme.fonts.RobotoMedium,
        fontSize: width * 0.046,
        marginLeft: width * 0.04
    },
    signoutText: {
        color: theme.colors.primaryColor,
        fontFamily: theme.fonts.RobotoBold,
        fontSize: theme.fonts.fontSizeSmall,
        marginRight: width * 0.04
    },
    signout_btn: {
        position: 'absolute',
        bottom: width * 0.1,
        left: width * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.lightColor,
        borderRadius: width * 0.09,
        paddingVertical: width * 0.025,
        paddingHorizontal: width * 0.05
    },
});

export default CustomDrawerContent;
