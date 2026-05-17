import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { TTextStyle } from '@/core/types/ui';
import Typography from './Typography';
import { useTheme } from '@/contexts/theme';
import { SCREEN_WIDTH } from '@/constants/dimensions';

type DividerProps = {
  title?: string;
  style?: TTextStyle;
  align?: 'left' | 'center' | 'right';
  height?: number;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
};

const Divider: FC<DividerProps> = ({
  style,
  title,
  align = 'left',
  height = 2,
  borderStyle = 'solid',
}) => {
  const { theme } = useTheme();

  const renderDots = () => {
    if (borderStyle === 'solid') {
      return null;
    }
    const dotWidth = borderStyle === 'dashed' ? height * 3 : height; // Adjust dot width based on style
    const dots = new Array(Math.floor(SCREEN_WIDTH / 2)).fill(0); // Adjust the divisor to control spacing

    return (
      <View style={styles.dots}>
        {dots.map((_, index) => (
          <View
            key={index}
            style={{
              width: dotWidth,
              height: height,
              borderRadius: height / 2,
              backgroundColor: theme.colors.text,
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.hr,
          {
            height,
            borderRadius: height / 2,
            borderStyle,
          },
          borderStyle === 'solid' && { backgroundColor: theme.colors.text },
          align === 'left' && styles.smallGrow,
        ]}
      >
        {renderDots()}
      </View>
      {title && (
        <Typography style={[styles.title, style, { color: theme.colors.text }]}>
          {title}
        </Typography>
      )}
      <View
        style={[
          styles.hr,
          {
            borderStyle,
            height,
            borderRadius: height / 2,
          },
          borderStyle === 'solid' && { backgroundColor: theme.colors.text },
          align === 'right' && styles.smallGrow,
        ]}
      >
        {renderDots()}
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexWrap: 'nowrap',
    minHeight: 1,
  },
  smallGrow: {
    flexGrow: 0.1,
  },
  dots: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default Divider;
