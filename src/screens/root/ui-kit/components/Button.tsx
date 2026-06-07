import { StyleSheet, View } from 'react-native';

import Typography from '@/components/ui/Typography';
import Divider from '@/components/ui/Divider';
import Button, { TButtonColor, TButtonVariant } from '@/components/ui/Button';
import BottomTabView from '@/components/layout/BottomTabView';

type TSection = {
  section: string;
  buttons: {
    title: string;
    variant: TButtonVariant;
    color: TButtonColor;
  }[];
};
const Sections: TSection[] = [
  {
    section: 'Default',
    buttons: [
      { title: 'Solid', variant: 'solid', color: 'default' },
      { title: 'Outlined', variant: 'outlined', color: 'default' },
      { title: 'Dashed', variant: 'dashed', color: 'default' },
      { title: 'Link', variant: 'link', color: 'default' },
    ],
  },
  {
    section: 'Primary',
    buttons: [
      { title: 'Solid', variant: 'solid', color: 'primary' },
      { title: 'Outlined', variant: 'outlined', color: 'primary' },
      { title: 'Dashed', variant: 'dashed', color: 'primary' },
      { title: 'Link', variant: 'link', color: 'primary' },
    ],
  },
  {
    section: 'Secondary',
    buttons: [
      { title: 'Solid', variant: 'solid', color: 'secondary' },
      { title: 'Outlined', variant: 'outlined', color: 'secondary' },
      { title: 'Dashed', variant: 'dashed', color: 'secondary' },
      { title: 'Link', variant: 'link', color: 'secondary' },
    ],
  },
  {
    section: 'Danger',
    buttons: [
      { title: 'Solid', variant: 'solid', color: 'danger' },
      { title: 'Outlined', variant: 'outlined', color: 'danger' },
      { title: 'Dashed', variant: 'dashed', color: 'danger' },
      { title: 'Link', variant: 'link', color: 'danger' },
    ],
  },
  {
    section: 'Warning',
    buttons: [
      { title: 'Solid', variant: 'solid', color: 'warning' },
      { title: 'Outlined', variant: 'outlined', color: 'warning' },
      { title: 'Dashed', variant: 'dashed', color: 'warning' },
      { title: 'Link', variant: 'link', color: 'warning' },
    ],
  },
  {
    section: 'Info',
    buttons: [
      { title: 'Solid', variant: 'solid', color: 'info' },
      { title: 'Outlined', variant: 'outlined', color: 'info' },
      { title: 'Dashed', variant: 'dashed', color: 'info' },
      { title: 'Link', variant: 'link', color: 'info' },
    ],
  },
  {
    section: 'Success',
    buttons: [
      { title: 'Solid', variant: 'solid', color: 'success' },
      { title: 'Outlined', variant: 'outlined', color: 'success' },
      { title: 'Dashed', variant: 'dashed', color: 'success' },
      { title: 'Link', variant: 'link', color: 'success' },
    ],
  },
];

const ButtonsTab = () => {
  return (
    <BottomTabView style={styles.container}>
      <Typography style={styles.title}>Buttons</Typography>
      <Typography style={styles.subtitle} color="shadow">
        Buttons are interactive elements that allow users to perform actions or
        navigate through an application.
      </Typography>
      <View style={styles.sections}>
        {Sections.map(({ section, buttons }) => (
          <View key={section} style={styles.section}>
            <Divider title={section} />
            <View style={styles.buttonsGrid}>
              {buttons.map(({ title, variant, color }) => (
                <Button
                  key={title}
                  title={title}
                  variant={variant}
                  color={color}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
    </BottomTabView>
  );
};

export default ButtonsTab;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sections: {
    gap: 16,
  },
  section: {
    gap: 12,
  },
  buttonsGrid: {
    gap: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subtitle: {
    marginBottom: 8,
  },
});
