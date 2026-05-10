import { StyleSheet } from 'react-native';
import { NotepadText } from 'lucide-react-native/icons';

import Typography from '@/components/ui/Typography';
import ShowMoreLess from '@/components/ui/accordion/ShowMoreLess';
import Caption from './Caption';

const SummarySection = () => {
  return (
    <Caption icon={NotepadText} title="Summary">
      <ShowMoreLess
        initialRenderCount={1}
        style={{ children: styles.articles }}
      >
        <Typography style={styles.description}>
          Software Engineer (13+ years) with vast development experience of web
          applications using libs/frameworks such as: Node, Nest, Next, React,
          ReactNative, Capacitor, Flutter, Angular, AngularJS, BackboneJS.
        </Typography>
        <Typography style={styles.description}>
          I have experience in the backend, particularly in delivering REST API
          services and working with databases such as MongoDB and PostgreSQL.
          Good experience with OOP, FP, and GoF's design patterns.
        </Typography>
        <Typography style={styles.description}>
          Experience with Micro FrontEnd infrastructure. Knowledgeable about TDD
          and BDD development methods, performance diagnostics for JavaScript
          code, and handling complicated issues in UI development. Knowledgeable
          about the process of code review, code quality, estimations, and work
          planning.
        </Typography>
        <Typography style={styles.description}>
          I have experience in leading teams of 2-5 people, mentoring junior
          developers, and conducting technical interviews.
        </Typography>
        <Typography style={styles.description}>
          Experience with the enhancements made to Core Web Vitals metrics, such
          as LCP, FID, and CLS, and optimizing web applications to improve these
          metrics.
        </Typography>
      </ShowMoreLess>
    </Caption>
  );
};

export default SummarySection;

const styles = StyleSheet.create({
  articles: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 18,
    color: '#5E5E5E',
  },
});
