import { FC, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { LucideProps } from 'lucide-react-native';

import Typography from '@/components/ui/Typography';
import { type TViewStyle } from '@/core/types/ui';
import { useTheme } from '@/contexts/theme';

type TabItem = {
  key: string;
  title: string;
  component: React.ReactNode;
  icon?: React.ComponentType<LucideProps>;
  disabled?: boolean;
};

type TabsProps = {
  items: TabItem[];
  fullWidth?: boolean;
  defaultIndex?: number;
  styles?: {
    root?: TViewStyle;
    header?: TViewStyle;
    body?: TViewStyle;
    tabItem?: TViewStyle;
  };
};

const Tabs: FC<TabsProps> = ({ items, fullWidth, defaultIndex, styles }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(
    items[defaultIndex || 0]?.key || items[0]?.key,
  );

  const onTabPress = (tabItem: TabItem) => {
    if (!tabItem.disabled) {
      setActiveTab(tabItem.key);
    }
  };

  const renderTabItem = (item: TabItem) => {
    const isActive = item.key === activeTab;
    const activeColor = isActive ? theme.colors.primary : theme.colors.shadow;

    return (
      <TouchableOpacity
        key={item.key}
        disabled={item.disabled}
        style={[
          style.tabItem,
          styles?.tabItem,
          isActive && {
            borderBottomColor: activeColor,
          },
          fullWidth && { flex: 1, alignItems: 'center' },
          item.disabled && style.disabled,
        ]}
        onPress={() => onTabPress(item)}
      >
        {item.icon && <item.icon size={20} color={activeColor} />}
        <Typography
          size="lg"
          style={{
            color: activeColor,
          }}
        >
          {item.title}
        </Typography>
      </TouchableOpacity>
    );
  };

  const renderTabContent = () => {
    const tab = items.find(item => item.key === activeTab);

    if (!tab) {
      return null;
    }
    return tab.component;
  };

  return (
    <View style={[style.container, styles?.root]}>
      <View
        style={[
          style.header,
          styles?.header,
          { borderBottomColor: theme.colors.border },
        ]}
      >
        {items.map(renderTabItem)}
      </View>
      <View style={[style.body, styles?.body]}>{renderTabContent()}</View>
    </View>
  );
};

export default Tabs;

const style = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  body: {
  },
  tabItem: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    marginBottom: -1,
    borderBottomColor: 'transparent',
  },
  disabled: {
    opacity: 0.5,
  },
});
