import { StyleSheet } from 'react-native';

import Typography from '@/components/ui/Typography';
import SafeAreaView from '@/components/layout/SafeAreaView';

const MainScreen = () => {
  return (
    <SafeAreaView scrollable>
      <Typography size="xl">Home Screen</Typography>
    </SafeAreaView>
  );
};

export default MainScreen;
