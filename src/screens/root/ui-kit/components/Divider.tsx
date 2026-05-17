import { StyleSheet } from 'react-native';

import Typography from '@/components/ui/Typography';
import Divider from '@/components/ui/Divider';
import BottomTabView from '@/components/layout/BottomTabView';

const DividerTab = () => {
  return (
    <BottomTabView style={styles.container}>
      <Typography style={styles.title}>Divider</Typography>
      <Typography style={styles.subtitle} color="shadow">
        A divider is a visual element that separates content within a layout.
      </Typography>
      <Divider />
      <Typography style={styles.subtitle} color="shadow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider title="With Title" align="center" />
      <Typography style={styles.subtitle} color="shadow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider title="Right Align Title" align="right" />
      <Typography style={styles.subtitle} color="shadow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider title="Left Align Title" align="left" />
      <Typography style={styles.subtitle} color="shadow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider title="Height 6pt" align="center" height={6} />
      <Typography style={styles.subtitle} color="shadow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider
        title="Dashed Style"
        align="center"
        height={4}
        borderStyle="dashed"
      />
      <Typography style={styles.subtitle} color="shadow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider
        title="Dotted Style"
        align="center"
        height={4}
        borderStyle="dotted"
      />
      <Typography style={styles.subtitle} color="shadow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
    </BottomTabView>
  );
};

export default DividerTab;

const styles = StyleSheet.create({
  container: {
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
});
