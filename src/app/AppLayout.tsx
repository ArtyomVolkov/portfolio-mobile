import { useMemo, useRef, useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

import Navigation from '@/navigation/root';
import Main from '@/components/layout/Main';

import { useTheme } from '@/contexts/theme';
import SplashScreen, { type SplashScreenRef } from '@/screens/Splash';
import { notLessThan } from '@/utils/promise';

const AppLayout = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  const splashScreenRef = useRef<SplashScreenRef>(null);

  const navigationTheme = useMemo(() => {
    return {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: theme.colors.background,
      },
    };
  }, [theme]);

  const onReady = () => {
    notLessThan(() => {
      splashScreenRef.current?.fadeOut();
    }, 3500);
  };

  const onFadeOut = () => {
    setLoading(false);
  };

  return (
    <Main style={styles.container}>
      <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
      <Navigation onReady={onReady} theme={navigationTheme} />
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
