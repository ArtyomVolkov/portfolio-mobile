import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@/screens/Home';
import UiKitScreen from '@/screens/UiKit';
import SettingsScreen from '@/screens/Settings';
import AppsScreen from '@/screens/Apps';
import TabBar from '@/components/navigation/tabBar';

const MainTabNavigator = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  tabBar: (props) => <TabBar {...props} />,
  screens: {
    Home: HomeScreen,
    UiKit: UiKitScreen,
    Apps: AppsScreen,
    Settings: SettingsScreen,
  },
});

export default MainTabNavigator;
