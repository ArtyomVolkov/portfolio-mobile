import { FC } from 'react';
import { View, StyleSheet } from 'react-native';

import { useTheme } from '@/contexts/theme';
import Typography from '@/components/ui/Typography';

type CaptionProps = {
  icon: React.ComponentType<{ color: string; size: number }>;
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  detailsDirection?: 'row' | 'column';
};

const Caption: FC<CaptionProps> = ({
  icon: Icon,
  title,
  children,
  detailsDirection = 'row',
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.caption}>
      <View style={styles.headline}>
        <Icon color={theme.colors.text} size={28} />
        <Typography size="xl" style={styles.title}>
          {title}
        </Typography>
      </View>
      <View style={[styles.details, { flexDirection: detailsDirection }]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  caption: {
    paddingHorizontal: 8,
    gap: 8,
  },
  headline: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  details: {
    paddingVertical: 6,
    flexWrap: 'wrap',
    gap: 8,
  },
});

export default Caption;
