export type TColors = {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  card: string;
  border: string;
  shadow: string;
  danger: string;
  warning: string;
  info: string;
  success: string;
};

export type TPadding = {
  tiny: number;
  small: number;
  medium: number;
  large: number;
};

export const Themes = ['dark', 'light'] as const;

export type TTheme = {
  [K in (typeof Themes)[number]]: {
    name: string;
    fontFamily: string;
    colors: TColors;
    padding: TPadding;
    isDark?: boolean;
  };
};

export const DarkThemeColors = {
  background: '#000000',
  text: '#FFFFFF',
  primary: '#0a58ff',
  secondary: '#ff9800',
  card: '#1C1C1E',
  border: '#2b2b2b',
  shadow: '#5E5E5E',
  danger: '#ff4d4f',
  warning: '#faad14',
  info: '#1890ff',
  success: '#52c41a',
};

export const LightThemeColors = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#072bfa',
  secondary: '#eb0d58',
  card: '#f4f4f4',
  border: '#C7C7CC',
  shadow: '#5E5E5E',
  danger: '#ff4d4f',
  warning: '#faad14',
  info: '#1890ff',
  success: '#52c41a',
};

export const DEFAULT_THEME: (typeof Themes)[number] = 'dark';

const THEME: TTheme = {
  dark: {
    name: 'dark',
    fontFamily: 'System',
    colors: DarkThemeColors,
    padding: {
      tiny: 4,
      small: 8,
      medium: 16,
      large: 24,
    },
    isDark: true,
  },
  light: {
    name: 'light',
    fontFamily: 'System',
    colors: LightThemeColors,
    padding: {
      tiny: 4,
      small: 8,
      medium: 16,
      large: 24,
    },
    isDark: false,
  },
};

export default THEME;
