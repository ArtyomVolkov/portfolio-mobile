import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Languages,
  NotepadText,
  Microchip,
  GraduationCap,
  Network,
} from 'lucide-react-native/icons';

import Card from '@/components/ui/Card';
import Chip from '@/components/ui/Chip';
import Typography from '@/components/ui/Typography';
import ProfileImage from '@/assets/img/profile.webp';

import { useTheme } from '@/contexts/theme';
import { TECHNOLOGIES } from '@/core/data/technologies';
import AsyncImage from '@/components/ui/AsyncImage';
import { TOOLS } from '@/core/data/tools';

const SummaryTab = () => {
  const { theme } = useTheme();
  return (
    <ScrollView
      contentContainerStyle={[
        {
          padding: theme.padding.medium,
          gap: theme.padding.medium,
          backgroundColor: theme.colors.background,
          paddingBottom: 87, // footer navigation height
        },
      ]}
    >
      <Card style={styles.card}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <View style={styles.caption}>
          <Typography size="xxl" style={styles.title}>
            Artem Volkov
          </Typography>
          <Typography
            style={[styles.subtitle, { color: theme.colors.primary }]}
          >
            Senior FrontEnd Software Engineer
          </Typography>
        </View>
      </Card>
      <Card style={styles.card}>
        <View style={styles.caption}>
          <View style={styles.headline}>
            <NotepadText color={theme.colors.text} size={28} />
            <Typography size="xl" style={styles.title}>
              Summary
            </Typography>
          </View>
          <Typography style={styles.description}>
            Software Engineer (13+ years) with vast development experience of
            web applications using libs/frameworks such as: Node, Nest, Next,
            React, ReactNative, Capacitor, Flutter, Angular, AngularJS,
            BackboneJS.
          </Typography>
          <Typography style={styles.description}>
            I have experience in the backend, particularly in delivering REST
            API services and working with databases such as MongoDB and
            PostgreSQL. Good experience with OOP, FP, and GoF's design patterns.
          </Typography>
          <Typography style={styles.description}>
            Experience with Micro FrontEnd infrastructure. Knowledgeable about
            TDD and BDD development methods, performance diagnostics for
            JavaScript code, and handling complicated issues in UI development.
            Knowledgeable about the process of code review, code quality,
            estimations, and work planning.
          </Typography>
          <Typography style={styles.description}>
            I have experience in leading teams of 2-5 people, mentoring junior
            developers, and conducting technical interviews.
          </Typography>
          <Typography style={styles.description}>
            Experience with the enhancements made to Core Web Vitals metrics,
            such as LCP, FID, and CLS, and optimizing web applications to
            improve these metrics.
          </Typography>
        </View>
      </Card>
      <Card>
        <View style={styles.caption}>
          <View style={styles.headline}>
            <Languages color={theme.colors.text} size={28} />
            <Typography size="xl" style={styles.title}>
              Programming Languages
            </Typography>
          </View>
          <View style={styles.section}>
            <Chip label="TypeScript" color="#2f74c0" icon="TS" />
            <Chip label="JavaScript" color="#f7df1e" icon="JS" />
            <Chip label="Python" color="#009688" icon="PY" />
            <Chip label="Dart" color="#00b4ab" icon="D" />
            <Chip label="Java (core)" color="#e86f00" icon="J" />
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.caption}>
          <View style={styles.headline}>
            <Microchip color={theme.colors.text} size={28} />
            <Typography size="xl" style={styles.title}>
              Technologies
            </Typography>
          </View>
          <View style={styles.section}>
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
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.caption}>
          <View style={styles.headline}>
            <Microchip color={theme.colors.text} size={28} />
            <Typography size="xl" style={styles.title}>
              Tools
            </Typography>
          </View>
          <View style={styles.section}>
            {TOOLS.map(tool => (
              <Chip
                key={tool.name}
                label={tool.name}
                style={{
                  container: [
                    styles.technologyChip,
                    { borderColor: theme.colors.secondary },
                  ],
                  label: { color: theme.colors.secondary },
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
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.caption}>
          <View style={styles.headline}>
            <GraduationCap color={theme.colors.text} size={28} />
            <Typography size="xl" style={styles.title}>
              Education
            </Typography>
          </View>
          <Typography size="md" style={styles.description}>
            M.Sc. in Mechanical Engineering
          </Typography>
          <Typography size="md" style={styles.description}>
            Donetsk National Technical University, Ukraine
          </Typography>
          <Typography size="md" style={styles.description}>
            Graduated in 2011
          </Typography>
        </View>
      </Card>
      <Card>
        <View style={styles.caption}>
          <View style={styles.headline}>
            <GraduationCap color={theme.colors.text} size={28} />
            <Typography size="xl" style={styles.title}>
              Languages
            </Typography>
          </View>
          <View style={styles.section}>
            <Chip label="Ukrainian: Native" color="#f7d000" icon="UA" />
            <Chip
              style={{ label: { color: '#fff' } }}
              label="English: B2+"
              color="#2f74c0"
              icon="EN"
            />
            <Chip label="Italian: A1" color="rgb(30, 170, 42)" icon="IT" />
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.caption}>
          <View style={styles.headline}>
            <Network color={theme.colors.text} size={28} />
            <Typography size="xl" style={styles.title}>
              Social and Contact
            </Typography>
          </View>
          <View style={styles.section}>
            <TouchableOpacity>
              <Chip
                label="#LeetCode"
                color="#f79800"
                icon={
                  <AsyncImage
                    uri="https://assets.leetcode.com/static_assets/public/icons/favicon.ico"
                    style={{ width: 24, height: 24, borderRadius: 4 }}
                  />
                }
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Chip
                label="#HackerRank"
                color="#4ac02f"
                icon={
                  <AsyncImage
                    uri="https://www.hackerrank.com/favicon.ico"
                    style={{ width: 24, height: 24, borderRadius: 4 }}
                  />
                }
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Chip
                label="#Codewars"
                color="#f7632e"
                icon={
                  <AsyncImage
                    uri="https://www.codewars.com/favicon.ico"
                    style={{ width: 24, height: 24, borderRadius: 12 }}
                  />
                }
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Chip
                label="#LinkedIn"
                color="#0077B5"
                style={{ label: { color: '#fff' } }}
                icon={
                  <AsyncImage
                    uri="https://www.linkedin.com/favicon.ico"
                    style={{ width: 24, height: 24, borderRadius: 4 }}
                  />
                }
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Chip
                label="#Github"
                color="#333"
                style={{ label: { color: '#fff' } }}
                icon={
                  <AsyncImage
                    uri="https://www.github.com/favicon.ico"
                    style={{ width: 24, height: 24, borderRadius: 12 }}
                  />
                }
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Chip
                label="#Email"
                color="#303030"
                style={{ label: { color: '#fff' } }}
                icon={
                  <AsyncImage
                    uri="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
                    style={{ width: 24, height: 24, borderRadius: 4 }}
                  />
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 16,
  },
  section: {
    paddingVertical: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  caption: {
    paddingHorizontal: 8,
    gap: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
  },
  headline: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color: '#5E5E5E',
  },
  profileImage: {
    width: '100%',
    height: 485,
    objectFit: 'cover',
    borderRadius: 8,
  },
  technologyChip: {
    borderWidth: 1,
  },
});

export default SummaryTab;
