import { StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import ProjectCard from './sections/ProjectCard';

import {
  TypeScript,
  NodeJS,
  ExpressJS,
  PostgreSQL,
  GraphQL,
  MongoDB,
  React,
  ReactNative,
  Zustand,
  WebSockets,
  ServiceWorkers,
  AntDesign,
  SVG,
  Jest,
  Cypress,
  type Technology,
  Redux,
  MicroFrontends,
  Angular,
  Capacitor,
  MaterilaUI,
  GoogleMaps,
  CryptoJS,
  JavaScript,
  Docker,
  XP,
  SemanticUI,
  RxJS,
  Jasmine,
  D3JS,
  BackboneJS,
  Bootstrap,
} from '@/core/data/technologies';

import {
  VSCode,
  Xcode,
  AndroidStudio,
  Figma,
  type Tool,
  WebStorm,
  Webpack,
  Azure,
  Zeplin,
  Jira,
  AWS,
  Grunt,
  Maven,
} from '@/core/data/tools';

type TProject = {
  key: string;
  title: string;
  subtitle: string;
  country: string;
  technologies: (Technology | Tool)[];
  responsibilities: string[];
};

const Projects: TProject[] = [
  {
    key: 'freelance-upwork',
    title: 'Freelance (Upwork)',
    subtitle:
      'Development of web and mobile applications for different clients. The main focus is on UI development, architecture design, performance optimization.',
    country: 'us',
    technologies: [
      TypeScript,
      NodeJS,
      ExpressJS,
      PostgreSQL,
      GraphQL,
      MongoDB,
      React,
      ReactNative,
      Zustand,
      AntDesign,
      Jest,
      Cypress,
      WebSockets,
      ServiceWorkers,
      VSCode,
      Xcode,
      AndroidStudio,
      Figma,
    ],
    responsibilities: [
      'Building architecture of mobile apps.',
      'Building UI interfaces for web apps.',
      'Collaboration with cross-functional teams to define, design, and ship new features.',
      'Implementation of custom UI-kit.',
      'Implementation of REST api services with Node.js, Express.js.',
      'Writing unit, e2e tests with Jest, Cypress, Detox.',
      'Conduct regular code reviews to improve code quality.',
      'Lighthouse optimization.',
      'Bug fixing.',
    ],
  },
  {
    key: 'WalkMe',
    title: 'WalkMe™',
    subtitle:
      'WalkMe, the leading digital adoption platform, overlays on any application, identifying where workflows break and providing personalized guidance and automation to help your people get the job done.',
    country: 'il',
    technologies: [
      TypeScript,
      Angular,
      React,
      Redux,
      GraphQL,
      Jest,
      MicroFrontends,
      WebStorm,
      Webpack,
      Figma,
    ],
    responsibilities: [
      'Building UI architecture for internal web apps.',
      'Develop, manage application pages, UI components, animations, optimization.',
      'Implementation of custom UI-kit.',
      'Collaborate with PO on defining User Stories.',
      'Bug fixing, refactoring.',
    ],
  },
  {
    key: 'Akeso',
    title: 'Akeso',
    subtitle:
      'Mobile app (android, ios) for manually adding of tracking health data, some kind of Health app on ios, but with a lot of settings and report generation stuff.',
    country: 'gb',
    technologies: [
      TypeScript,
      Capacitor,
      Redux,
      MaterilaUI,
      SVG,
      Jest,
      Xcode,
      AndroidStudio,
      Webpack,
      Figma,
    ],
    responsibilities: [
      'Building app UI architecture from the scratch.',
      'Develop, manage application pages, UI components, animations, optimization.',
      'Manage of app builds in App Store, Google Play.',
      'Conduct regular code reviews to improve code quality.',
      'Mentoring of team members.',
      'Bug fixing, refactoring.',
    ],
  },
  {
    key: 'wineshipping',
    title: 'Wineshipping',
    subtitle:
      'The most comprehensive alcohol logistics network in the U.S. Fast and reliable service, warehouses near your customers, personalized support, and the innovative technology that powers our network…',
    country: 'us',
    technologies: [
      TypeScript,
      React,
      Redux,
      MaterilaUI,
      SVG,
      Jest,
      WebSockets,
      ServiceWorkers,
      VSCode,
      WebStorm,
      Azure,
      Figma,
    ],
    responsibilities: [
      'Develop, manage application pages, UI components, animations, optimization.',
      'Conduct regular code reviews to improve code quality.',
      'Collaborate with BA on defining User Stories.',
      'Mentoring of junior developer.',
      'PWA, Lighthouse optimization.',
      'Bug fixing, refactoring.',
    ],
  },
  {
    key: 'goScore',
    title: 'goScore',
    subtitle: `goScore is an app built with both NFL fans and bettors in mind, though the app's main market is those who would place a bet on a game but don't know how to or aren't aware of exactly what's on offer to them. With attractive visuals and unique data manipulations, goScore's selection of tools offers an insight into the game that can't be found elsewhere.`,
    country: 'gb',
    technologies: [
      TypeScript,
      ReactNative,
      Redux,
      SVG,
      Jest,
      GoogleMaps,
      CryptoJS,
      WebSockets,
      Webpack,
      Jira,
      Xcode,
      AndroidStudio,
      Zeplin,
    ],
    responsibilities: [
      'Develop, manage application pages, UI components, animations, optimization, analytics.',
      'Conduct regular code reviews to improve code quality.',
      'Collaborate with Product Owners on defining User Stories for team.',
      'Provide regular build to App Store, Google Play.',
      'Implementation of non standard animation transitions, interpolations.',
      'Huge optimization of component rendering model, performance analysis.',
      'Bug fixing.',
    ],
  },
  {
    key: 'seasoned',
    title: 'Seasoned',
    subtitle:
      'Leading provider of technology solutions for the restaurant and hospitality industries. The company will aim to remove friction, reduce cost and improve matching outcomes of current hiring solutions within the foodservice industry. It is the first foodservice-centric community designed to connect workers with jobs, talent and career development opportunities.',
    country: 'de',
    technologies: [
      JavaScript,
      React,
      Redux,
      MaterilaUI,
      Webpack,
      Docker,
      WebStorm,
      Azure,
      Zeplin,
      Jira,
    ],
    responsibilities: [
      'Conduct regular code reviews to improve code quality.',
      'Collaborate with product owners on defining User Stories for team.',
      'Completes applications development by coordinating requirements, schedules, and activities.',
      'Lighthouse optimization.',
      'Bug-fixing.',
    ],
  },
  {
    key: 'colligo',
    title: 'Colligo',
    subtitle:
      'A healthcare company which collaborates with a wide range of occupational categories in healthcare and specialize in nursing and medical care.',
    country: 'se',
    technologies: [
      JavaScript,
      React,
      Redux,
      MaterilaUI,
      GoogleMaps,
      Webpack,
      AWS,
      WebStorm,
      Zeplin,
      Jira,
      XP,
    ],
    responsibilities: [
      'SPA, application architecture design, developing UI components (Component model React + Redux), Unit tests.',
      'Collaboration with the customer, improvements and suggestions.',
      'Integration with other REST API services: (Google APIs).',
      'PWA, Lighthouse optimization.',
      'Bug-fixing.',
    ],
  },
  {
    key: 'think-research',
    title: 'Think Research',
    subtitle:
      'Healthcare Software Company developing knowledge-based tools that empower clinicians to deliver the best evidence-based care to patients, driving better patient outcomes.',
    country: 'ca',
    technologies: [
      JavaScript,
      React,
      Redux,
      SemanticUI,
      GoogleMaps,
      Webpack,
      WebStorm,
      Jest,
      Zeplin,
      Jira,
    ],
    responsibilities: [
      'SPA, application architecture design, developing UI components (Component model React + Redux), Unit tests.',
      'Collaboration with the customer, improvements and suggestions.',
      'Integration with other REST API services.',
      'PWA, Lighthouse optimization.',
      'Bug-fixing.',
    ],
  },
  {
    key: 'dysney',
    title: 'Dysney',
    subtitle:
      'DSNY-ATHN, Disney ABC Television Group is determined to consolidate its video and game content management into the Athena Portal. The main goal of the Portal is to provide an internal powerful mechanism for content broadcasting configuration known as policies. To achieve the goal Athena Portal provides content browsing mechanism with flexible search functionality, recent activities dashboard, drag-n-drop, contextual menu, favoriting, reports generation. User roles and permission grant different access levels.',
    country: 'us',
    technologies: [
      TypeScript,
      Angular,
      RxJS,
      MaterilaUI,
      Webpack,
      WebStorm,
      Jasmine,
      Zeplin,
      Jira,
    ],
    responsibilities: [
      'Building UI architecture for internal web apps.',
      'Develop, manage application pages, UI components, animations, optimization.',
      'Collaborate with PO on defining User Stories.',
      'BDD development',
      'Conduct regular code reviews to improve code quality.',
      'Bug fixing, refactoring.',
    ],
  },
  {
    key: 'ticketmaster',
    title: 'Ticketmaster',
    subtitle:
      'TKM-AMS, The primary goal of the project is to develop a tool that will quickly help customer to find required information about assets of the company such as Products, Components, Virtual Machines, Physical Servers etc (up to 50+ of different types) and be able to react efficiently during the escalation and problem solving cases.',
    country: 'us',
    technologies: [
      JavaScript,
      React,
      Redux,
      D3JS,
      MaterilaUI,
      Webpack,
      WebStorm,
      Jest,
      Zeplin,
      Jira,
    ],
    responsibilities: [
      'Building UI architecture for internal web apps.',
      'Develop, manage application pages, UI components, animations, optimization.',
      'Collaborate with PO on defining User Stories.',
      'Conduct regular code reviews to improve code quality.',
      'Sonar Analysis.',
      'Integration Google Analytics.',
      'Bug fixing, refactoring.',
    ],
  },
  {
    key: 'appery.io',
    title: 'Appery.io',
    subtitle:
      'Appery.io is a rapid development, integration and deployment platform for delivering cross-device apps in the enterprise. It combines enterprise-grade integration middleware with a browser-based rapid development environment and mobile backend services to accelerate enterprise mobilization. Appery.io enables developers and business analysts to rapidly create and run apps that help businesses of all sizes increase revenues and improve productivity.',
    country: 'us',
    technologies: [
      JavaScript,
      BackboneJS,
      PostgreSQL,
      Bootstrap,
      Grunt,
      Maven,
      WebStorm,
      Jira,
    ],
    responsibilities: [
      'Develop UI interfaces, special features and functionality, animations.',
      'Collaborate with PO on defining User Stories.',
      'Conduct regular code reviews to improve code quality.',
      'Optimizely (A/B testing).',
      'Report System (JasperReports).',
      'Bug fixing, refactoring.',
    ],
  },
];

const ProjectsTab = () => {
  const renderItem = (item: TProject) => {
    return (
      <ProjectCard
        key={item.key}
        title={item.title}
        subtitle={item.subtitle}
        country={item.country}
        technologies={item.technologies}
        responsibilities={item.responsibilities}
      />
    );
  };

  return (
    <FlashList
      data={Projects}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.flashList}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingBottom: 72,
  },
  flashList: {
    padding: 12,
    paddingBottom: 74,
  },
  card: {
    gap: 16,
    marginBottom: 12,
  },
});

export default ProjectsTab;
