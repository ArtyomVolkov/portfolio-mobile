import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { TTextStyle } from '@/core/types/ui';
import Typography from './Typography';
import { useTheme } from '@/contexts/theme';

type DividerProps = {
  title: string;
  style?: TTextStyle;
  align?: 'left' | 'center' | 'right';
};

const Divider: FC<DividerProps> = ({ style, title, align = 'left' }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.hr,
          {
            backgroundColor: theme.colors.text,
          },
          align === 'left' && styles.smallGrow,
        ]}
      />
      <Typography style={[styles.title, style, { color: theme.colors.text }]}>
        {title}
      </Typography>
      <View
        style={[
          styles.hr,
          { backgroundColor: theme.colors.text },
          align === 'right' && styles.smallGrow,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 8,
    fontSize: 18,
  },
  hr: {
    flexGrow: 1,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#E0E0E0',
  },
  smallGrow: {
    flexGrow: 0.1,
  },
});

export default Divider;
