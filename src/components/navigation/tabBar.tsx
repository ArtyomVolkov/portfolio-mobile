import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AppWindow, Blocks, House, Settings } from 'lucide-react-native/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Animated from 'react-native-reanimated';
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

const TabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => {
  const { bottom } = useSafeAreaInsets();
  const { theme } = useTheme();

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
          color={isFocused ? theme.colors.primary : theme.colors.secondary}
        />
        <View>
          {isFocused && (
            <Text style={[styles.tabLabel, { color: theme.colors.primary }]}>
              {option.title}
            </Text>
          )}
        </View>
      </TouchableOpacityAnimated>
    );
  };

  return (
    <View
      style={[
        styles.tabBar,
        {
          bottom,
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.border,
        },
      ]}
    >
      {Options.map(renderTab)}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    margin: 12,
    borderRadius: 30,
    alignItems: 'center',
    left: 0,
    right: 0,
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
