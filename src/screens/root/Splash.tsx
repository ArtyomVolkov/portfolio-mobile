import { FC, useImperativeHandle } from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { runOnJS } from 'react-native-worklets';

import Typography from '@/components/ui/Typography';
import AppLoaderLottie from '@/assets/lottie/app-loader.json';
import { useTheme } from '@/contexts/theme';

type SplashScreenProps = {
  apiRef?: React.Ref<SplashScreenRef>;
};

export type SplashScreenRef = {
  fadeOut: (callback?: () => void) => void;
};

const SplashScreen: FC<SplashScreenProps> = ({ apiRef }) => {
  const { theme } = useTheme();
  const opacityAnimation = useSharedValue(1);

  const fadeOut = (callback?: () => void) => {
    opacityAnimation.value = withTiming(
      0,
      { duration: 1000, easing: Easing.linear },
      isFinished => {
        if (isFinished) {
          // runOnJS(onFadeOut)();
          if (callback) {
            runOnJS(callback)();
          }
        }
      },
    );
  };

  useImperativeHandle(apiRef, () => ({
    fadeOut,
  }));

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacityAnimation.value,
  }));

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
        animatedStyle,
      ]}
    >
      <LottieView
        source={AppLoaderLottie}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Typography size="xxl">Loading...</Typography>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  lottie: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;
