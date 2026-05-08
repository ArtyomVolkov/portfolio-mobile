import { BookA, FolderKanban } from 'lucide-react-native/icons';

import Typography from '@/components/ui/Typography';
import Tabs from '@/components/ui/Tabs';
import SummaryTab from './SummaryTab';
import { StyleSheet } from 'react-native';

const ProfileTabs = () => {
  return (
    <Tabs
      fullWidth
      styles={{ body: styles.tabContainer }}
      items={[
        {
          key: 'summary',
          title: 'Summary',
          icon: BookA,
          component: <SummaryTab />,
        },
        {
          key: 'projects',
          title: 'Projects',
          icon: FolderKanban,
          component: <Typography>Projects</Typography>,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
});

export default ProfileTabs;
