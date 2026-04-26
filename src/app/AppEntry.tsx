import { StyleSheet, Text, useColorScheme, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '@/navigation/root';

const AppContent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const onReady = () => {
    console.log('Navigation is ready');
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation onReady={onReady} />
    </SafeAreaProvider>
  );
};

export default AppContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
