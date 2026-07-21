import deckuGif from '../assets/deckudb-demo.gif';
import kws0 from '../assets/kws0.webp';
import kws1 from '../assets/kws1.avif';
import kws2 from '../assets/kws2.webp';
import kws3 from '../assets/kws3.webp';
import kws4 from '../assets/kws4.webp';
import layerzGif from '../assets/layerz-demo.gif';
import layerzProductGif from '../assets/layerz-product-demo.gif';
import nodescriptGif from '../assets/nodescript-demo.gif';
import deckuImage from '../assets/screenshot-deckudb.png';
import layerzImage2 from '../assets/screenshot-layerz-2.png';
import nodescriptImage from '../assets/screenshot-nodescript.jpg';
import nodescriptImage2 from '../assets/screenshot-nodescript-2.png';

export const ProjectType = {
  Work: 'Work',
  Personal: 'Personal',
  OpenSource: 'Open Source',
};

export const projects = [
  {
    id: 'deckudb',
    name: 'DeckuDB',
    type: ProjectType.Personal,
    dateRange: 'Oct 2025 - Present',
    shortDescription:
      'A comprehensive database for Steam Deck game compatibility, helping gamers find the best experiences for their portable gaming device.',
    description: `DeckuDB is a comprehensive database aggregating community reports on Steam Deck game compatibility. The project emerged from the need for centralized, accurate, community-driven information about which games work best on Valve's handheld gaming device.

The platform features a user-friendly interface that allows gamers to search through thousands of game titles, check compatibility ratings, filter by performance metrics, and read community reviews. Each game entry includes users provided information about performance expectations, control schemes, and any special configurations needed.

Built with modern web technologies, DeckuDB emphasizes fast load times and an intuitive user experience. The database is continuously updated by a web crawler, ensuring that information remains current as new games are released and the Steam Deck software evolves.`,
    implementation: `The project is built using a modern full-stack architecture:

**Frontend** Vue.js 3 with Vite for blazing-fast development and optimized production builds. The UI leverages Vue's capabilities for clean, maintainable code and responsive design that works seamlessly across desktop and mobile devices.

**Backend** Node.js with Express, providing a RESTful API that serves game data and user submissions. The API is designed with performance in mind, implementing caching strategies and efficient database queries. The backend also includes a web crawler that periodically scrapes data from various sources to keep the database up-to-date with the latest game compatibility reports.

**Database** MongoDB for flexible document storage, perfect for handling varied game metadata and user-generated content. Indexes are strategically placed for optimal query performance.

**Deployment** Containerized with Docker and deployed on cloud infrastructure, ensuring scalability and reliability. The application uses CI/CD pipelines for automated testing and deployment.

Key technical features include:
- Progressive Web App (PWA) capabilities for offline access
- Real-time search with debouncing for instant results
- Data lazy loading for performance
- SEO-friendly routing and meta tags
- Comprehensive error handling and logging`,
    images: [
      {
        url: deckuImage,
        alt: 'DeckuDB screenshot',
        displayDuration: 2_000,
      },
      {
        url: deckuGif,
        alt: 'DeckuDB demo GIF',
        displayDuration: 48_000,
      },
    ],
    externalLink: 'https://deckudb.com',
    technologies: [
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'MongoDB',
      'Express',
      'Docker',
      'Vite',
      'LLM APIs',
    ],
  },
  {
    id: 'layerz',
    name: 'LayerZ',
    type: ProjectType.Work,
    dateRange: 'Nov 2024 - Present',
    shortDescription:
      'A SaaS platform that empower your e-commerce business with advanced AI-driven tools to optimize sales and customer engagement.',
    description: `LayerZ is a cutting-edge SaaS platform designed to revolutionize e-commerce operations through artificial intelligence and advanced analytics. The platform serves as a comprehensive solution for online businesses looking to optimize their sales processes, understand customer behavior, and increase conversion rates.

The platform provides powerful tools for customer segmentation and engagement, predictive analytics, and automated marketing campaigns. Business owners can access real-time dashboards that visualize key metrics and trends, enabling data-driven decision making.

LayerZ integrates seamlessly with any e-commerce platform, making it easy for businesses to adopt without disrupting their existing workflows.`,
    implementation: `LayerZ is architected as a modern, scalable SaaS application:

**Frontend** Vue.js with TypeScript for type-safe, component-based development. The UI is built with Shadcn UI and Tailwind CSS for a sleek, responsive design. The frontend communicates with the backend via RESTful APIs. The platform also includes a custom-built AI-powered code generation engine that allows users to create personalized marketing campaigns without needing technical expertise.

**Backend** Restful API with Node.js, TypeScript and Express. The backend handles all business logic, data processing, and AI interactions. It integrates with various third-party services for email marketing, CRM, and analytics.

**AI** The AI-powered coding engine helps businesses personalize marketing campaigns without needing technical expertise. It uses Claude 4.5 Sonnet for natural language processing and code generation, allowing users to create custom HTML banners for customer engagement and sales optimization. 
The AI sales agent leverages LangChain, LangGraph, MCP, and RAG to provide multi-step reasoning and decision-making capabilities, enabling businesses to automate complex sales processes and customer interactions.

**Database** MongoDB for flexible document storage, perfect at early stages where changes are frequent. Indexes are strategically placed for optimal query performance.

**Deployment** Containerized with Docker and deployed on cloud infrastructure, ensuring scalability and reliability. The application uses CI/CD pipelines for automated testing and deployment.

**Security** Implementation of OAuth 2.0 for authentication, role-based access control, and encryption of sensitive data both in transit and at rest. GDPR compliance measures are built into the platform.

Key technical contributions include:
- oAuth2-based SSO and RBAC for multi-tenant SaaS 
- Real-time analytics using Imply Polaris (Apache Druid)
- Advanced rate limiting and DDoS protection
- Multi-step AI agents leveraging LangChain, LangGraph, MCP and RAG.
- IaC with Terraform for infrastructure management on AWS
- Comprehensive logging and monitoring
- Automated testing with Playwright and Vitest
- Continuous integration and deployment with GitHub Actions
- Webhook support for external integrations`,
    images: [
      {
        url: layerzImage2,
        alt: 'LayerZ concept image',
        displayDuration: 2_000,
      },
      {
        url: layerzProductGif,
        alt: 'LayerZ concept demo GIF',
        displayDuration: 45_000,
      },
      {
        url: layerzGif,
        alt: 'LayerZ dashboard demo GIF',
        displayDuration: 4 * 60_000,
      },
    ],
    externalLink: 'https://layerz.com/',
    technologies: [
      'Vue.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Nuxt.js',
      'Tailwind CSS',
      'Docker',
    ],
  },
  {
    id: 'nodescript',
    name: 'NodeScript',
    type: ProjectType.Work,
    dateRange: 'May 2023 - Nov 2024',
    shortDescription:
      'No-code platform for data pipelines and automation, enabling users to create complex workflows without writing code.',
    description: `NodeScript is an innovative no-code platform that democratizes data pipeline creation and workflow automation. The platform enables business analysts, product managers, and operations teams to build sophisticated data workflows without writing a single line of code.

The visual programming interface uses a node-based system where users can drag and drop components, connect them together, and configure data transformations. Connect any app, integrate APIs, and create workflows that can be executed through an endpoint, making them instantly available for other applications to consume.

NodeScript excels at handling complex ETL (Extract, Transform, Load) processes, data validation, enrichment, and distribution. The platform enables teams to manage APIs, monitor servers, and automate DevOps tasks, while providing rapid prototyping capabilities with instant debugging that lets you view each intermediary step as you build your workflows.

Users can schedule workflows to run automatically, set up triggers based on events, and monitor execution with detailed logging and error handling. The platform supports real-time collaboration, allowing teams to build, share, and collaborate on workflows together, making it invaluable for organizations looking to reduce their dependence on engineering resources for routine data operations while maintaining reliability and scalability.`,
    implementation: `NodeScript is built with a focus on usability, reliability, and extensibility:

**Frontend** Vue.js 3 with a custom canvas-based node editor. The visual programming interface uses HTML5 Canvas for rendering the node graph, providing smooth interactions and zoom capabilities.

**Backend** TypeScript and Node.js for the execution engine and API. The backend is designed to handle concurrent workflow executions, manage state, and provide a robust API for workflow management.

**Data Storage** MongoDB for storing workflow definitions, execution logs, and user data. The flexible schema allows for easy evolution of the data model as new features are added.

**Monitoring** Prometheus and Grafana for real-time monitoring of workflow execution metrics, system performance, and resource utilization.

Key technical contributions include:
- Plugin architecture for extensible data connectors
- Version control system for workflow definitions
- Real-time collaboration features using operational transform
- Sandboxed execution environment for security
- Advanced rate limiting and DDoS protection
- Credit system for managing workflow execution costs`,
    images: [
      {
        url: nodescriptImage2,
        alt: 'NodeScript website screenshot',
        displayDuration: 3_000,
      },
      {
        url: nodescriptImage,
        alt: 'NodeScript no code workflow editor screenshot',
        displayDuration: 5_000,
      },
      {
        url: nodescriptGif,
        alt: 'NodeScript demo GIF',
        displayDuration: 94_000,
      },
    ],
    externalLink: 'https://nodescript.dev',
    technologies: [
      'Vue.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Canvas API',
      'Prometheus',
      'Grafana',
      'Kubernetes',
    ],
  },
  {
    id: 'kws',
    name: 'Kids Web Services (KWS)',
    type: ProjectType.Work,
    dateRange: 'Mar 2016 - Apr 2017',
    shortDescription:
      'The leading platform for kids’ digital safety and parental consent management, used by major gaming and entertainment companies.',
    description: `Kids Web Services (KWS) is a developer-facing platform that provides the tools necessary to build compliant and safe digital experiences for younger audiences. It is used by some of the largest names in gaming and entertainment to manage parental consent, age verification, and data privacy in accordance with global regulations like COPPA and GDPR-K.

The platform streamlines the process of verifying a parent's identity and obtaining their permission for children to access various online features. By providing a unified, secure, and compliant solution, KWS enables developers to focus on creating engaging content while ensuring the safety and privacy of their youngest users.`,
    implementation: `Working on KWS involved maintaining and scaling a mission-critical platform with high availability and strict security requirements:

**Frontend** Built with Angular.js and JavaScript, focusing on a robust and maintainable dashboard for developers and a seamless, localized experience for parents during the consent flow.

**Backend** Powered by Node.js, express.js and JavaScript, handling complex workflows for age verification and parental consent. The backend architecture was designed to handle high traffic volumes from popular global gaming titles.

**Database** PostgreSQL was used for reliable, relational data storage, ensuring the integrity of consent records and user data.

**Infrastructure & DevOps** The platform was deployed on AWS using Docker for containerization, enabling consistent environments across development and production. CI/CD practices were fundamental to ensure safe and frequent deployments of this sensitive platform. DataDog and PagerDuty were used for monitoring and alerting, ensuring that any issues could be quickly identified and resolved.

Key technical contributions include:
- Integration with third-party age verification providers
- Localization for global markets
- High-security standards for PII (Personally Identifiable Information)
- Implementation of GDPR and COPPA compliance features
- Scalable monolithic architecture on AWS`,
    images: [
      {
        url: kws1,
        alt: 'KWS landing page',
        displayDuration: 3_000,
      },
      {
        url: kws0,
        alt: 'KWS dashboard',
        displayDuration: 3_000,
      },
      {
        url: kws2,
        alt: 'KWS parent flow',
        displayDuration: 3_000,
      },
      {
        url: kws3,
        alt: 'KWS developer tools',
        displayDuration: 3_000,
      },
      {
        url: kws4,
        alt: 'KWS mobile view',
        displayDuration: 3_000,
      },
    ],
    externalLink: 'https://www.kidswebservices.com/',
    technologies: ['Angular.js', 'Node.js', 'Postgresql', 'JavaScript', 'AWS', 'Docker'],
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
