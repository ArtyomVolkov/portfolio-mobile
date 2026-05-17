import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import Typography from '@/components/ui/Typography';
import { useTheme } from '@/contexts/theme';
import { TViewStyle, TTextStyle } from '@/core/types/ui';

type ChipProps = {
  label: string;
  icon?: React.ReactNode | string;
  color?: string;
  style?: {
    container?: TViewStyle;
    label?: TTextStyle;
    icon?: TViewStyle;
  };
};

const Chip: FC<ChipProps> = ({ icon, label, color, style }) => {
  const { theme } = useTheme();

  const renderIcon = () => {
    if (typeof icon === 'string') {
      return (
        <View style={[styles.icon, style?.icon]}>
          <Typography style={styles.iconText}>
            {icon}
          </Typography>
        </View>
      );
    }
    return icon;
  };

  return (
    <View
      style={[
        styles.container,
        color && { backgroundColor: color },
        { borderColor: theme.colors.border },
        style?.container,
      ]}
    >
      {icon && renderIcon()}
      <Typography style={[styles.label, style?.label]}>{label}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderRadius: 16,
    overflow: 'hidden',
    gap: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  iconText: {
    fontSize: 14,
    color: 'white',
  },
  label: {
    color: 'black',
    fontSize: 18,
    paddingRight: 4,
  },
});

export default Chip;
