"use client";

import Image from "next/image";

const tools: { name: string; description: string; src: string }[] = [
  { name: "Industrial Design", description: "B.D. in Industrial and Product Design", src: "/logos/logo1.png" },
  { name: "Design Research", description: "Design Research and Strategy for global clients", src: "/logos/logo2.png" },
  { name: "Philips x Gates", description: "Experience Designer for a Philips X Gates Foundation initiative", src: "/logos/logo3.png" },
  { name: "HCI", description: "M.S. in Human Computer Interaction and UX Design", src: "/logos/logo4.png" },
  { name: "Fortune 5", description: "UX Designer for a Fortune 5 client's AI and Cloud business", src: "/logos/logo5.png" },
];

export default function ToolLogos() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <style>{`
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
  );
}
