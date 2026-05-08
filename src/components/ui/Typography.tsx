import { FC } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { useTheme } from '@/contexts/theme';

export type TSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const fontSizes: Record<TSize, number> = {
  xxs: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

type TypographyProps = TextProps & {
  size?: TSize;
};

const Typography: FC<TypographyProps> = ({ children, size = 'md', style }) => {
  const { theme } = useTheme();

  return (
    <Text
      style={[
        styles.text,
        { color: theme.colors.text, fontSize: fontSizes[size] },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  text: {},
});
