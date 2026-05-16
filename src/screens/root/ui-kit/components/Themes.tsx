import { StyleSheet, View, ScrollView } from 'react-native';

import Typography from '@/components/ui/Typography';
import Divider from '@/components/ui/Divider';
import ThemeCard from '@/components/ui/ThemeCard';
import { useTheme } from '@/contexts/theme';
import { DarkThemeColors, LightThemeColors } from '@/constants/theme';

const ThemesTab = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Typography style={styles.title}>Themes</Typography>
      <Typography style={styles.subtitle} color="shadow">
        Theming in UI design refers to the process of creating a consistent
        visual style for a user interface by defining a set of colors,
        typography, spacing, and other design elements that can be applied
        across an application or website. It allows designers and developers to
        maintain a cohesive look and feel while providing flexibility for
        customization.
      </Typography>
      <Divider title="Dark Themes" />
      <View style={styles.themeList}>
        <ThemeCard
          active={theme.name === 'dark'}
          onPress={() => setTheme('dark')}
          name="Dark Theme"
          outlineColor="#414141"
          backgroundColor="#000000"
          textColor="#0A84FF"
          colors={[
            { name: 'Background', hex: DarkThemeColors.background },
            { name: 'Text', hex: DarkThemeColors.text },
            { name: 'Primary', hex: DarkThemeColors.primary },
            { name: 'Secondary', hex: DarkThemeColors.secondary },
            { name: 'Card', hex: DarkThemeColors.card },
            { name: 'Border', hex: DarkThemeColors.border },
            { name: 'Shadow', hex: DarkThemeColors.shadow },
          ]}
        />
      </View>
      <Divider title="Light Themes" />
      <View style={styles.themeList}>
        <ThemeCard
          active={theme.name === 'light'}
          onPress={() => setTheme('light')}
          name="Light Theme"
          outlineColor="#616161"
          textColor="#0A84FF"
          colors={[
            { name: 'Background', hex: LightThemeColors.background },
            { name: 'Text', hex: LightThemeColors.text },
            { name: 'Primary', hex: LightThemeColors.primary },
            { name: 'Secondary', hex: LightThemeColors.secondary },
            { name: 'Card', hex: LightThemeColors.card },
            { name: 'Border', hex: LightThemeColors.border },
            { name: 'Shadow', hex: LightThemeColors.shadow },
          ]}
        />
      </View>
    </ScrollView>
  );
};

export default ThemesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  themeList: {
    paddingVertical: 12,
    gap: 8,
  },
});
