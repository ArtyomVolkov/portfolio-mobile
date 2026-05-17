import { FC } from 'react';
import { ScrollView, View } from 'react-native';

import { TViewStyle } from '@/core/types/ui';
import { TAB_BAR_HEIGHT } from '@/components/navigation/TabBar';

type BottomTabViewProps = {
  children: React.ReactNode | React.ReactNode[];
  scrollable?: boolean;
  style?: TViewStyle;
};

const BottomTabView: FC<BottomTabViewProps> = ({
  scrollable = true,
  children,
  style,
}) => {
  if (!scrollable) {
    return (
      <View
        style={[
          {
            paddingBottom: TAB_BAR_HEIGHT, // Ensure content is above the tab bar
          },
          style,
        ]}
      >
        {children}
      </View>
    );
  }
  return (
    <ScrollView
      contentContainerStyle={[
        {
          paddingBottom: TAB_BAR_HEIGHT,
        },
        style,
      ]}
    >
      {children}
    </ScrollView>
  );
};

export default BottomTabView;
