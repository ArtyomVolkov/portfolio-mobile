import {
  Paintbrush,
  SeparatorHorizontal,
  TypeOutline,
  RectangleEllipsis,
} from 'lucide-react-native/icons';

import SafeAreaView from '@/components/layout/SafeAreaView';
import HorizontalTabs from '@/components/ui/HorizontalTabs';

import ThemesTab from './components/Themes';
import DividerTab from './components/Divider';
import TypographyTab from './components/Typography';
import ButtonsTab from './components/Button';

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
            key: 'typography',
            title: 'Typography',
            icon: TypeOutline,
            component: <TypographyTab />,
          },
          {
            key: 'buttons',
            title: 'Buttons',
            icon: RectangleEllipsis,
            component: <ButtonsTab />,
          },
          {
            key: 'divider',
            title: 'Divider',
            icon: SeparatorHorizontal,
            component: <DividerTab />,
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default UiKitScreen;
