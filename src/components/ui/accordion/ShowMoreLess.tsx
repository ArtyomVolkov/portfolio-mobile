import { FC, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Typography from '@/components/ui/Typography';
import AccordionView from './AccordionView';

import { TViewStyle } from '@/core/types/ui';

type ShowMoreProps = {
  initialRenderCount: number;
  defaultOpened?: boolean;
  showMoreLabel?: string;
  showLessLabel?: string;
  children?: React.ReactNode | React.ReactNode[];
  style?: {
    container?: TViewStyle;
    children?: TViewStyle;
    toggle?: TViewStyle;
  };
};

const ShowMoreLess: FC<ShowMoreProps> = ({
  children,
  initialRenderCount,
  style,
  defaultOpened = false,
  showMoreLabel = 'Show more',
  showLessLabel = 'Show less',
}) => {
  const [open, setOpen] = useState(defaultOpened);

  const handleToggle = () => {
    setOpen(!open);
  };

  const renderChildrenContent = () => {
    if (Array.isArray(children)) {
      return children
        .filter((_, index) => open || index < initialRenderCount)
        .map(child => child);
    }
    return children;
  };

  return (
    <View style={[styles.container, style?.container]}>
      <AccordionView style={style?.children}>
        {renderChildrenContent()}
      </AccordionView>
      <TouchableOpacity
        style={[styles.toggle, style?.toggle]}
        onPress={handleToggle}
      >
        <Typography size="md">
          {open ? showLessLabel : showMoreLabel}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  toggle: {
    alignItems: 'center',
  },
});

export default ShowMoreLess;
