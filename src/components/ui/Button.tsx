import React, { FC, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Typography from './Typography';
import { useTheme } from '@/contexts/theme';

export type TButtonColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'info'
  | 'success';

export type TButtonVariant = 'solid' | 'outlined' | 'dashed' | 'link';

export type ButtonProps = {
  title: string;
  onPress?: () => void;
  color?: TButtonColor;
  variant?: TButtonVariant;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  style?: {
    container?: object;
    text?: object;
    icon?: object;
  };
};

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  disabled,
  startIcon,
  endIcon,
  style,
  variant = 'solid',
  color = 'default',
}) => {
  const { theme } = useTheme();
  const colorMapping: Record<TButtonColor, string> = useMemo(
    () => ({
      default: theme.colors.border,
      primary: theme.colors.primary,
      secondary: theme.colors.secondary,
      danger: theme.colors.danger,
      warning: theme.colors.warning,
      info: theme.colors.info,
      success: theme.colors.success,
    }),
    [theme],
  );

  const buttonStyles = useMemo(() => {
    const baseStyles = [styles.container, style?.container];
    switch (variant) {
      case 'solid':
        return [...baseStyles, { backgroundColor: colorMapping[color] }];
      case 'outlined':
        return [
          ...baseStyles,
          { borderWidth: 1, borderColor: colorMapping[color] },
        ];
      case 'dashed':
        return [
          ...baseStyles,
          {
            borderWidth: 1,
            borderColor: colorMapping[color],
            borderStyle: 'dashed',
          },
        ];
      case 'link':
        return [...baseStyles, { backgroundColor: 'transparent' }];
      default:
        return baseStyles;
    }
  }, [variant, color, colorMapping, style?.container]);

  const typographyStyles = useMemo(() => {
    const baseStyles = [style?.text];
    if (variant === 'solid') {
      return [...baseStyles, { color: theme.colors.text }];
    }
    if (color === 'default') {
      return [...baseStyles, { color: theme.colors.text }];
    }
    return [...baseStyles, { color: colorMapping[color] }];
  }, [variant, color, colorMapping, style?.text, theme.colors]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[buttonStyles, disabled && styles.disabled]}
    >
      {startIcon && <View style={[styles.icon, style?.icon]}>{startIcon}</View>}
      <Typography style={[typographyStyles, style?.text]}>{title}</Typography>
      {endIcon && <View style={[styles.icon, style?.icon]}>{endIcon}</View>}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 4,
  },
  icon: {
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
