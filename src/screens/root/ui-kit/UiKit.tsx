import SafeAreaView from '@/components/layout/SafeAreaView';
import HorizontalTabs from '@/components/ui/HorizontalTabs';

import { Paintbrush } from 'lucide-react-native/icons';
import ThemesTab from './components/Themes';

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
        ]}
      />
    </SafeAreaView>
  );
};

export default UiKitScreen;
