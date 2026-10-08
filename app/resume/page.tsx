import Nav from "../components/Nav";
import Footer from "../components/Footer";

const experience = [
  {
    role: "UX/UI Designer",
    company: "Grid Dynamics",
    location: "New York, NY",
    dates: "August 2025 - Present",
    bullets: [
      "Lead the design of end-to-end user-agent interactions for a cloud capacity planning tool used by Demand Planners at a Fortune 5 company, consolidating 3 spreadsheets and 2 dashboards into one system and cutting user task time by up to 80% so far (10 → 2 min per plan).",
      "Design wireframes, define user workflows, and run usability tests, then partner with Engineers to build high-fidelity prototypes; work closely with Product Managers to shape the roadmap by advocating for users and the business.",
      "Pioneer the build and maintenance of a shared design system of reusable components and interactions that scale the product experience across multiple tools; collaborate with cross-functional teams to design cross-product flows that serve multiple user groups.",
    ],
  },
  {
    role: "UX Designer",
    company: "Philips Experience Design",
    location: "Remote",
    dates: "July 2022 - July 2023",
    bullets: [
      "Designed an AI-powered prenatal screening tool from first sketch to pilot-ready delivery, defining how Clinicians and community health workers could conduct screening to identify high-risk pregnancies and support planned pregnancies and delivery.",
      "Delivered an end-to-end service blueprint scalable for 5 user groups across 2 geographies, integrating user needs, business requirements, and regional medical regulations into a structured clinical workflow. Proposed an ergonomic mobile cart design to accompany the screening technology, projected to enable health workers to conduct 2x more scans per day.",
      "Led field research, prototype iteration, A/B testing, and usability testing with Researchers, Business Leads, Clinicians, and ML Engineers.",
    ],
  },
  {
    role: "Junior Design Strategist",
    company: "Designit",
    location: "New York, NY",
    dates: "September 2021 - June 2022",
    bullets: [
      "Enhanced the customer experience for a global B2B hygiene company through user research and co-creation workshops; collaborated with a multidisciplinary team to develop an experience strategy and scalable journey across 6 geographies and 3 industries.",
      "Led a brand strategy initiative for a nonprofit improving technology access for the visually impaired; conducted user interviews, client workshops, and opportunity analysis to develop an outreach solution projected to grow the user base by 4,000 within 3 years.",
    ],
  },
  {
    role: "Product Design Intern",
    company: "Uncommon Goods",
    location: "Brooklyn, NY",
    dates: "June 2021 - September 2021",
    bullets: [
      "Designed 3 consumer products from concept to CAD, partnering with manufacturers to launch 1 at a projected 40% gross margin.",
    ],
  },
  {
    role: "Design Intern",
    company: "Designit",
    location: "Bangalore, India",
    dates: "June 2020 - December 2020",
    bullets: [
      "Produced a report on “The Impact of the Pandemic on the Beauty and Wellness Industry” through qualitative and quantitative research, including 15+ user and expert interviews and 50+ survey responses; presented actionable design solutions to clients.",
    ],
  },
];

const education = [
  {
    school: "New York University",
    location: "New York, NY",
    dates: "May 2025",
    degree:
      "M.S. Integrated Design & Media, Recipient of the Merit Scholarship",
    coursework:
      "Relevant coursework: User Experience Design, Interaction Design, Accessibility, Human-Computer Interaction",
  },
  {
    school: "Pratt Institute",
    location: "New York, NY",
    dates: "May 2021",
    degree: "Bachelor of Industrial Design, Graduated with Honors",
    coursework:
      "Relevant coursework: Product Design, Visual Design, Psychology, Sustainability",
  },
];

const leadership = [
  {
    title: "ADPList Mentor",
    dates: "October 2026 - Present",
    bullets: [
      "Mentor early-career designers through portfolio reviews, case-study storytelling, and interview prep for technically complex roles.",
    ],
  },
  {
    title: "Adjunct Professor, NYU",
    dates: "May 2025 - July 2025",
    bullets: [
      "Taught an “Intro to UX Design” bootcamp, covering design principles, methodologies, tools, and AI design strategies.",
    ],
  },
  {
    title: "AR Training Experience for Workers with Autism",
    dates: "October 2023 - May 2025",
    bullets: [
      "Developed an AR-based learning tool for a nonprofit kitchen’s workers with autism, increasing user engagement and retention.",
    ],
  },
];

const skills = [
  {
    category: "Tools",
    items: [
      "Figma",
      "Adobe Creative Suite (Photoshop, Illustrator)",
      "Miro",
      "HTML/CSS",
      "Google Workspace",
      "AI prototyping tools (Gemini, Claude Design, Claude Code, Google AI Studio, Google Stitch, Figma Make)",
    ],
  },
  {
    category: "Design",
    items: [
      "Agent & AI Interaction Design",
      "Human-AI Workflow Design",
      "Product Strategy",
      "Wireframing",
      "High-Fidelity Prototyping",
      "User Flows",
      "Information Architecture",
      "Responsive Design",
      "Accessibility (WCAG)",
      "Inclusive Design",
      "Design Systems",
      "Design Handoff",
      "Cross-Functional Collaboration",
      "Stakeholder Management",
      "Data Visualization",
    ],
  },
  {
    category: "Research",
    items: [
      "Qualitative & Quantitative User Research Methods",
      "Domain Immersion & Field Research",
      "Co-Creation Workshops",
      "Usability Testing",
      "A/B Testing",
      "Insight Analysis",
    ],
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-merriweather font-bold"
      style={{
        fontSize: "24px",
        color: "#275F55",
        borderBottom: "2px solid #275F55",
        paddingBottom: "8px",
        marginBottom: "24px",
      }}
    >
      {children}
    </h2>
  );
}

export default function Resume() {
  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      <style>{`
        @media (max-width: 767px) {
          h1.resume-name { font-size: 32px !important; }
        }
      `}</style>

      <Nav />

      <div
        style={{ maxWidth: "1120px", margin: "0 auto" }}
        className="px-4 md:px-12 pt-12 md:pt-[80px] pb-20 md:pb-[160px]"
      >
        {/* Download */}
        <div className="flex justify-start">
          <a
            href="/resume.pdf"
            download
            className="font-avenir"
            style={{
              fontSize: "14px",
              color: "#275F55",
              border: "2px solid #275F55",
              borderRadius: "20px",
              padding: "8px 16px",
              marginBottom: "24px",
              textDecoration: "none",
            }}
          >
            Download PDF
          </a>
        </div>

        {/* Header */}
        <div className="pb-4 md:pb-6">
          <h1
            className="font-merriweather font-bold resume-name"
            style={{ fontSize: "48px", color: "#000" }}
          >
            Ayushi Shah
          </h1>
          <p
            className="font-avenir"
            style={{ fontSize: "20px", color: "#275F55", marginTop: "4px" }}
          >
            UX Designer | Strategist
          </p>
          <p
            className="font-avenir"
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.7,
              marginTop: "16px",
              maxWidth: "560px",
            }}
          >
            UX Designer with 3+ years of experience crafting user-centered and
            research-driven design solutions. Skilled in cross-functional
            collaboration and applying design methods across industries to
            enhance product impact for both businesses and users.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-12 pt-2 md:pt-4">
          <section>
            <SectionHeading>Experience</SectionHeading>
            <div className="flex flex-col gap-8">
              {experience.map((job) => (
                <div key={job.company + job.role + job.dates}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <p
                      className="font-merriweather font-bold"
                      style={{ fontSize: "18px", color: "#275F55" }}
                    >
                      {job.company}
                    </p>
                    <p
                      className="font-avenir"
                      style={{ fontSize: "14px", color: "#555" }}
                    >
                      {job.dates}
                    </p>
                  </div>
                  <p
                    className="font-avenir"
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      marginTop: "2px",
                    }}
                  >
                    {job.role}
                    <span
                      style={{
                        fontWeight: 300,
                        color: "#555",
                        fontSize: "14px",
                      }}
                    >
                      {" · "}
                      {job.location}
                    </span>
                  </p>
                  <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="font-avenir"
                        style={{
                          fontSize: "15px",
                          fontWeight: 300,
                          lineHeight: 1.7,
                          marginBottom: "8px",
                        }}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading>Education</SectionHeading>
            <div className="flex flex-col gap-6">
              {education.map((ed) => (
                <div key={ed.school}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <p
                      className="font-merriweather font-bold"
                      style={{ fontSize: "18px", color: "#275F55" }}
                    >
                      {ed.school}
                    </p>
                    <p
                      className="font-avenir"
                      style={{ fontSize: "14px", color: "#555" }}
                    >
                      {ed.dates}
                    </p>
                  </div>
                  <p
                    className="font-avenir"
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      marginTop: "2px",
                    }}
                  >
                    {ed.degree}
                    <span
                      style={{
                        fontWeight: 300,
                        color: "#555",
                        fontSize: "14px",
                      }}
                    >
                      {" · "}
                      {ed.location}
                    </span>
                  </p>
                  <p
                    className="font-avenir"
                    style={{
                      fontSize: "15px",
                      fontWeight: 300,
                      lineHeight: 1.7,
                      marginTop: "6px",
                    }}
                  >
                    {ed.coursework}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading>Leadership Experience</SectionHeading>
            <div className="flex flex-col gap-8">
              {leadership.map((item) => (
                <div key={item.title + item.dates}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <p
                      className="font-merriweather font-bold"
                      style={{ fontSize: "18px", color: "#275F55" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="font-avenir"
                      style={{ fontSize: "14px", color: "#555" }}
                    >
                      {item.dates}
                    </p>
                  </div>
                  <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="font-avenir"
                        style={{
                          fontSize: "15px",
                          fontWeight: 300,
                          lineHeight: 1.7,
                          marginBottom: "8px",
                        }}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section>
            <SectionHeading>Skills</SectionHeading>
            <div className="flex flex-col gap-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <p
                    className="font-merriweather font-bold"
                    style={{
                      fontSize: "16px",
                      color: "#275F55",
                      marginBottom: "8px",
                    }}
                  >
                    {group.category}
                  </p>
                  <ul
                    style={{
                      paddingLeft: "0",
                      listStyle: "none",
                    }}
                  >
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="font-avenir"
                        style={{
                          fontSize: "14px",
                          fontWeight: 300,
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
