import { FC, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import Typography from './Typography';

import { useTheme } from '@/contexts/theme';
import { LucideProps } from 'lucide-react-native';

type TabItem = {
  key: string;
  title: string;
  icon?: React.ComponentType<LucideProps>;
  component: React.ReactNode;
};

type HorizontalTabsProps = {
  items: TabItem[];
  style?: {
    body?: object;
  };
};

const HorizontalTabs: FC<HorizontalTabsProps> = ({ items, style }) => {
  const { theme } = useTheme();
  const flatListRef = useRef<FlatList>(null);
  const [activeTab, setActiveTab] = useState(items[0]?.key || '');

  const onTabPress = (tabItem: TabItem) => {
    setActiveTab(tabItem.key);

    const index = items.findIndex(i => i.key === tabItem.key);

    if (index !== -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  };

  const renderTabPill = (item: TabItem) => {
    const isActive = item.key === activeTab;

    return (
      <TouchableOpacity
        key={item.key}
        style={[
          styles.tabPill,
          {
            borderColor: isActive
              ? theme.colors.primary
              : theme.colors.background,
          },
        ]}
        onPress={() => onTabPress(item)}
      >
        {item.icon && (
          <item.icon
            size={20}
            color={isActive ? theme.colors.primary : theme.colors.shadow}
          />
        )}
        <Typography
          style={[
            styles.tabTitle,
            { color: isActive ? theme.colors.primary : theme.colors.shadow },
          ]}
        >
          {item.title}
        </Typography>
      </TouchableOpacity>
    );
  };

  const renderTabContent = () => {
    const activeItem = items.find(item => item.key === activeTab);
    return activeItem ? activeItem.component : null;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { borderBottomColor: theme.colors.border }]}>
        <FlatList
          ref={flatListRef}
          data={items}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderTabPill(item)}
          keyExtractor={item => item.key}
        />
      </View>
      <View style={[styles.body, style?.body]}>{renderTabContent()}</View>
    </View>
  );
};

export default HorizontalTabs;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 8,
  },
  tabPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 6,
    borderWidth: 1,
    padding: 12,
    marginHorizontal: 4,
  },
  tabTitleContainer: {
    marginLeft: 8,
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
  },
});
