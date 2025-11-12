import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Calvin",
  lastName: "Waldheim",
  name: `Calvin Waldheim`,
  role: "Senior Product Manager",
  avatar: "/images/avatar-square.jpg",
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
  headline: <>Senior Product Manager</>,
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
      Turning complexity into clarity — leading teams from insight to impact.
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
        company: "ERIKS N.V.",
        timeframe: "Apr 2022 - Mar 2025",
        role: "Product Lead - AI, IoT & Digital Asset Management Portfolio",
        achievements: [
          <>
            Defined and executed the AI- and IoT-driven product strategy consolidating five legacy tools into one scalable SaaS platform adopted across Europe.
          </>,
          <>
            Introduced ML-based fault prediction and real-time asset intelligence aligned with ISO 17359, reducing downtime and improving client performance visibility.
          </>,
          <>
            Led redesign of the Product-Platform-Data operating model and introduced GenAI delivery frameworks to standardize cross-functional collaboration.
          </>,
          <>
            Organized ERIKS' first Generative AI Hackathons (2023-2024) and coached teams on rapid prototyping using LLMs and vector stores.
          </>,
          <>
            Managed a team of eight engineers and designers, driving measurable adoption growth through iterative roadmap execution and data-driven prioritization.
          </>,
        ],
        images: [], // placeholder for future work visuals
      },
      {
        company: "ERIKS N.V.",
        timeframe: "Aug 2021 - Apr 2022",
        role: "Lead Product Manager - Internal Knowledge Platform",
        achievements: [
          <>
            Co-created and led ERIKS' internal knowledge platform used by 900+ employees to centralize service expertise and cut quotation turnaround from days to minutes.
          </>,
          <>
            Defined product strategy, OKRs, and roadmap, shipping bi-weekly releases and implementing structured discovery and feedback cycles.
          </>,
          <>
            Mentored PMs in evidence-based prioritization and cross-functional delivery practices.
          </>,
        ],
        images: [], // optional: screenshots or platform visuals
      },
      {
        company: "ERIKS N.V.",
        timeframe: "Sep 2018 - Aug 2021",
        role: "Senior Product Manager - Digital Innovation & New Venture Portfolio",
        achievements: [
          <>
            Progressed from individual 0-to-1 initiatives to owning ERIKS' global innovation portfolio across Europe, the Americas, and APAC.
          </>,
          <>
            Co-created the company's innovation framework adopted group-wide, enabling faster validation and scaling of digital ventures in IoT, data, and e-commerce.
          </>,
          <>
            Partnered directly with the Board on strategic programs, KPIs, and investment decisions.
          </>,
        ],
        images: [], // keep for potential framework graphics
      },
      {
        company: "Gaia Growth, Amsterdam",
        timeframe: "Feb 2021 - Mar 2023",
        role: "Co-Founder & Product Lead",
        achievements: [
          <>
            Led product strategy for IoT automation software helping vertical farms monitor and control growing environments.
          </>,
          <>
            Validated product-market fit through 180+ interviews across Europe as part of the YES!Delft accelerator.
          </>,
          <>
            Built proof-of-concept automation using AWS IoT, MQTT, and Shelly hardware, applying lean startup methods to test market and technical feasibility.
          </>,
          <>
            Discovered industry bottlenecks in energy and hardware costs, leading to an evidence-based decision to pivot early, with insights later validated industry-wide.
          </>,
        ],
        images: [], // optional: prototypes or IoT visuals
      },
      {
        company: "Zamro (acquired by ERIKS N.V.)",
        timeframe: "Feb 2018 - Sep 2018",
        role: "Digital Marketing Lead - DACH",
        achievements: [
          <>
            Managed one-third of a 5M EUR annual ad budget with automation-first, data-driven infrastructure achieving 3-4x ROAS in the DACH region.
          </>,
          <>
            Built scalable performance marketing pipelines later integrated into ERIKS Digital's growth stack.
          </>,
        ],
        images: [], // placeholder for potential campaign visuals
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


