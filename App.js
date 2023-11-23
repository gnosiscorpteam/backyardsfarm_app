import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Splash, NoInternetConnection } from './src/screens';
import * as Font from 'expo-font';
import Navigation from './src/navigation/index';
import { Provider } from 'react-redux';
import store from './src/state/store/store';
import { initializeNotifications, addNotificationListener } from './src/services/NotificationService';
import NetInfo from "@react-native-community/netinfo";
import StatusBarConfig from './src/components/atoms/StatusBarConfig';
import { StatusBar } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const loadCustomFont = async () => {
      await Font.loadAsync({
        'RobotoBold': require('./src/assets/fonts/Roboto-Bold.ttf'),
        'RobotoMedium': require('./src/assets/fonts/Roboto-Medium.ttf'),
        'RobotoRegular': require('./src/assets/fonts/Roboto-Regular.ttf'),
      });
      setFontLoaded(true);
    };

    const performAppSetup = async () => {
      await loadCustomFont();
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAppIsReady(true);
    };

    const checkInternetConnectivity = async () => {
      const networkState = await NetInfo.fetch();
      setIsConnected(networkState.isConnected);
    };

    const loadAppData = async () => {
      await performAppSetup();
      await checkInternetConnectivity();
      initializeNotifications();
    };

    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    const notificationListener = addNotificationListener((notification) => {
      console.log('Received notification:', notification);
    });

    loadAppData();

    return () => {
      unsubscribe();
      notificationListener.remove();
    };
  }, []);

  if (!isConnected) {
    return (
      <>
        <StatusBarConfig isSplashScreen={true} />
        <NoInternetConnection />
      </>
    );
  }

  if (!appIsReady || !fontLoaded) {
    return (
      <>
        <StatusBar hidden={true} />
        <Splash />
      </>
    );
  }



  return (
    <StripeProvider
      publishableKey="pk_live_51NyGlvKPJtLW187D2orj9uTdnPLnXYldJGm3UmA5VTxxaUQ9z2xU7e7AA3KVSwPsYGVmK0Aw6eLdhPsd0c5ubz3K00UmI1rkqo"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <Provider store={store}>
        <Navigation />
      </Provider>
    </StripeProvider>
  );
}
