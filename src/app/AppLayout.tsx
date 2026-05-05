import { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

import Navigation from '@/navigation/root';
import Main from '@/components/layout/Main';

import { useTheme } from '@/contexts/theme';
import SplashScreen, { type SplashScreenRef } from '@/screens/Splash';
import { delay } from '@/utils/promise';

const AppLayout = () => {
  const { theme } = useTheme();
  const [showSplash, setShowSplash] = useState(true);
  const splashScreenRef = useRef<SplashScreenRef>(null);

  useEffect(() => {
    onInit();
  }, []);

  const navigationTheme = useMemo(() => {
    return {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: theme.colors.background,
      },
    };
  }, [theme]);

  const onInit = async () => {
    await BootSplash.hide({ fade: true });
  };

  const onNavigationReady = async () => {
    await delay(1000); // min animation time
    splashScreenRef.current?.fadeOut(onFadeOut);
  };

  const onFadeOut = () => {
    setShowSplash(false);
  };

  return (
    <Main style={styles.container}>
      <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
      <Navigation onReady={onNavigationReady} theme={navigationTheme} />
      {showSplash && <SplashScreen apiRef={splashScreenRef} />}
    </Main>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
