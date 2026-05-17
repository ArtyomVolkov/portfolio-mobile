import { StyleSheet, View } from 'react-native';

import Typography from '@/components/ui/Typography';
import Divider from '@/components/ui/Divider';
import BottomTabView from '@/components/layout/BottomTabView';

const TypographyTab = () => {
  return (
    <BottomTabView style={styles.container}>
      <Typography style={styles.title}>Typography</Typography>
      <Typography style={styles.subtitle} color="shadow">
        Typography is the art and technique of arranging type to make written
      </Typography>
      <View style={styles.typographyList}>
        <Typography size="xxl">Typography (XXL)</Typography>
        <Typography size="xl">Typography (XL)</Typography>
        <Typography size="lg">Typography (LG)</Typography>
        <Typography size="md">Typography (MD)</Typography>
        <Typography size="sm">Typography (SM)</Typography>
        <Typography size="xs">Typography (XS)</Typography>
      </View>
      <Divider title="Text wrap" align="center" />
      <Typography color="shadow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider title="Two lines" align="center" />
      <Typography color="shadow" numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
    </BottomTabView>
  );
};

export default TypographyTab;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  typographyList: {
    gap: 14,
    marginBottom: 12,
  },
  subtitle: {
    marginBottom: 8,
  },
});
