import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AppWindow, Blocks, House, Settings } from 'lucide-react-native/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Animated from 'react-native-reanimated';

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
          isFocused && styles.focusedTabItem,
          {
            flexGrow: isFocused ? Options.length : 0,
            transitionProperty: 'flexGrow',
            transitionDuration: 300,
          },
        ]}
      >
        <option.icon
          strokeWidth={2}
          size={24}
          color={isFocused ? '#673ab7' : '#222'}
        />
        <View style={{ alignItems: 'center' }}>
          {isFocused && (
            <Text style={[styles.tabLabel, styles.focusedTabLabel]}>
              {option.title}
            </Text>
          )}
        </View>
      </TouchableOpacityAnimated>
    );
  };

  return (
    <View style={[styles.tabBar, { bottom }]}>{Options.map(renderTab)}</View>
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
    backgroundColor: '#ededed',
    borderColor: '#d6d6d6',
    flexDirection: 'row',
    gap: 8,
  },
  tabItem: {
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    borderRadius: 25,
    padding: 12,
    alignItems: 'center',
  },
  focusedTabItem: {
    backgroundColor: '#e7d9ff',
  },
  tabLabel: {
    color: '#222',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 8,
  },
  focusedTabLabel: {
    color: '#673ab7',
  },
});

export default TabBar;
