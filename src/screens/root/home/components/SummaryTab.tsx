import { StyleSheet, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import Card from '@/components/ui/Card';

import ProfileSection from './sections/Profile';
import SummarySection from './sections/Summary';
import ProgramLanguages from './sections/ProgramLanguages';
import Technologies from './sections/Technologies';
import ToolsSection from './sections/Tools';
import EducationSection from './sections/Education';
import LanguagesSection from './sections/Languages';
import SocialAndContactsSection from './sections/Social';

type Section = {
  key: string;
  component?: React.ComponentType;
};

const Sections: Section[] = [
  {
    key: 'profile',
    component: ProfileSection,
  },
  {
    key: 'summary',
    component: SummarySection,
  },
  {
    key: 'programming-languages',
    component: ProgramLanguages,
  },
  {
    key: 'technologies',
    component: Technologies,
  },
  {
    key: 'tools',
    component: ToolsSection,
  },
  {
    key: 'education',
    component: EducationSection,
  },
  {
    key: 'languages',
    component: LanguagesSection,
  },
  {
    key: 'social',
    component: SocialAndContactsSection,
  },
  {
    key: 'footer',
  },
];

const SummaryTab = () => {
  const renderItem = ({ item }: { item: Section }) => {
    if (item.key === 'footer') {
      return <View style={{ height: 80 }} />; // footer navigation height
    }
    if (!item.component) {
      return null;
    }
    const Component = item.component;

    return (
      <Card style={styles.card}>
        <Component />
      </Card>
    );
  };

  return (
    <FlashList
      data={Sections}
      style={[styles.flashList]}
      renderItem={renderItem}
      keyExtractor={item => item.key}
    />
  );
};

const styles = StyleSheet.create({
  flashList: {
    paddingTop: 12,
  },
  card: {
    gap: 16,
    marginBottom: 12,
  },
});

export default SummaryTab;
