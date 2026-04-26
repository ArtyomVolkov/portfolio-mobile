import SafeScreen from '@/components/SafeScreen';
import { StyleSheet, Text, useColorScheme, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppContent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeScreen style={styles.container}>
        <Text style={styles.title}>
          Welcome to My Portfolio Mobile App!
        </Text>
      </SafeScreen>
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
