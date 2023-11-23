import React from 'react';
import { StatusBar } from 'react-native';
import theme from '../../theme/theme';

const StatusBarConfig = ({ isAuthScreen, isSplashScreen }) => {
  const backgroundColor = isAuthScreen || isSplashScreen ? theme.colors.backgroundColor : theme.colors.primaryColor;
  const barStyle = isAuthScreen || isSplashScreen ? 'dark-content' : 'light-content';

  return <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />;
};

export default StatusBarConfig;
