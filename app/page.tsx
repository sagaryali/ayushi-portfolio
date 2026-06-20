"use client";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const tools: { name: string; description: string; src: string }[] = [
  { name: "Industrial Design", description: "B.D. in Industrial and Product Design", src: "/logos/logo1.png" },
  { name: "Design Research", description: "Design Research and Strategy for global clients", src: "/logos/logo2.png" },
  { name: "Philips x Gates", description: "Experience Designer for a Philips X Gates Foundation initiative", src: "/logos/logo3.png" },
  { name: "HCI", description: "M.S. in Human Computer Interaction and UX Design", src: "/logos/logo4.png" },
  { name: "Fortune 7", description: "UX Designer for a Fortune 7 client's AI and Cloud business", src: "/logos/logo5.png" },
];

const projects = [
  {
    slug: "ai-cloud-infrastructure",
    image: "/projects/ai-cloud-cover.png",
    title: "Designing workflows for AI + Cloud Infrastructure planning",
    timeline: "August 2025 – Present",
    capabilities: ["User Experience design", "Systems Design"],
    team: "Senior UX Designer (Ayushi Shah), Product Manager, Technical Program Manager, UX Research, Engineering",
    summary:
      "Consolidated a fragmented cloud capacity planning process into a unified workflow across stakeholders. The new system slashed planning time by 80% and minimized idle capacity, directly recovering $3.50 per chip per hour in previously lost revenue.",
  },
  {
    slug: "project-2",
    image: "/projects/project-2-cover.png",
    title: "Philips X Gates Foundation: AI for Maternal Healthcare",
    timeline: "August 2022 – July 2023",
    capabilities: ["Design research & strategy", "User Experience design", "Service Design"],
    team: "Design, Business, Engineering, Clinical across India, Europe, and the US",
    summary:
      "Developed an AI-powered ultrasound screening tool to help frontline workers identify high-risk pregnancies for women in underserved communities. The project underscores Philips' commitment to improving the lives of 2.5 billion people a year by 2030, including 400 million in underserved communities.",
  },
];

const roles = ["designer", "storyteller", "strategist"];

export default function Home() {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string } | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  // Cycle role word with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setRoleVisible(true);
      }, 400);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      <style>{`
        .role-word {
          display: inline-block;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .role-word.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .role-word.hidden {
          opacity: 0;
          transform: translateY(6px);
        }
        .tool-tooltip {
          position: absolute;
          bottom: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          background: #275F55;
          color: #FDF6EC;
          font-family: 'Nunito', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 999px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: translateX(-50%) translateY(4px);
          letter-spacing: 0.01em;
        }
        .tool-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #275F55;
        }
        .tool-circle:hover .tool-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .tool-circle {
          position: relative;
        }
      `}</style>

      <Nav />

      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 48px" }}>

        {/* Hero */}
        <section style={{ paddingTop: "120px", paddingBottom: "0" }}>
          <h1
            className="font-merriweather font-bold"
            style={{ fontSize: "48px", lineHeight: 1.2 }}
          >
            Hi, I&apos;m Ayushi, a{" "}
            <span
              className={`role-word ${roleVisible ? "visible" : "hidden"}`}
              style={{ color: "#275F55" }}
            >
              {roles[roleIndex]}
            </span>
          </h1>
          <p
            className="font-merriweather font-bold"
            style={{ fontSize: "28px", lineHeight: 1.4, marginTop: "32px", maxWidth: "760px" }}
          >
            I enjoy doing the messy work to craft meaningful impact for people,
            business, and the planet.
          </p>
        </section>

        {/* Tool logos */}
        {tools.length > 0 && (
          <section style={{ paddingTop: "72px", paddingBottom: "0" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="tool-circle"
                  style={{
                    width: "96px",
                    height: "96px",
                    borderRadius: "50%",
                    backgroundColor: "#FDF6EC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "6px 6px 14px rgba(0,0,0,0.12), -6px -6px 14px rgba(255,255,255,0.7)",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)", e.currentTarget.style.boxShadow = "10px 10px 22px rgba(0,0,0,0.16), -8px -8px 18px rgba(255,255,255,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)", e.currentTarget.style.boxShadow = "6px 6px 14px rgba(0,0,0,0.12), -6px -6px 14px rgba(255,255,255,0.7)")}
                >
                  <Image
                    src={tool.src}
                    alt={tool.name}
                    width={tool.src === "/logos/logo4.png" ? 36 : 52}
                    height={tool.src === "/logos/logo4.png" ? 36 : 52}
                    className="object-contain"
                  />
                  <div className="tool-tooltip">{tool.description}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Featured Projects */}
        <section style={{ paddingTop: "96px", paddingBottom: "120px" }}>
          <h2
            className="font-merriweather font-bold"
            style={{ fontSize: "48px", color: "#275F55", marginBottom: "40px" }}
          >
            Featured Projects
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
            {projects.map((project) => (
              <article key={project.slug}>
                <div style={{ display: "flex", gap: "48px", alignItems: "stretch", flexWrap: "wrap" }}>
                  {/* Cover image */}
                  <div style={{ flex: "1 1 420px", position: "relative", borderRadius: "4px", overflow: "hidden" }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right column: title, summary, CTA */}
                  <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3
                      className="font-merriweather font-bold"
                      style={{ fontSize: "36px", lineHeight: 1.2 }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="font-avenir"
                      style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.75, marginTop: "24px" }}
                    >
                      {project.summary}
                    </p>

                    <div style={{ marginTop: "28px" }}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="font-avenir inline-flex items-center justify-center gap-2 no-underline"
                        style={{
                          backgroundColor: "#275F55",
                          color: "#FDF6EC",
                          fontSize: "16px",
                          fontWeight: 750,
                          padding: "18px 28px",
                          borderRadius: "24px",
                          width: "65%",
                        }}
                      >
                        <Image src="/icons/lock.png" alt="" width={28} height={28} />
                        View case study
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Meta box */}
                <div
                  style={{
                    display: "flex",
                    gap: "120px",
                    flexWrap: "wrap",
                    marginTop: "40px",
                    padding: "24px 32px",
                    border: "1px solid #275F55",
                    borderRadius: "16px",
                  }}
                >
                  <div>
                    <p className="font-avenir" style={{ fontSize: "13px", fontWeight: 300, textTransform: "uppercase", letterSpacing: "0.08em", color: "#666" }}>
                      Timeline
                    </p>
                    <p className="font-avenir" style={{ fontSize: "15px", fontWeight: 500, marginTop: "4px" }}>
                      {project.timeline}
                    </p>
                  </div>
                  <div>
                    <p className="font-avenir" style={{ fontSize: "13px", fontWeight: 300, textTransform: "uppercase", letterSpacing: "0.08em", color: "#666" }}>
                      Capabilities
                    </p>
                    <div style={{ marginTop: "4px" }}>
                      {project.capabilities.map((c) => (
                        <p key={c} className="font-avenir" style={{ fontSize: "15px", fontWeight: 500 }}>
                          {c}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div style={{ maxWidth: "360px" }}>
                    <p className="font-avenir" style={{ fontSize: "13px", fontWeight: 300, textTransform: "uppercase", letterSpacing: "0.08em", color: "#666" }}>
                      Team
                    </p>
                    <p className="font-avenir" style={{ fontSize: "15px", fontWeight: 500, marginTop: "4px" }}>
                      {project.team}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
