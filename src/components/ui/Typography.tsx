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

type TColor = keyof ReturnType<typeof useTheme>['theme']['colors'];

type TypographyProps = TextProps & {
  size?: TSize;
  color?: TColor;
};

const Typography: FC<TypographyProps> = ({
  children,
  size = 'md',
  color = 'text',
  style,
  ...rest
}) => {
  const { theme } = useTheme();

  return (
    <Text
      style={[
        styles.text,
        {
          color: theme.colors[color],
          fontSize: fontSizes[size],
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  text: {
    maxWidth: '100%',
  },
});
