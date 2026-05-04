import { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';
import BootSplash from "react-native-bootsplash";

import Navigation from '@/navigation/root';
import Main from '@/components/layout/Main';

import { useTheme } from '@/contexts/theme';
import SplashScreen, { type SplashScreenRef } from '@/screens/Splash';
import { delay } from '@/utils/promise';

const AppLayout = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
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
    // load resources, fonts, etc.
    BootSplash.hide({ fade: true });
  };

  const onNavigationReady = async () => {
    await delay(1000); // min animation time
    splashScreenRef.current?.fadeOut();
  };

  const onFadeOut = () => {
    setLoading(false);
  };

  return (
    <Main style={styles.container}>
      <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
      <Navigation onReady={onNavigationReady} theme={navigationTheme} />
      {loading && (
        <SplashScreen onFadeOut={onFadeOut} apiRef={splashScreenRef} />
      )}
    </Main>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
