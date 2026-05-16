import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AppWindow, Blocks, House, Settings } from 'lucide-react-native/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Animated from 'react-native-reanimated';

import Typography from '@/components/ui/Typography';

import { useTheme } from '@/contexts/theme';

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

const Options = [
  {
    key: 'Home',
    title: 'Home',
    icon: House,
  },
  {
    key: 'UiKit',
    title: 'UI Kit',
    icon: Blocks,
  },
  {
    key: 'Apps',
    title: 'Apps',
    icon: AppWindow,
  },
  {
    key: 'Settings',
    title: 'Settings',
    icon: Settings,
  },
];

const BLUR_AMOUNT = 8;
const TOP_BLUR_OFFSET = '39%';

const TabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => {
  const { bottom } = useSafeAreaInsets();
  const { theme } = useTheme();
  const gradientColor = theme.colors.background;

  const navigateToRoute = (routeName: string) => {
    const route = state.routes.find(r => r.name === routeName);

    if (!route) {
      console.warn(`Route "${routeName}" not found in navigation state.`);
      return;
    }
    navigation.navigate(routeName);
  };

  const renderTab = (option: (typeof Options)[0]) => {
    const isFocused =
      state.index ===
      state.routes.findIndex(route => route.name === option.key);

    return (
      <TouchableOpacityAnimated
        key={option.key}
        onPress={() => navigateToRoute(option.key)}
        style={[
          styles.tabItem,
          isFocused && {
            backgroundColor: theme.colors.card,
            flexGrow: Options.length,
          },
          {
            transitionProperty: 'flexGrow',
            transitionDuration: 300,
          } as StyleProp<ViewStyle>,
        ]}
      >
        <option.icon
          strokeWidth={2}
          size={24}
          color={isFocused ? theme.colors.primary : theme.colors.shadow}
        />
        <View>
          {isFocused && (
            <Typography
              style={[styles.tabLabel, { color: theme.colors.primary }]}
            >
              {option.title}
            </Typography>
          )}
        </View>
      </TouchableOpacityAnimated>
    );
  };

  return (
    <View style={[styles.container, { bottom }]} pointerEvents="box-none">
      <View
        style={[
          styles.tabBar,
          {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.border,
          },
        ]}
      >
        {Options.map(renderTab)}
      </View>
      <View style={styles.overlay} pointerEvents="none">
        <Svg style={styles.svg}>
          <Defs>
            <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="15%" stopColor={gradientColor} stopOpacity={0.7} />
              <Stop offset="50%" stopColor={gradientColor} stopOpacity={0.3} />
              <Stop offset="70%" stopColor={gradientColor} stopOpacity={0} />
            </LinearGradient>
          </Defs>
          <Rect
            x="0"
            y={TOP_BLUR_OFFSET}
            width="100%"
            height="100%"
            fill="url(#gradient)"
          />
        </Svg>
        <BlurView
          style={[styles.blurView, { top: TOP_BLUR_OFFSET }]}
          blurAmount={BLUR_AMOUNT}
          blurType={theme.isDark ? 'dark' : 'light'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    padding: 12,
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    flex: 1,
    top: '49%',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    overflow: 'hidden',
  },
  svg: {
    width: '100%',
    height: '100%',
  },
  blurView: {
    position: 'absolute',
    height: '100%',
    left: 0,
    right: 0,
  },
  tabBar: {
    borderRadius: 30,
    alignItems: 'center',
    zIndex: 10,
    padding: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flexDirection: 'row',
    gap: 8,
  },
  tabItem: {
    flexDirection: 'row',
    borderRadius: 25,
    padding: 12,
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 8,
  },
});

export default TabBar;
