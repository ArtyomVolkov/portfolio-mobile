import { StyleSheet } from 'react-native';
import { GraduationCap } from 'lucide-react-native/icons';

import Typography from '@/components/ui/Typography';
import Caption from './Caption';

const EducationSection = () => {
  return (
    <Caption icon={GraduationCap} title="Education">
      <Typography style={styles.article} color="shadow">
        M.Sc. in Mechanical Engineering
      </Typography>
      <Typography style={styles.article} color="shadow">
        Donetsk National Technical University, Ukraine
      </Typography>
      <Typography style={styles.article} color="shadow">
        Graduated in 2011
      </Typography>
    </Caption>
  );
};

const styles = StyleSheet.create({
  article: {
    fontSize: 18,
  },
});

export default EducationSection;
