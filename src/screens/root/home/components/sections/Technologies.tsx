import { StyleSheet } from 'react-native';
import { Microchip } from 'lucide-react-native/icons';

import Chip from '@/components/ui/Chip';
import AsyncImage from '@/components/ui/AsyncImage';
import Caption from './Caption';

import { useTheme } from '@/contexts/theme';
import { TECHNOLOGIES } from '@/core/data/technologies';


const Technologies = () => {
  const { theme } = useTheme();

  return (
    <Caption icon={Microchip} title="Technologies">
      {TECHNOLOGIES.map(tech => (
        <Chip
          key={tech.name}
          label={tech.name}
          style={{
            container: [
              styles.technologyChip,
              { borderColor: theme.colors.primary },
            ],
            label: { color: theme.colors.primary },
          }}
          icon={
            tech.icon && (
              <AsyncImage
                uri={tech.icon}
                style={{ width: 24, height: 24, borderRadius: 12 }}
              />
            )
          }
        />
      ))}
    </Caption>
  );
};

const styles = StyleSheet.create({
  technologyChip: {
    borderWidth: 1,
  },
});

export default Technologies;
