import { View, ViewStyle, StyleProp } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TSafeScreenProps = {
  children?: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle> | undefined;
};

const SafeScreen: React.FC<TSafeScreenProps> = ({ children, style }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default SafeScreen;
