import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@/screens/root/home/Home';
import UiKitScreen from '@/screens/root/ui-kit/UiKit';
import SettingsScreen from '@/screens/root/settings/Settings';
import AppsScreen from '@/screens/root/apps/Apps';
import TabBar from '@/components/navigation/TabBar';

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
