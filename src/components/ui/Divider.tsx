import { FC, useCallback, memo, useState, useMemo } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';

import { TTextStyle } from '@/core/types/ui';
import Typography from './Typography';
import { useTheme } from '@/contexts/theme';

type DotsProps = {
  size: number;
  gap: number;
  color: string;
  shape: 'dashed' | 'dotted';
};

export const Dots: FC<DotsProps> = ({ size, gap, color, shape }) => {
  const [items, setItems] = useState(0);
  const shapeWidth = useMemo(
    () => (shape === 'dashed' ? size * 3 : size),
    [shape, size],
  );

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { width } = event.nativeEvent.layout;

      const count = Math.round(width / (shapeWidth + gap));
      setItems(count);
    },
    [shapeWidth, gap],
  );

  return (
    <View style={styles.dots} onLayout={onLayout}>
      {new Array(items).fill(0).map((_, index) => (
        <View
          key={index}
          style={{
            width: shapeWidth,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color,
          }}
        />
      ))}
    </View>
  );
};

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

  const renderDots = useCallback(() => {
    if (borderStyle === 'solid') {
      return null;
    }

    return (
      <Dots
        gap={styles.dots.gap}
        size={height}
        color={theme.colors.text}
        shape={borderStyle}
      />
    );
  }, [borderStyle, height, theme.colors.text]);

  const renderContent = useCallback(() => {
    if (!title) {
      return (
        <View
          style={[
            styles.hr,
            {
              height,
              borderRadius: height / 2,
              borderStyle,
            },
            borderStyle === 'solid' && { backgroundColor: theme.colors.text },
          ]}
        >
          {renderDots()}
        </View>
      );
    }
    return (
      <>
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
        <Typography style={[styles.title, style, { color: theme.colors.text }]}>
          {title}
        </Typography>
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
      </>
    );
  }, [align, borderStyle, height, renderDots, style, theme.colors.text, title]);

  return <View style={styles.container}>{renderContent()}</View>;
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

export default memo(Divider);
