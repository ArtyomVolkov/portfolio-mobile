import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, ScrollView } from 'react-native';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
      >
        <Text style={styles.title}>Home Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MainScreen;
