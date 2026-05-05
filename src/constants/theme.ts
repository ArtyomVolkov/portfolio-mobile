export type TColors = {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  card: string;
  border: string;
  shadow: string;
};

export const Themes = ['dark', 'light'] as const;

export type TTheme = {
  [K in (typeof Themes)[number]]: {
    name: string;
    fontFamily: string;
    colors: TColors;
    isDark?: boolean;
  };
};

export const DEFAULT_THEME: (typeof Themes)[number] = 'dark';

const THEME: TTheme = {
  dark: {
    name: 'dark',
    fontFamily: 'System',
    colors: {
      background: '#000000',
      text: '#FFFFFF',
      primary: '#0A84FF',
      secondary: '#5E5E5E',
      card: '#1C1C1E',
      border: '#2b2b2b',
      shadow: '#FFFFFF',
    },
    isDark: true,
  },
  light: {
    name: 'light',
    fontFamily: 'System',
    colors: {
      background: '#FFFFFF',
      text: '#000000',
      primary: '#007AFF',
      secondary: '#8E8E93',
      card: '#f4f4f4',
      border: '#C7C7CC',
      shadow: '#000000',
    },
    isDark: false,
  },
};

export default THEME;
