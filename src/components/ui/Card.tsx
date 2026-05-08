import { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { useTheme } from '@/contexts/theme';

type CardProps = {
  title?: string | React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle>;
};

const Card: FC<CardProps> = ({ title, children, style }) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.card,
          padding: theme.padding.small,
          borderColor: theme.colors.border,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,
  },
});

export default Card;
