import { FC } from 'react';
import { StyleProp, StyleSheet, ViewStyle, View } from 'react-native';
import { useTheme } from '@/contexts/theme';

type MainProps = {
  children: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle>;
};

const Main: FC<MainProps> = ({ children, style }) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        style,
        { backgroundColor: theme.colors.background },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
