"use client";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const projects = [
  {
    slug: "ai-cloud-infrastructure",
    image: "/projects/ai-cloud-cover.png",
    title: "Designing workflows for AI + Cloud Infrastructure planning",
    timeline: "August 2025 – Present",
    capabilities: ["User Experience Design", "Systems Design"],
    team: "Senior UX Designer (Ayushi Shah), Product Manager, Technical Program Manager, UX Research, Engineering",
    summary:
      "Consolidated a fragmented cloud capacity planning process into a unified workflow across stakeholders. The new system slashed planning time by 80% and minimized idle capacity, directly recovering revenue previously lost for every hour capacity sat idle.",
  },
  {
    slug: "philips",
    image: "/projects/project-2-cover.png",
    title: "Philips X Gates Foundation: AI for Maternal Healthcare",
    timeline: "August 2022 – July 2023",
    capabilities: ["Design Research & Strategy", "User Experience Design", "Service Design"],
    team: "Design, Business, Engineering, Clinical across India, Europe, and the US",
    summary:
      "Developed an AI-powered ultrasound screening tool to help frontline workers identify high-risk pregnancies for women in underserved communities. The project underscores Philips' commitment to improving the lives of 2.5 billion people a year by 2030, including 400 million in underserved communities.",
  },
];

const roles = ["designer", "storyteller", "strategist"];

export default function Home() {
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
        .scroll-cue {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          color: #275F55;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 8px 16px;
        }
        .scroll-cue:hover .scroll-cue-arrow {
          color: #000;
        }
        .scroll-cue-arrow {
          animation: scroll-cue-bounce 1.8s ease-in-out infinite;
          transition: color 0.2s ease;
        }
        @keyframes scroll-cue-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-cue-arrow { animation: none; }
        }
      `}</style>

      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Nav />

        {/* Hero */}
        <div
          style={{ maxWidth: "1120px", margin: "0 auto", width: "100%" }}
          className="px-4 md:px-12 flex-1 flex flex-col justify-center pb-24"
        >
          <h1
            className="font-merriweather font-bold"
            style={{
              fontSize: "clamp(52px, 10vw, 136px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            Hi, I&apos;m Ayushi, a
            <span
              className={`role-word ${roleVisible ? "visible" : "hidden"}`}
              style={{ color: "#275F55", display: "block", marginTop: "0.2em" }}
            >
              {roles[roleIndex]}
            </span>
          </h1>
          <p
            className="font-merriweather font-bold"
            style={{
              fontSize: "clamp(24px, 3.4vw, 48px)",
              lineHeight: 1.3,
              marginTop: "48px",
              maxWidth: "1000px",
            }}
          >
            I enjoy doing the messy work to craft meaningful impact for people,
            business, and the planet.
          </p>
        </div>

        {/* Scroll cue */}
        <button
          type="button"
          className="scroll-cue font-avenir"
          aria-label="Scroll to view my work"
          onClick={() =>
            document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>Scroll to view my work</span>
          <svg
            className="scroll-cue-arrow"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div style={{ maxWidth: "1120px", margin: "0 auto" }} className="px-4 md:px-12">

        {/* Featured Projects */}
        <section id="work" className="pt-16 md:pt-24 pb-20 md:pb-[120px]" style={{ scrollMarginTop: "16px" }}>
          <h2
            className="font-merriweather font-bold text-[32px] md:text-[48px]"
            style={{ color: "#275F55", marginBottom: "40px" }}
          >
            Featured Projects
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
            {projects.map((project) => (
              <article key={project.slug}>
                <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
                  {/* Cover image */}
                  <div
                    style={{ borderRadius: "4px", overflow: "hidden" }}
                    className="relative w-full aspect-[4/3] md:aspect-auto md:w-auto md:flex-1"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right column: title, summary, CTA */}
                  <div className="flex flex-col justify-center md:flex-1">
                    <h3
                      className="font-merriweather font-bold text-[26px] md:text-[36px]"
                      style={{ lineHeight: 1.2 }}
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
                        className="font-avenir inline-flex items-center justify-center gap-2 no-underline w-full md:w-[65%]"
                        style={{
                          backgroundColor: "#275F55",
                          color: "#FDF6EC",
                          fontSize: "16px",
                          fontWeight: 750,
                          padding: "18px 28px",
                          borderRadius: "24px",
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
                    border: "1px solid #275F55",
                    borderRadius: "16px",
                    marginTop: "40px",
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 p-5 md:px-8 md:py-6"
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
                  <div>
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
