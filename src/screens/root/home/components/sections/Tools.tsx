import { StyleSheet } from 'react-native';
import { Toolbox } from 'lucide-react-native/icons';

import Chip from '@/components/ui/Chip';
import AsyncImage from '@/components/ui/AsyncImage';
import Caption from './Caption';

import { useTheme } from '@/contexts/theme';
import { TOOLS } from '@/core/data/tools';

const ToolsSection = () => {
  const { theme } = useTheme();

  return (
    <Caption icon={Toolbox} title="Tools">
      {TOOLS.map(tool => (
        <Chip
          key={tool.name}
          label={tool.name}
          style={{
            container: [
              styles.toolChip,
              { borderColor: theme.colors.primary },
            ],
            label: { color: theme.colors.primary },
          }}
          icon={
            tool.icon && (
              <AsyncImage
                uri={tool.icon}
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
  toolChip: {
    borderWidth: 1,
  },
});

export default ToolsSection;
