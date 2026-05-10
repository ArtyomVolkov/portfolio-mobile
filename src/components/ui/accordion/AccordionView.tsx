import { TViewStyle } from '@/core/types/ui';
import { FC } from 'react';
import { StyleSheet, View, LayoutChangeEvent } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

type AccordionViewProps = {
  children?: React.ReactNode | React.ReactNode[];
  style?: TViewStyle;
};

const AccordionView: FC<AccordionViewProps> = ({ children, style }) => {
  const heightValue = useSharedValue(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;

    if (height >= 0) {
      heightValue.value = withSpring(height);
    }
  };

  const heightAnimatedStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  return (
    <Animated.View style={[styles.container, heightAnimatedStyle]}>
      <View onLayout={onLayout} style={[styles.children, style]}>
        {children}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  children: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default AccordionView;
