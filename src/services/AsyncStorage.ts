import { createAsyncStorage } from '@react-native-async-storage/async-storage';

const storage = createAsyncStorage('portfolio-app');

class AsyncStorage {
  static async setItem(key: string, value: string): Promise<void> {
    try {
      await storage.setItem(key, value);
    } catch (error) {
      console.error(`Failed to set item with key "${key}":`, error);
    }
  }

  static async getItem(key: string): Promise<string | null> {
    try {
      return await storage.getItem(key);
    } catch (error) {
      console.error(`Failed to get item with key "${key}":`, error);
      return null;
    }
  }

  static async removeItem(key: string): Promise<void> {
    try {
      await storage.removeItem(key);
    } catch (error) {
      console.error(`Failed to remove item with key "${key}":`, error);
    }
  }

  static async clear(): Promise<void> {
    try {
      await storage.clear();
    } catch (error) {
      console.error('Failed to clear AsyncStorage:', error);
    }
  }
}

export default AsyncStorage;