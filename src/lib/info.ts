export interface ExperienceItem {
  company: string;
  position: string;
  startYear: number;
  endYear?: number;
  highlights: string[];
  location: string;
}

export type ExperienceSkillCategory =
  | 'Backend'
  | 'UI / UX'
  | 'CI / CD'
  | 'Databases'
  | 'GCE'
  | 'AWS'
  | 'IaC'
  | 'Misc';

export interface Skills {
  category: ExperienceSkillCategory;
  items: string[];
}

export interface Info {
  skills: Skills[];
  experience: ExperienceItem[];
}

export function getInfo(): Info {
  return {
    skills: [
      {
        category: 'Backend',
        items: [
          'Node.js',
          'TypeScript',
          'JavaScript',
          'Nest.js',
          'Express',
          'Fastify',
          'Python*',
          'C++*',
          'C#*'
        ]
      },
      {
        category: 'UI / UX',
        items: [
          'React',
          'Next.js',
          'Remix',
          'SolidJS',
          'Vue',
          'Svelte',
          'Astro',
          'TailwindCSS'
        ]
      },
      {
        category: 'Databases',
        items: [
          'MongoDB',
          'PostgreSQL',
          'MySQL',
          'Redis',
          'BigQuery',
          'Redshift',
          'Looker'
        ]
      },
      {
        category: 'CI / CD',
        items: [
          'Github Actions',
          'Gitlab',
          'CircleCI',
          'Jenkins',
          'TravisCI',
          'jest',
          'Puppeteer'
        ]
      },
      {
        category: 'GCE',
        items: [
          'Run',
          'AppEngine',
          'API Gateway',
          'Functions',
          'Tasks',
          'Pub/Sub',
          'Storage'
        ]
      },
      {
        category: 'AWS',
        items: ['Functions', 'Fargate', 'EC2', 'Route53', 'S3', 'Kubernetes']
      },
      {
        category: 'IaC',
        items: [
          'Terraform',
          'CloudFormation',
          'Pulumi',
          'Serverless',
          'CDK',
          'Ansible',
          'Puppet'
        ]
      },
      {
        category: 'Misc',
        items: [
          'Monorepo Tooling',
          'A/B Testing',
          'Feature Flag Testing',
          'Blue/Green Deployments',
          'Google Analytics',
          'PostHog',
          'Scrum',
          'Kanban',
          'Surfing'
        ]
      }
    ],
    experience: [
      {
        company: 'AndAlways.com',
        position: 'CTO',
        location: 'San Diego, CA',
        startYear: 2019,
        highlights: [
          'Created, designed, and developed e-commerce brand which has sold customizable art to over 200K customers',
          'Designed & developed GraphQL based E-Commerce API gateway using Node.js (Typescript) on Nest.js, MongoDB, Redis, React (Next.js)',
          'Event-driven and TCP based micro-services using Node.js TypeScript using Fastify, CQRS, and messaging (using CloudTasks and Pub/Sub) - including but not limited to: Chromium based image generation, electron based desktop app for printing image files, DIY analytics & a/b testing suite, automatic marketing creative generator, etc',
          'Hired team of full-stack & front-end engineers to focus on growth & A/B testing and revenue optimization'
        ]
      },
      {
        company: 'DapperToast',
        position: 'CTO',
        location: 'San Diego, CA',
        startYear: 2015,
        endYear: 2019,
        highlights: [
          'Focused on system stability and load time optimization for serving 10-30K concurrent users at any given time',
          'Designed & developed CMS based on a Node.js (TypeScript) GraphQL API and React',
          'Brought hosting costs down from $14K a month to below $1K',
          'Hired & managed team of full-stack engineers to focus on A/B testing layouts',
          'Built ad stack to optimize high paying fill-rates with ad-sense fallbacks',
          'Maintained infrastructure & dev-ops roles personally',
          'Created headline A/B testing tools to increase page engagement'
        ]
      },
      {
        company: 'Zeeto',
        position: 'Lead Engineer',
        location: 'San Diego, CA',
        startYear: 2011,
        endYear: 2015,
        highlights: [
          'First engineer employee as a Lead Developer to maintain job listing website JobFuse.com',
          "Developed Good Enough Recommendation (GER) engine POC for to generate leads for additional source of revenue based on visitor's interests",
          'Started on PHP & MySQL, then transitioned into Python for data modeling & node.js for user facing websites',
          'Hired and managed roughly 30 developers, designers, dev-ops, and data science engineers',
          'Worked directly CEO, CMO, CRO and other executives',
          'Developed landing page A/B testing proxy service that gave a 30% lift in revenue immediately',
          'Implemented Scrum/Kanban, CI/CD using Github/Jenkins, EC2 with custom provisioning & deployment tools, etc',
          'Focused on system uptime and latency to maintain up to 100K concurrent users at any given time'
        ]
      },
      {
        company: 'Applus RTD',
        position: 'Developer',
        location: 'Bakersfield, CA',
        startYear: 2009,
        endYear: 2011,
        highlights: [
          'Developed custom GIS mapping software for Exxon & Chevron which mapped out pipeline x-ray inspections with GPS position, images, and field tech reports',
          "Developed CMS for clients to log into and view pipeline inspection status giving them the ability to know when and welds we're checked and determine when they should be re-scanned with automatic field technician deployment"
        ]
      },
      {
        company: 'Ugly Duck Marketing',
        position: 'Developer',
        location: 'Bakersfield, CA',
        startYear: 2007,
        endYear: 2009,
        highlights: [
          'Managed team of designers to create local business websites as contract work',
          'Built restaurant delivery website like GrubHub, etc where customers can order food online for delivery',
          'Restaurants would receive faxes with live call-fallback in real-time on order and customers would get notified of delivery states'
        ]
      }
    ]
  };
}
