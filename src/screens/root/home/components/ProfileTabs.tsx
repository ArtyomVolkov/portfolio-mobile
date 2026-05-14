import { StyleSheet } from 'react-native';
import { BookA, FolderKanban } from 'lucide-react-native/icons';

import Tabs from '@/components/ui/Tabs';
import SummaryTab from './SummaryTab';
import ProjectsTab from './ProjectsTab';

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
          component: <ProjectsTab />,
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
