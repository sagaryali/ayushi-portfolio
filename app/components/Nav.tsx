"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume.pdf", external: true },
  ];

  return (
    <nav style={{ backgroundColor: "#FDF6EC" }}>
      <style>{`
        .logo-wrap {
          position: relative;
          display: inline-grid;
        }
        .logo-short, .logo-full {
          grid-area: 1 / 1;
          white-space: nowrap;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .logo-wrap .logo-short { opacity: 1; transform: translateY(0); }
        .logo-wrap .logo-full  { opacity: 0; transform: translateY(4px); pointer-events: none; }
        .logo-wrap:hover .logo-short { opacity: 0; transform: translateY(-4px); }
        .logo-wrap:hover .logo-full  { opacity: 1; transform: translateY(0); }

        .nav-link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border: 2px solid #275F55;
          border-radius: 24px;
          text-decoration: none;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .nav-link:hover {
          color: #275F55;
        }
        .nav-link.active {
          background-color: #275F55;
          color: #FDF6EC;
        }
        @media (max-width: 767px) {
          .nav-link {
            padding: 8px 12px;
            font-size: 14px !important;
          }
        }
      `}</style>
      <div
        style={{ maxWidth: "1120px", margin: "0 auto" }}
        className="px-4 py-5 md:px-12 md:py-8 flex items-center justify-between gap-3"
      >
        <Link href="/" style={{ textDecoration: "none" }} className="logo-wrap shrink-0">
          <span className="font-merriweather font-bold text-black logo-short" style={{ fontSize: "22px", letterSpacing: "0.05em" }}>
            AS
          </span>
          <span className="font-merriweather font-bold text-black logo-full" style={{ fontSize: "22px" }}>
            Ayushi Shah
          </span>
        </Link>

        <ul className="flex flex-wrap justify-end gap-2 md:gap-4" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-avenir text-black nav-link"
                  style={{ fontSize: "16px", fontWeight: 400 }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={`font-avenir text-black nav-link${pathname === link.href ? " active" : ""}`}
                  style={{ fontSize: "16px", fontWeight: 400 }}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
