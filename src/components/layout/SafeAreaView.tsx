import { FC } from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { type TViewStyle } from '@/core/types/ui';

type SafeAreaViewProps = {
  children?: React.ReactNode;
  scrollable?: boolean;
  style?: TViewStyle;
};

const SafeAreaView: FC<SafeAreaViewProps> = ({
  children,
  scrollable = false,
  style,
}) => {
  const insets = useSafeAreaInsets();
  const containerStyle = [
    style,
    { paddingTop: insets.top, paddingBottom: insets.bottom },
  ];

  if (!scrollable) {
    return <View style={containerStyle}>{children}</View>;
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={containerStyle}
    >
      {children}
    </ScrollView>
  );
};

export default SafeAreaView;
