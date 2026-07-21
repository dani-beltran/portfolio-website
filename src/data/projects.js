import deckuGif from '../assets/decku/deckudb-demo.gif';
import kws0 from '../assets/kws/kws0.webp';
import kws1 from '../assets/kws/kws1.avif';
import kws2 from '../assets/kws/kws2.webp';
import kws3 from '../assets/kws/kws3.webp';
import kws4 from '../assets/kws/kws4.webp';
import layerzGif from '../assets/lz/layerz-demo.gif';
import layerzProductGif from '../assets/lz/layerz-product-demo.gif';
import nodescriptGif from '../assets/ns/nodescript-demo.gif';
import deckuImage from '../assets/decku/screenshot-deckudb.png';
import layerzImage2 from '../assets/lz/screenshot-layerz-2.png';
import nodescriptImage from '../assets/ns/screenshot-nodescript.jpg';
import nodescriptImage2 from '../assets/ns/screenshot-nodescript-2.png';
import swDemo from '../assets/sw/sw-demo.png';
import swAd from '../assets/sw/sw-ad.png';
import swDashboard from '../assets/sw/sw-dashboard.png';
import swDocs from '../assets/sw/sw-docs.png';
import swNewsletter from '../assets/sw/sw-newsletter.png';
import swSubs from '../assets/sw/sw-subs.png';

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
    dateRange: 'Oct 2025 - Jun 2026',
    shortDescription:
      'A comprehensive database for Steam Deck game compatibility, helping gamers find the best experiences for their portable gaming device.',
    description: `DeckuDB is a comprehensive database aggregating community reports on Steam Deck game compatibility. The project emerged from the need for centralized, accurate, community-driven information about which games work best on Valve's handheld gaming device.

The platform features a user-friendly interface that allows gamers to search through thousands of game titles, check compatibility ratings, filter by performance metrics, and read community reviews. Each game entry includes users provided information about performance expectations, control schemes, and any special configurations needed.

Built with modern web technologies, DeckuDB emphasizes fast load times and an intuitive user experience. The database is continuously updated by a web crawler, ensuring that information remains current as new games are released and the Steam Deck software evolves.`,
    implementation: `In this project, I focused on product architecture, data automation, and performance for a community-driven platform:

  **Platform Architecture** Designed and delivered a full-stack Vue + Node.js + MongoDB application optimized for fast search and a clean browsing experience across desktop and mobile.

  **Data Acquisition Pipeline** Built and maintained an automated crawler pipeline that continuously collects and normalizes community reports data from multiple sources to keep the catalog current.

  **Search & Discovery** Implemented responsive filtering and debounced search to help users quickly find relevant titles and performance reports.

  **Data Modeling & Performance** Structured MongoDB collections, indexing strategy and caching for efficient querying of large, evolving game metadata and user-generated reports.

  **Reliability & Delivery** Containerized services with Docker and set up CI/CD workflows to ship updates safely and maintain consistent runtime environments.

  **User Experience** Added SEO-friendly routing, lazy loading, and robust error handling to improve discoverability, performance, and day-to-day usability.`,
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
    implementation: `My work on LayerZ spans multi-tenant SaaS architecture, AI product capabilities, and production-grade platform operations:

  **Architecture & Product Delivery** Architected core frontend and backend services with Vue, TypeScript, Node.js, and Express to support rapid iteration of AI-driven e-commerce features.

  **AI Campaign Engine** Built and evolved an AI code-generation workflow that enables non-technical users to create personalized campaign assets through natural-language prompts.

  **AI Sales Agent** Implemented multi-step reasoning pipelines using LangChain, LangGraph, MCP, and RAG to automate customer engagement and sales actions.

  **Security & Multi-Tenancy** Implemented OAuth2-based SSO and RBAC to enforce tenant isolation and secure access across customer accounts.

  **Real-time Analytics** Designed analytics ingestion and reporting flows backed by Imply Polaris (Apache Druid) for near real-time business insights.

  **Infrastructure & Reliability** Led Docker-based deployments, CI/CD automation, and Terraform-driven AWS infrastructure management for repeatable, resilient releases.

  **Quality & Integrations** Added Playwright and Vitest coverage, rate limiting and DDoS protections, and webhook integrations for external ecosystem connectivity.`,
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
    implementation: `My work on NodeScript focused on making complex automation workflows accessible, secure, and scalable for non-technical users:

  **Workflow Platform Architecture** Designed and delivered no-code workflow platform core features using Vue, TypeScript, Node.js, and MongoDB with a focus on extensibility.

  **Visual Builder Experience** Built key capabilities in the node-based editor, including smooth graph interactions and configuration flows that reduced friction for workflow creation.

  **Execution Engine** Improved backend orchestration patterns to support concurrent pipeline runs, execution state management, and reliable endpoint-triggered workflows.

  **Collaboration** Added workflow versioning and real-time collaboration primitives to support team-based authoring and safer iterative changes.

  **Security & Operational Controls** Implemented sandboxed execution, rate limiting, and a credit-based control model to improve tenant safety and cost management.

  **Observability** Integrated Prometheus and Grafana metrics to monitor runtime health, usage patterns, and system performance under load.`,
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
    id: 'smartwall',
    name: 'SmartWall',
    type: ProjectType.Work,
    dateRange: 'Jul 2017 - Mar 2022',
    shortDescription:
      'Multi-tenant SaaS platform for digital advertising and subscriptions, scaled through real-time analytics, secure SSO, and resilient cloud infrastructure.',
    description: `SmartWall is an AI-powered, dynamic paywall technology designed for online media and publishers. It uses machine learning to personalize user payment experiences, allowing readers to unlock single articles through micropayments or seamlessly transition into subscriptions.

  The SmartWall platform evaluates user behavior, reading context, and engagement data in real-time to optimize how paywalls are presented.

  Its core features include dynamic paywall personalization, article-level micropayments, and subscription conversion optimization.

  Founded in Lausanne, Switzerland, the company and its technology were acquired by the subscription management firm ASMIQ in 2020.

  SmartWall also operated as a multi-tenant SaaS platform focused on digital advertising operations, subscription management, and customer analytics. The product served more than 100 customers and supported over 1 million daily visitors, requiring strong reliability, secure tenancy boundaries, and rapid feature delivery.

  I led development in a remote-first Agile environment with a core team of 3 engineers, driving rapid product iterations and cross-functional execution. Following acquisition, I also led the post-acquisition handoff of SwissPay's SmartWall product into ASMIQ's infrastructure and platform ecosystem.`,
    implementation: `My work on SmartWall spanned architecture, platform scaling, infrastructure modernization, and team leadership:

**Architecture & Scale** Architected and scaled a multi-tenant SaaS platform built with Node.js, React, and PostgreSQL to support high traffic and customer growth while keeping delivery velocity high.

**Infrastructure** Eliminated manual infrastructure toil through a zero-downtime migration to Infrastructure as Code with Terraform on AWS.

**Real-time Analytics** Built a real-time analytics pipeline handling millions of daily events using Apache Kafka and Apache Druid.

**Codebase Quality** Led a JavaScript to TypeScript migration, improving maintainability, code quality, and onboarding speed for new engineers.

**Security** Improved platform security by implementing OAuth2-based SSO and RBAC for multi-tenant access control.

**Payments & Billing** Integrated Stripe and PayPal, and built SaaS billing management capabilities.

**Post-Acquisition Integration** Architected and delivered integration of ASMIQ's subscription platform into SmartWall as part of the product handoff.

**Engineering Leadership** Grew and managed an engineering team of 5, leading sprint planning, code reviews, and technical hiring.`,
    images: [
      {
        url: swDemo,
        alt: 'SmartWall demo',
        displayDuration: 3_000,
      },
      {
        url: swSubs,
        alt: 'SmartWall subscriptions',
        displayDuration: 3_000,
      },
      {
        url: swAd,
        alt: 'SmartWall ad management',
        displayDuration: 3_000,
      },
      {
        url: swNewsletter,
        alt: 'SmartWall newsletter tools',
        displayDuration: 3_000,
      },
      {
        url: swDashboard,
        alt: 'SmartWall dashboard',
        displayDuration: 3_000,
      },
      {
        url: swDocs,
        alt: 'SmartWall documentation',
        displayDuration: 3_000,
      },
    ],
    technologies: [
      'Node.js',
      'React',
      'PostgreSQL',
      'AWS',
      'Terraform',
      'Kafka',
      'Druid',
      'Redis',
      'Datadog',
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

The platform streamlines the process of verifying a parent's identity and obtaining their permission for children to access various online features. By providing a unified, secure, and compliant solution, KWS enables developers to focus on creating engaging content while ensuring the safety and privacy of their youngest users.

Originally developed by the British "kidtech" startup SuperAwesome, KWS became a core asset of Epic Games following a corporate acquisition`,
    implementation: `My work on KWS focused on scaling a compliance-critical platform while improving security, reliability, and global usability:

  **Platform Reliability** Helped operate and evolve a high-availability Node.js platform handling parental consent and age-gate workflows for major gaming publishers.

  **Consent Flow Engineering** Built and maintained backend workflows for identity and consent processing, including integrations with third-party verification providers.

  **Security & Compliance** Implemented and maintained controls aligned with COPPA and GDPR-K, with strict handling requirements for sensitive user and guardian data.

  **Global Product Delivery** Improved localized parent and developer experiences, enabling regional rollout and smoother compliance journeys across markets.

  **Data Integrity** Worked with PostgreSQL-backed domain models to preserve consistency and auditability of consent records.

  **Infrastructure & Operations** Contributed to AWS + Docker delivery workflows, CI/CD pipelines, and production observability using Datadog and PagerDuty for fast incident response.`,
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
