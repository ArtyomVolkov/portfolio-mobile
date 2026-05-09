import { StyleSheet } from 'react-native';
import { GraduationCap } from 'lucide-react-native/icons';

import Typography from '@/components/ui/Typography';
import Caption from './Caption';

const EducationSection = () => {
  return (
    <Caption icon={GraduationCap} title="Education">
      <Typography size="md" style={styles.article}>
        M.Sc. in Mechanical Engineering
      </Typography>
      <Typography size="md" style={styles.article}>
        Donetsk National Technical University, Ukraine
      </Typography>
      <Typography size="md" style={styles.article}>
        Graduated in 2011
      </Typography>
    </Caption>
  );
};

const styles = StyleSheet.create({
  article: {
    fontSize: 18,
    color: '#5E5E5E',
  },
});

export default EducationSection;
