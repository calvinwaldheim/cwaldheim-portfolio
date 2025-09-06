import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Calvin",
  lastName: "Waldheim",
  name: `Calvin Waldheim`,
  role: "Product Manager",
  avatar: "/images/avatar.jpeg",
  email: "calvin.waldheim@gmail.com",
  location: "Europe/Amsterdam", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English (C2)", "German (Native)","Dutch (B1)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/calvinwaldheim",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/calvin-waldheim",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: `/api/og/generate?title=${encodeURIComponent(`${person.name}'s Portfolio`)}`,
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Product Manager</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Recent work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Vision‑to‑execution PM for complex B2B systems—platform consolidation, PMOps, and AI‑assisted workflows.
      <br /> I turn abstract ideas into shippable strategy for IoT and platform products—pragmatic, value‑driven, no theater.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Amsterdam with 8+ years experience in IoT, platform strategy, and PMOps`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/2Dt9mWKhMhx6YRz79",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I turn ambiguous problems into clear strategies and shipped outcomes. I've led a 5→1 platform 
        consolidation over three years, scaled monitoring 10–100× across 500 enterprise accounts, and 
        rolled out Jira Align + Jira Product Discovery.
        <br /><br />
         I'm a team‑first builder and strong presenter 
        who avoids innovation theater and focuses on work that matters.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ERIKS Digital & ERIKS N.V.",
        timeframe: "Aug 2021 – Mar 2025",
        role: "Product Manager, IoT & Asset Management",
        achievements: [
          <>
            Defined and executed a 3-year IoT strategy consolidating 5 legacy platforms into one, 
            migrating strategic customers and reducing platform costs to target levels.
          </>,
          <>
            Increased asset monitoring coverage 10–100x for 500+ top customers by implementing 
            scalable QR code asset tracking programs.
          </>,
          <>
            Launched 2 highly technical IoT features: system status dashboards and advanced 
            industrial pump failure analysis for customer portals.
          </>,
          <>
            Drove PMOps maturity by rolling out Jira Align & Jira Product Discovery, coaching 
            PMs on customer discovery practices.
          </>,
        ],
        images: [],
      },
      {
        company: "ERIKS Digital & ERIKS N.V.",
        timeframe: "Sept 2019 – Aug 2021",
        role: "Product Manager, ERIKS Wiki & Knowledge Platform",
        achievements: [
          <>
            Co-created and led development of ERIKS Wiki — a 360° graph-based product catalog 
            integrating 1.5M+ SKUs into a unified product database for the first time.
          </>,
          <>
            Designed graph-based data architecture connecting products, specifications, 
            applications, and supplier relationships in a searchable knowledge platform.
          </>,
          <>
            Managed cross-functional team including data engineers, UX designers, and domain 
            experts to transform fragmented product data into unified customer experience.
          </>,
          <>
            Established data governance processes and product taxonomy standards used 
            across all ERIKS digital products.
          </>,
        ],
        images: [],
      },
      {
        company: "ERIKS Digital & ERIKS N.V.",
        timeframe: "Sept 2018 – Sept 2019",
        role: "Digital Innovation Manager",
        achievements: [
          <>
            Rolled out ERIKS' Edison Innovation Framework across Europe and Asia-Pacific; 
            owned global reporting for innovation pipeline to the ERIKS Board.
          </>,
          <>
            Drove ideation-to-scale of digital products, supporting spin-offs and market launches.
          </>,
          <>
            Hosted and led supplier innovation competition, piloting cutting-edge projects such as 
            AI-driven knowledge extraction from customer emails.
          </>,
          <>
            Established innovation processes and metrics that became standard across ERIKS' 
            global digital transformation initiatives.
          </>,
        ],
        images: [],
      },
      {
        company: "ERIKS (Corporate Startup Zamro)",
        timeframe: "Sept 2017 – Sept 2018",
        role: "Performance Marketer",
        achievements: [
          <>
            Managed €1M+ digital ad budget across 5M+ ad creatives covering 1M SKUs.
          </>,
          <>
            Built highly automated, data-driven performance marketing stack across Google, 
            Amazon, Affiliate & Social platforms.
          </>,
          <>
            Delivered scalable acquisition infrastructure for B2B eCommerce.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Amsterdam School of International Business, Amsterdam",
        description: <>B.B.A. in International Business & Management Studies (Aug 2013 – Jun 2017). Focus: Financial Management, Real Estate Finance, Venture Capital.</>,
      },
      {
        name: "Bilgi University, Istanbul",
        description: <>Exchange Semester, International Business & Management (2016). Enhanced global perspective through immersive study abroad experience.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Expertise",
    skills: [
      {
        title: "Product Management & Strategy",
        description: (
          <>Vision → strategy → roadmap execution, discovery practices, prioritization & trade-offs, cross-functional leadership, and enterprise migrations & change management.</>
        ),
        tags: [
          {
            name: "Product Strategy",
            icon: "star",
          },
          {
            name: "Discovery",
            icon: "search",
          },
          {
            name: "Roadmapping",
            icon: "map",
          },
          {
            name: "Stakeholder Mgmt",
            icon: "users",
          },
        ],
        images: [],
      },
      {
        title: "PMOps & Atlassian Ecosystem",
        description: (
          <>Jira Align portfolio planning, Jira Product Discovery for ideation & evidence, discovery coaching, async communication, and AI governance across product/data/platform teams.</>
        ),
        tags: [
          {
            name: "Jira Align",
            icon: "grid",
          },
          {
            name: "Jira Product Discovery",
            icon: "lightbulb",
          },
          {
            name: "PMOps",
            icon: "cog",
          },
          {
            name: "Confluence",
            icon: "document",
          },
        ],
        images: [],
      },
      {
        title: "IoT & Platform Engineering",
        description: (
          <>Industrial IoT systems, asset management platforms, system consolidation, monitoring & analytics, and collaboration with engineering/data teams on technical products.</>
        ),
        tags: [
          {
            name: "IoT Platforms",
            icon: "chip",
          },
          {
            name: "Asset Management",
            icon: "package",
          },
          {
            name: "Platform Consolidation",
            icon: "layers",
          },
          {
            name: "System Integration",
            icon: "link",
          },
        ],
        images: [],
      },
      {
        title: "Tools & Technologies",
        description: (
          <>Figma, Miro, Cursor AI, LLMs, low-code development, React basics, Firebase, Swift prototyping, and performance marketing automation.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "AI/LLMs",
            icon: "ai",
          },
          {
            name: "Swift",
            icon: "swift",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Thoughts on product and technology",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Product and development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Add your own images here
  images: [
    {
      src: "/images/gallery/IMG_0597.JPG",
      alt: "SAM",
      orientation: "horizontal",
    },
    
    {
      src: "/images/gallery/IMG_0599.JPG",
      alt: "SAM",
      orientation: "horizontal",
    },
    
    {
      src: "/images/gallery/sam.mp4",
      alt: "SAM",
      orientation: "vertical",
    },
    
    {
      src: "/images/gallery/IMG_0619.JPG",
      alt: "SAM",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };


