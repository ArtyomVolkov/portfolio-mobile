import { FC, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';
import invert from 'invert-color';
import Animated from 'react-native-reanimated';
import Typography from './Typography';

type Color = {
  name: string;
  hex: string;
};

type ColorPaletteProps = {
  colors: Array<Color>;
  name: string;
  active?: boolean;
  backgroundColor?: string;
  textColor?: string;
  outlineColor?: string;
  onPress?: () => void;
};

const ThemeCard: FC<ColorPaletteProps> = ({
  colors,
  name,
  active = false,
  backgroundColor = '#fff',
  textColor = '#000',
  outlineColor = '#ccc',
  onPress,
}) => {
  const [activePalette, setActivePalette] = useState<string | null>(null);

  const handleColorPress = (item: string) => {
    setActivePalette(activePalette === item ? null : item);
  };

  const renderColorPalette = (color: Color) => {
    return (
      <Animated.View
        key={color.name}
        style={[
          styles.colorBox,
          {
            backgroundColor: color.hex,
            flex: color.name === activePalette ? 4 : 1,
            transitionProperty: 'flex',
            transitionDuration: 300,
            transitionTimingFunction: 'ease-in-out',
          } as StyleProp<ViewStyle>,
        ]}
      >
        <TouchableOpacity
          onPress={() => handleColorPress(color.name)}
          style={styles.colorPointer}
        >
          <Animated.View
            style={
              {
                opacity: color.name === activePalette ? 1 : 0,
                transitionProperty: 'opacity',
                transitionDuration: 300,
                transitionTimingFunction: 'ease-in-out',
              } as StyleProp<ViewStyle>
            }
          >
            <Typography
              style={[styles.colorName, { color: invert(color.hex) }]}
            >
              {color.name}
            </Typography>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      style={[
        styles.container,
        {
          backgroundColor,
          borderColor: active ? textColor : outlineColor,
        },
      ]}
    >
      <View style={styles.palette}>{colors.map(renderColorPalette)}</View>
      <View style={styles.caption}>
        <Typography style={[styles.themeName, { color: textColor }]}>
          {name}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default ThemeCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
  },
  palette: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  colorBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 60,
  },
  colorPointer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    padding: 8,
  },
  themeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  colorName: {
    fontSize: 14,
    fontWeight: 'bold',
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },
});
