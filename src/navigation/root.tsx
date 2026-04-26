import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabNavigator from '@/navigation/main';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Main',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Main: MainTabNavigator,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
