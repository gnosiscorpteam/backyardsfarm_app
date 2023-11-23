import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import theme from '../theme/theme';
import NavigationStrings from '../constants/NavigationStrings';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

import {
  OffersAndPromo,
  Security,
  PrivacyPolicy,
} from '../screens';

import OrderStack from './OrderStack'

const Drawer = createDrawerNavigator();
import CustomDrawerContent from './CustomDrawerContent';

export default function CustomDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerHideStatusBarOnOpen: true,
        drawerStyle: {
          backgroundColor: theme.colors.primaryColor,
          width: '50%',
        },
        sceneContainerStyle: {
          backgroundColor: theme.colors.primaryColor,
        },
        drawerType: 'slide',
      }}
    >
      <Drawer.Screen
        name={NavigationStrings.Home_SCREEN}
        component={HomeStack}
      />
      <Drawer.Screen
        name={NavigationStrings.PROFILE_STACK_SCREEN}
        component={ProfileStack}
      />
      <Drawer.Screen
        name={NavigationStrings.ORDER_STACK_SCREEN}
        component={OrderStack}
      />
      <Drawer.Screen
        name={NavigationStrings.OFFERS_AND_PROMO_SCREEN}
        component={OffersAndPromo}
      />
      <Drawer.Screen
        name={NavigationStrings.PRIVACY_POLICY_SCREEN}
        component={PrivacyPolicy}
      />
      <Drawer.Screen
        name={NavigationStrings.SECURITY_SCREEN}
        component={Security}
      />
    </Drawer.Navigator>
  );
}
