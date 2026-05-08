type Technology = {
  name: string;
  description: string;
  icon?: string;
};

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'Node.js',
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing developers to run JavaScript on the server side.",
    icon: 'https://dl.svgcdn.com/png/logos/nodejs-icon-400.png',
  },
  {
    name: 'Express.js',
    icon: 'https://img.icons8.com/color/64/express-js.jpg',
    description:
      'A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
  },
  {
    name: 'MySQL',
    description:
      'A popular open-source relational database management system that uses SQL (Structured Query Language) for managing and querying data.',
    icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
  },
  {
    name: 'MongoDB',
    description:
      'A NoSQL database that uses a document-oriented data model, allowing for flexible and scalable data storage.',
    icon: 'https://www.mongodb.com/assets/images/global/leaf.png',
  },
  {
    name: 'PostgreSQL',
    description:
      'A powerful, open-source relational database system with a strong reputation for reliability, feature robustness, and performance.',
    icon: 'https://www.postgresql.org/media/img/about/press/elephant.png',
  },
  {
    name: 'Web Storage',
    description:
      'A web API that provides mechanisms by which browsers can store key-value pairs, allowing for persistent data storage on the client side.',
    icon: 'https://cdn-icons-png.flaticon.com/512/9542/9542653.png',
  },
  {
    name: 'REST API',
    description:
      'An architectural style for designing networked applications, relying on stateless communication and standard HTTP methods to interact with resources.',
  },
  {
    name: 'GraphQL',
    description:
      'A query language for APIs and a runtime for executing those queries with your existing data, providing a more efficient and flexible alternative to REST.',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-graphql-logo-icon-svg-download-png-2944912.png',
  },
  {
    name: 'HTML5',
    description:
      'The latest version of the Hypertext Markup Language, which is used for structuring and presenting content on the web.',
    icon: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
  },
  {
    name: 'CSS3',
    description:
      'The latest version of the Cascading Style Sheets language, used for describing the presentation of a document written in HTML or XML.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
  },
  {
    name: 'JavaScript',
    description:
      'A high-level, interpreted programming language that is widely used for web development to create interactive and dynamic web pages.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  },
  {
    name: 'TypeScript',
    description:
      'A strongly typed programming language that builds on JavaScript, providing static typing and enhanced tooling for large-scale applications.',
    icon: 'https://www.typescriptlang.org/icons/icon-48x48.png',
  },
  {
    name: 'React Native',
    description:
      'A popular framework for building cross-platform mobile applications using JavaScript and React.',
    icon: 'https://reactjs.org/favicon.ico',
  },
  {
    name: 'Flutter',
    description:
      'An open-source UI software development kit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.',
    icon: 'https://img.icons8.com/color/64/flutter.jpg',
  },
  {
    name: 'Capacitor',
    description:
      'A cross-platform native runtime for building web applications that run natively on iOS, Android, and the web.',
    icon: 'https://img.icons8.com/color/64/capacitor.png',
  },
  {
    name: 'React',
    description:
      'A JavaScript library for building user interfaces, maintained by Facebook and a community of developers.',
    icon: 'https://reactjs.org/favicon.ico',
  },
  {
    name: 'Angular',
    description:
      'A platform and framework for building single-page client applications using HTML and TypeScript, maintained by Google.',
    icon: 'https://angular.io/assets/images/logos/angular/angular.png',
  },
  {
    name: 'AngularJS',
    description:
      'A JavaScript-based open-source front-end web framework for developing single-page applications, maintained by Google.',
    icon: 'https://img.icons8.com/color/64/angularjs.jpg',
  },
  {
    name: 'Backbone.js',
    description:
      'A JavaScript library that provides structure to web applications by offering models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.',
    icon: 'https://img.favpng.com/22/10/15/backbone-js-javascript-programmer-react-png-favpng-R1xHjpXdSirRXsUJgZMajcwJV.jpg',
  },
  {
    name: 'Micro Frontends',
    description:
      'An architectural style where independently deliverable frontend applications are composed into a greater whole, allowing for better scalability and maintainability.',
  },
  {
    name: 'Web Sockets',
    description:
      'A protocol that provides full-duplex communication channels over a single TCP connection, allowing for real-time data transfer between a client and server.',
  },
  {
    name: 'PWA',
    description:
      'Progressive Web Apps are web applications that use modern web capabilities to deliver an app-like experience to users, including offline support, push notifications, and fast load times.',
  },
  {
    name: 'Core Web Vitals',
    description:
      'A set of specific factors that Google considers important in a webpage’s overall user experience, including metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).',
  },
  {
    name: 'OOP',
    description:
      'Object-Oriented Programming is a programming paradigm based on the concept of "objects", which can contain data and code that manipulates that data.',
  },
  {
    name: 'FP',
    description:
      'Functional Programming is a programming paradigm where programs are constructed by applying and composing functions, emphasizing immutability and first-class functions.',
  },
  {
    name: 'TDD',
    description:
      'Test-Driven Development is a software development process where tests are written before the code, ensuring that the code meets the specified requirements.',
  },
  {
    name: 'BDD',
    description:
      'Behavior-Driven Development is an extension of TDD that emphasizes collaboration between developers, QA, and non-technical stakeholders in defining the behavior of an application.',
  },
  {
    name: 'Material UI',
    description:
      'A popular React UI framework that implements Google’s Material Design guidelines, providing a set of reusable components and styles for building modern web applications.',
    icon: 'https://material-ui.com/static/logo.png',
  },
  {
    name: 'Ant Design',
    description:
      'A design system and React UI library that provides a set of high-quality components and design guidelines for building user interfaces.',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
  },
  {
    name: 'Tailwind CSS',
    description:
      'A utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.',
    icon: 'https://tailwindcss.com/favicons/favicon.ico',
  },
  {
    name: 'Bootstrap',
    description:
      'A popular front-end framework for developing responsive and mobile-first websites, providing a collection of CSS and JavaScript components.',
    icon: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png',
  },
  {
    name: 'Kendo UI',
    description:
      'A collection of JavaScript UI components for building modern web applications, providing a wide range of features and customization options.',
    icon: 'https://demos.telerik.com/kendo-ui/content/favicon/favicon.ico',
  },
  {
    name: 'Sass',
    description:
      'A preprocessor scripting language that is interpreted or compiled into CSS, providing features like variables, nested rules, and mixins to make CSS more maintainable and extendable.',
    icon: 'https://img.icons8.com/color/64/sass.jpg',
  },
  {
    name: 'D3.js',
    description:
      'A JavaScript library for producing dynamic, interactive data visualizations in web browsers, using HTML, SVG, and CSS.',
    icon: 'https://d3js.org/logo.svg',
  },
  {
    name: 'SVG',
    description:
      'Scalable Vector Graphics is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation.',
    icon: 'https://img.icons8.com/external-fauzidea-flat-fauzidea/64/external-svg-file-file-extension-fauzidea-flat-fauzidea.jpg',
  },
  {
    name: 'Canvas HTML5',
    description:
      'A web API that provides a means for drawing graphics via JavaScript and the HTML <canvas> element, allowing for dynamic, scriptable rendering of 2D shapes and bitmap images.',
  },
  {
    name: 'Service Workers',
    description:
      'A script that runs in the background of a web page, separate from the main browser thread, enabling features like offline support, push notifications, and background sync.',
  },
  {
    name: 'Web Workers',
    description:
      'A JavaScript API that allows for running scripts in background threads, enabling concurrent execution of code without blocking the main thread.',
  },
  {
    name: 'React Query',
    description:
      'A powerful data-fetching and state management library for React applications, providing features like caching, background updates, and automatic retries.',
    icon: 'https://tanstack.com/favicon.ico',
  },
  {
    name: 'Redux',
    description:
      'A predictable state container for JavaScript applications, often used with React to manage application state in a centralized store.',
    icon: 'https://redux.js.org/img/redux-logo-landscape.png',
  },
  {
    name: 'MobX',
    description:
      'A simple, scalable state management library for JavaScript applications, providing transparent reactive programming and a straightforward API.',
    icon: 'https://mobx.js.org/assets/mobx.png',
  },
  {
    name: 'Zustand',
    description:
      'A small, fast, and scalable state management solution for React applications, providing a simple API and built-in support for middleware and devtools.',
    icon: 'https://zustand-demo.pmnd.rs/favicon.ico',
  },
  {
    name: 'Jotai',
    description:
      'A primitive and flexible state management library for React applications, providing a simple API and support for derived state and asynchronous actions.',
    icon: 'https://cdn.candycode.com/jotai/jotai-mascot.png',
  },
  {
    name: 'Jest',
    description:
      'A delightful JavaScript testing framework with a focus on simplicity and support for large web applications.',
  },
  {
    name: 'Cypress',
    description:
      'A next-generation front-end testing tool built for the modern web, providing fast, reliable testing for anything that runs in a browser.',
    icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/cypress-icon-moigrz5nimpd7rsob0bisu.png/cypress-icon-pg9bdlubveoefqouilbg.png?_a=DATAiZAAZAA0',
  },
  {
    name: 'Scrum',
    description:
      'An agile framework for managing complex projects, emphasizing iterative development, collaboration, and adaptability.',
    icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-scrum-agile-flaticons-lineal-color-flat-icons-6.jpg',
  },
  {
    name: 'Kanban',
    description:
      'A visual workflow management method that helps teams visualize their work, limit work in progress, and maximize efficiency.',
  },
  {
    name: 'Lean',
    description:
      'A methodology that focuses on minimizing waste and maximizing value in software development processes, emphasizing continuous improvement and customer feedback.',
  },
  {
    name: 'Waterfall',
    description:
      'A linear and sequential software development process where each phase must be completed before the next phase begins, often criticized for its inflexibility and lack of adaptability to changing requirements.',
    icon: 'https://img.icons8.com/ios7/64/waterfall.png',
  },
  {
    name: 'DevOps',
    description:
      'A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery with high software quality.',
    icon: 'https://img.icons8.com/ios7/64/devops.jpg',
  },
  {
    name: 'CI/CD',
    description:
      'Continuous Integration and Continuous Deployment are practices that enable developers to integrate code changes frequently and deploy them automatically, ensuring faster delivery of software updates and improved collaboration.',
    icon: 'https://cdn-icons-png.flaticon.com/512/6213/6213369.png',
  },
  {
    name: 'Docker',
    description:
      'A platform that enables developers to automate the deployment of applications inside lightweight, portable containers, allowing for consistent environments across development, testing, and production.',
    icon: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/64/external-docker-a-set-of-coupled-software-as-a-service-logo-shadow-tal-revivo.jpg',
  },
];
