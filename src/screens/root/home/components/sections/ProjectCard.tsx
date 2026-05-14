import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import Typography from '@/components/ui/Typography';
import AsyncImage from '@/components/ui/AsyncImage';
import Chip from '@/components/ui/Chip';
import Card from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';

import { useTheme } from '@/contexts/theme';
import { type Technology } from '@/core/data/technologies';
import { type Tool } from '@/core/data/tools';
import ShowMoreLess from '@/components/ui/accordion/ShowMoreLess';

const COUNTRY_API_URL = 'https://flagcdn.com/w40/';

type ToolsAndTechnologies = Array<Technology | Tool>;

type ProjectCardProps = {
  title: string;
  subtitle: string;
  country: string;
  technologies: ToolsAndTechnologies;
  responsibilities: string[];
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  subtitle,
  country,
  technologies,
  responsibilities,
}) => {
  const { theme } = useTheme();

  const renderChip = (item: Tool | Technology) => {
    const isTool = 'type' in item && item.type === 'tool';
    const color = !isTool ? theme.colors.primary : theme.colors.secondary;

    return (
      <Chip
        key={item.name}
        label={item.name}
        style={{
          container: [{ borderColor: color }],
          label: { color },
        }}
        icon={
          item.icon && (
            <AsyncImage uri={item.icon} style={styles.technologyImage} />
          )
        }
      />
    );
  };

  return (
    <Card style={styles.container}>
      <View
        style={[
          styles.countryBox,
          {
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.background,
          },
        ]}
      >
        <AsyncImage
          uri={`${COUNTRY_API_URL}${country}.png`}
          style={styles.countryFlag}
        />
      </View>
      <Typography
        size="xl"
        style={[styles.title, { color: theme.colors.primary }]}
      >
        {title}
      </Typography>
      <Typography color="shadow" style={styles.subtitle}>
        {subtitle}
      </Typography>
      <Divider title="Technologies & Tools" />
      <ShowMoreLess
        initialRenderCount={6}
        style={{
          children: styles.toolsAndTechnologies,
          toggle: styles.showMoreLessToggle,
        }}
      >
        {technologies.map(renderChip)}
      </ShowMoreLess>
      <Divider title="Responsibilities" />
      <ShowMoreLess
        initialRenderCount={3}
        style={{
          children: styles.responsibilities,
          toggle: styles.showMoreLessToggle,
        }}
      >
        {responsibilities.map(item => (
          <View key={item} style={styles.responsibilityItem}>
            <View style={styles.dot} />
            <Typography style={styles.responsibility}>{item}</Typography>
          </View>
        ))}
      </ShowMoreLess>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  countryBox: {
    position: 'absolute',
    right: -1,
    top: -1,
    borderWidth: 1,
    padding: 8,
    borderTopRightRadius: 8,
  },
  countryFlag: {
    width: 40,
    height: 21,
    backgroundColor: 'transparent',
  },
  toolsAndTechnologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingVertical: 8,
  },
  technologyImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  technologyChip: {
    borderWidth: 1,
  },
  responsibilities: {
    gap: 6,
    paddingVertical: 8,
    flexDirection: 'column',
    marginLeft: 8,
  },
  responsibilityItem: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  responsibility: {
    flex: 1,
    fontSize: 18,
    color: '#93db3e',
  },
  dot: {
    marginTop: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#93db3e',
  },
  showMoreLessToggle: {
    alignItems: 'flex-end',
  },
});

export default ProjectCard;
