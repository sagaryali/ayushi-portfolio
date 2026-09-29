import Nav from "../components/Nav";
import Footer from "../components/Footer";

const experience = [
  {
    role: "UX/UI Designer",
    company: "Grid Dynamics",
    dates: "August 2025 - Present",
    bullets: [
      "Collaborating with Product Leads and Engineers at a leading technology company to redesign the cloud capacity planning experience for AI customers. Designing and testing end-to-end user journeys and high-fidelity mockups to create a unified, intelligent workflow that replaces fragmented dashboards and spreadsheets. Reduced planning time by 80%, with ongoing efforts to further enhance usability and intelligent decision-making capabilities",
    ],
  },
  {
    role: "UX Designer",
    company: "Philips Healthcare",
    dates: "July 2022 - July 2023",
    bullets: [
      "Contributed to a Gates Foundation–funded project focused on reducing pregnancy-related mortality in underserved communities by designing an AI-powered prenatal screening tool; led field research, market analysis, prototype iteration, and usability testing in collaboration with Researchers, Business Leads, Clinicians, and ML Engineers. Delivered an end-to-end product experience scalable for 5 user groups across 2 geographies, integrating user needs, business requirements, and regional medical regulations",
    ],
  },
  {
    role: "UX Designer & Strategist",
    company: "Designit",
    dates: "September 2021 - June 2022",
    bullets: [
      "Enhanced the consumer experience for a global B2B hygiene company by implementing user research and facilitating co-creation workshops; collaborated with a multidisciplinary design team to develop an experience strategy and a scalable end-to-end journey focused on meeting buyer goals and fostering brand loyalty, scalable across 6 geographies and 3 industries",
      "Led a brand strategy initiative for a non-profit to improve access to technology for the visually impaired; conducted user interviews, client workshops, and analyzed opportunities to implement an outreach solution that projected a 4,000-user growth within 3 years",
      "Drove digital content strategies as part of the Global Marketing team, increasing the following by 33,648 users",
    ],
  },
  {
    role: "Designer & Strategist",
    company: "Designit",
    dates: "June 2020 - December 2020",
    bullets: [
      'Produced a visual report on "The Impact of the Pandemic on the Beauty and Wellness Industry" by gathering insights through qualitative and quantitative research, including 15+ user and expert interviews and 50+ survey responses; developed and presented actionable design solutions to elevate post-pandemic user experiences for relevant clients',
    ],
  },
];

const additionalExperience = [
  {
    role: "Adjunct Professor",
    company: "New York University",
    dates: "May 2025 - July 2025",
    bullets: [
      'Taught an "Intro to UX Design" course for high school students, covering design principles, methodologies, tools, and AI strategies',
    ],
  },
  {
    role: "UX Designer",
    company: "Luv Michael Granola (via New York University)",
    dates: "September 2023 - May 2025",
    bullets: [
      "Developed an AR-based learning tool for workers with autism for a non-profit kitchen, increasing user engagement and retention rates",
    ],
  },
];

const education = [
  {
    school: "New York University",
    dates: "May 2025",
    degree: "Master of Science,",
    program: "Integrated Design & Media",
    coursework:
      "Relevant coursework: User Experience Design, Strategy, Interaction Design, Accessibility, Human-Computer Interaction",
  },
  {
    school: "Pratt Institute",
    dates: "May 2021",
    degree: "Bachelor of Design,",
    program: "Industrial Design",
    coursework:
      "Relevant coursework: Product Design, Design Research, Visual Design, Sustainability",
  },
];

const skills = [
  {
    category: "Tools",
    items: [
      "Figma",
      "Adobe Creative Suite (Photoshop, Illustrator, XD)",
      "Miro",
      "Google Workspace",
      "AI prototyping tools (Google Gemini, Google AI Studio, Google Stitch, Figma Make, Claude)",
    ],
  },
  {
    category: "Design",
    items: [
      "Product Strategy",
      "Creative Problem Solving",
      "User Journey Mapping",
      "Ideation",
      "Prototyping",
      "Systems workflow mapping",
      "User Flows",
      "Information Architecture",
      "Visual Communication",
      "Accessibility Principles",
      "Inclusive Design",
      "Iconography & Visual Design",
    ],
  },
  {
    category: "Research",
    items: [
      "Qualitative & Quantitative User Research",
      "Co-Creation Workshops",
      "Usability Studies",
      "Analysis",
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
        <div
          className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 pb-10 md:pb-14"
          style={{ borderBottom: "2px solid #275F55" }}
        >
          <div>
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

          <div className="flex flex-col gap-2 md:items-end shrink-0">
            <a
              href="https://ayushidesigns.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-avenir"
              style={{
                fontSize: "15px",
                color: "#000",
                textDecoration: "underline",
              }}
            >
              ayushidesigns.com
            </a>
            <a
              href="https://www.linkedin.com/in/ayushi-shah0607/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-avenir"
              style={{
                fontSize: "15px",
                color: "#000",
                textDecoration: "underline",
              }}
            >
              linkedin.com/in/ayushi-shah0607
            </a>
            <a
              href="mailto:ayushi0607@gmail.com"
              className="font-avenir"
              style={{
                fontSize: "15px",
                color: "#000",
                textDecoration: "underline",
              }}
            >
              ayushi0607@gmail.com
            </a>
            <span
              className="font-avenir"
              style={{ fontSize: "15px", color: "#000" }}
            >
              +1 (347) 222 5833
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-12 pt-10 md:pt-14">
          <section>
            <SectionHeading>Experience</SectionHeading>
            <div className="flex flex-col gap-8">
              {experience.map((job) => (
                <div key={job.role + job.dates}>
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
            <SectionHeading>Additional Experience</SectionHeading>
            <div className="flex flex-col gap-8">
              {additionalExperience.map((job) => (
                <div key={job.role + job.dates}>
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
                  <div className="flex justify-between items-baseline gap-2">
                    <p
                      className="font-merriweather font-bold"
                      style={{ fontSize: "16px", color: "#275F55" }}
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
                      fontSize: "15px",
                      fontWeight: 500,
                      marginTop: "2px",
                    }}
                  >
                    {ed.degree}
                    <br />
                    {ed.program}
                  </p>
                  <p
                    className="font-avenir"
                    style={{
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: 1.6,
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
