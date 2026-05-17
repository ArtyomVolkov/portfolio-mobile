import { Paintbrush, SeparatorHorizontal, TypeOutline } from 'lucide-react-native/icons';

import SafeAreaView from '@/components/layout/SafeAreaView';
import HorizontalTabs from '@/components/ui/HorizontalTabs';

import ThemesTab from './components/Themes';
import DividerTab from './components/Divider';
import TypographyTab from './components/Typography';

const UiKitScreen = () => {
  return (
    <SafeAreaView>
      <HorizontalTabs
        items={[
          {
            key: 'themes',
            title: 'Themes',
            icon: Paintbrush,
            component: <ThemesTab />,
          },
          {
            key: 'divider',
            title: 'Divider',
            icon: SeparatorHorizontal,
            component: <DividerTab />,
          },
          {
            key: 'typography',
            title: 'Typography',
            icon: TypeOutline,
            component: <TypographyTab />,
          }
        ]}
      />
    </SafeAreaView>
  );
};

export default UiKitScreen;
