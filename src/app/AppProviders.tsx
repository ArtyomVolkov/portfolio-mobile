import { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContextProvider } from '@/contexts/theme';

type AppProvidersProps = {
  children: React.ReactNode | React.ReactNode[];
};

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </SafeAreaProvider>
  );
};

export default AppProviders;
