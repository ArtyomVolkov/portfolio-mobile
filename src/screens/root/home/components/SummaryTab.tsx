import { StyleSheet } from 'react-native';
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
];

const SummaryTab = () => {
  const renderItem = (item: Section) => {
    if (!item.component) {
      return null;
    }
    const Component = item.component;

    return (
      <Card style={styles.card} key={item.key}>
        <Component />
      </Card>
    );
  };

  return (
    <FlashList
      data={Sections}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.flashList}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingBottom: 72,
  },
  flashList: {
    padding: 12,
    paddingBottom: 74,
  },
  card: {
    gap: 16,
    marginBottom: 12,
  },
});

export default SummaryTab;
