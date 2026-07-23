import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      <style>{`
        .beyond-item {
          position: relative;
          z-index: 1;
          perspective: 1000px;
        }
        .beyond-item:hover {
          z-index: 20;
        }
        .beyond-image {
          display: block;
          border-radius: 4px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          transform: translateZ(0) scale(1);
        }
        .beyond-item:hover .beyond-image {
          transform: translateZ(60px) scale(1.06);
          box-shadow: 0 22px 32px rgba(0,0,0,0.22);
        }
        .beyond-tooltip {
          position: absolute;
          bottom: calc(100% + 14px);
          left: 50%;
          background: #275F55;
          color: #FDF6EC;
          font-family: 'Nunito', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 16px;
          border-radius: 16px;
          width: max-content;
          max-width: 260px;
          text-align: center;
          line-height: 1.4;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: translateX(-50%) translateY(4px);
          letter-spacing: 0.01em;
          z-index: 10;
        }
        .beyond-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #275F55;
        }
        .beyond-item:hover .beyond-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      `}</style>

      <Nav />

      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 48px" }}>
        <section
          style={{
            paddingTop: "100px",
            paddingBottom: "160px",
            display: "flex",
            gap: "80px",
            alignItems: "flex-start",
          }}
        >
          {/* Left — photo */}
          <div style={{ flexShrink: 0, width: "360px" }}>
            <Image
              src="/ayushi-about.png"
              alt="Ayushi"
              width={360}
              height={480}
              className="object-cover"
              style={{ borderRadius: "4px", width: "100%", height: "auto" }}
            />
          </div>

          {/* Right — bio (body copy) */}
          <div style={{ paddingTop: "0" }}>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 300,
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#275F55",
              }}
            >
              At my core, I am a designer. I apply design thinking to everything
              — from planning a vacation (that&apos;s just a user journey map for
              me) to fixing broken furniture (creative problem-solving).
            </p>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 300,
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#275F55",
                marginTop: "24px",
              }}
            >
              With a background in Industrial Design, my approach to design is
              not just for functionality and aesthetics, but for the broader
              system, the people involved, and the social and environmental
              context. I&apos;m passionate about crafting design solutions that
              positively impact people, businesses, and the planet.
            </p>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 300,
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#275F55",
                marginTop: "24px",
              }}
            >
              I am always eager to learn, collaborate, and chat about anything
              Design. Feel free to connect with me over{" "}
              <a
                href="mailto:ayushi0607@gmail.com"
                style={{ color: "#275F55", textDecoration: "underline" }}
              >
                email
              </a>{" "}
              or on social platforms.
            </p>
          </div>
        </section>

        {/* Beyond UX */}
        <section style={{ paddingBottom: "120px" }}>
          {/* Page-level title */}
          <h2
            className="font-merriweather font-bold"
            style={{ fontSize: "48px", color: "#000" }}
          >
            Beyond UX
          </h2>

          {/* Mentor / Teacher subsection */}
          <div style={{ marginTop: "32px" }}>
            {/* Section subtitle */}
            <h3
              className="font-merriweather font-bold"
              style={{ fontSize: "36px", color: "#000" }}
            >
              Mentor / Teacher
            </h3>

            {/* Body */}
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#000",
                marginTop: "16px",
                lineHeight: 1.7,
              }}
            >
              I am passionate about sharing knowledge and growing the next
              generation of designers.
            </p>

            {/* Brick grid */}
            <div
              style={{
                columnCount: 2,
                columnGap: "16px",
                marginTop: "24px",
              }}
            >
              {/* Image 1 */}
              <div className="beyond-item" style={{ breakInside: "avoid", marginBottom: "16px" }}>
                <Image
                  src="/beyond/mentor-1.png"
                  alt="Mentorship at high schools"
                  width={1808}
                  height={1356}
                  className="beyond-image"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="beyond-tooltip">
                  Mentorship on &ldquo;Careers in Design&rdquo; at high schools
                </div>
              </div>

              {/* Image 2 */}
              <div className="beyond-item" style={{ breakInside: "avoid", marginBottom: "16px" }}>
                <Image
                  src="/beyond/mentor-2.png"
                  alt="Intro to UX at NYU"
                  width={1016}
                  height={1356}
                  className="beyond-image"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="beyond-tooltip">
                  &ldquo;Intro to UX&rdquo; course at NYU
                </div>
              </div>

              {/* Image 3 */}
              <div className="beyond-item" style={{ breakInside: "avoid", marginBottom: "16px" }}>
                <Image
                  src="/beyond/mentor-3.png"
                  alt="Industry Panels"
                  width={1408}
                  height={1056}
                  className="beyond-image"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="beyond-tooltip">Industry Panels</div>
              </div>

              {/* Image 4 — no caption */}
              <div className="beyond-item" style={{ breakInside: "avoid", marginBottom: "16px" }}>
                <Image
                  src="/beyond/mentor-4.png"
                  alt=""
                  width={1406}
                  height={1056}
                  className="beyond-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Industrial & Product Design subsection */}
          <div style={{ marginTop: "120px" }}>
            <h3
              className="font-merriweather font-bold"
              style={{ fontSize: "36px", color: "#000" }}
            >
              Industrial &amp; Product Designer
            </h3>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#000",
                marginTop: "16px",
                lineHeight: 1.7,
              }}
            >
              I build for longevity, ergonomics, and real-world utility.
            </p>

            {/* Brick grid */}
            <div
              style={{
                columnCount: 2,
                columnGap: "16px",
                marginTop: "24px",
              }}
            >
              {[
                { src: "/beyond/industrial-1a.png", alt: "Pop-up gardening cart for elderly", caption: "Design for elderly: A pop-up gardening cart for community common spaces in cities", width: 995, height: 714 },
                { src: "/beyond/industrial-1b.png", alt: "Windfall lighting exhibit design", caption: "Windfall: Lighting Exhibit Design", width: 1020, height: 743 },
                { src: "/beyond/industrial-2.png", alt: "Ripples lighting exhibit design", caption: "Ripples: Lighting Exhibit Design", width: 771, height: 934 },
                { src: "/beyond/industrial-3.png", alt: "Allerpack travel kit for food allergies", caption: "Allerpack: A travel kit for food allergies", width: 996, height: 1075 },
                { src: "/beyond/industrial-4.png", alt: "Green and Garnishes serving set", caption: "Green and Garnishes serving set: An all-inclusive salad bowl made for the Uncommon Goods brand catalog", width: 996, height: 1149 },
                { src: "/beyond/industrial-5.png", alt: "Globetrotter game for kids", caption: "Globetrotter: An imaginative game for kids to promote story-telling and problem-solving", width: 750, height: 536 },
                { src: "/beyond/industrial-6.png", alt: "Lemon squeezer design", caption: "Lemon Squeezer design: A lemon squeezing mechanism designed to minimize mess", width: 996, height: 986 },
                { src: "/beyond/industrial-7a.png", alt: "Hairdryer design", caption: "Hairdryer Design: A scaled hairdryer designed with the internal components of a real hairdryer", width: 871, height: 536 },
                { src: "/beyond/industrial-7b.png", alt: "Wanderlust piggy bank", caption: "Wanderlust Bank: A piggy bank for kids designed to evoke the thrill of vacations", width: 989, height: 741 },
              ].map(({ src, alt, caption, width, height }) => (
                <div key={src} className="beyond-item" style={{ breakInside: "avoid", marginBottom: "16px" }}>
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="beyond-image"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="beyond-tooltip">{caption}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experimentative Creative subsection */}
          <div style={{ marginTop: "120px" }}>
            <h3
              className="font-merriweather font-bold"
              style={{ fontSize: "36px", color: "#000" }}
            >
              Experimentative Creative
            </h3>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#000",
                marginTop: "16px",
                lineHeight: 1.7,
              }}
            >
              I love tinkering with new tools and mediums that feed my creativity.
            </p>

            {/* Brick grid */}
            <div
              style={{
                columnCount: 2,
                columnGap: "16px",
                marginTop: "24px",
              }}
            >
              {[
                { n: 1, alt: "Pop up coffee house poster", caption: "Pop up coffee house invite: A poster designed to spread awareness for National Curry week", width: 996, height: 1533 },
                { n: 2, alt: "Pop up christmas card", caption: "Pop up christmas card", width: 996, height: 1041 },
                { n: 3, alt: "Rikshaw car concept sketch", caption: "Digital sketch: Rikshaw car concept", width: 966, height: 711 },
                { n: 4, alt: "Mushroom observation sketches", caption: "Observation sketches of mushrooms at the Brooklyn botanical garden", width: 996, height: 1408 },
                { n: 5, alt: "Museum of natural history sketches", caption: "Observation sketches at the Museum of natural history", width: 987, height: 1014 },
                { n: 6, alt: "Paper planar study", caption: "Paper planar study: A 3D study using a 2D paper to explore 3D principles", width: 996, height: 660 },
                { n: 7, alt: "Convexity study sculpture", caption: "Convexity study: Exploring 3D form through hierarchy, gesture, movement and visual interest using positive and negative spaces", width: 996, height: 1492 },
                { n: 8, alt: "Rectilinear study", caption: "Rectilinear study: a rectilinear form that has spacial tension and movement using proportionally diverse components.", width: 919, height: 648 },
                { n: 9, alt: "Teapot abstraction", caption: "Teapot abstraction: Depicting the concept of a tea party using 3D principles on CAD", width: 996, height: 813 },
                { n: 10, alt: "Wooden photo frame", caption: "Wooden photo frame", width: 996, height: 1324 },
              ].map(({ n, alt, caption, width, height }) => (
                <div key={n} className="beyond-item" style={{ breakInside: "avoid", marginBottom: "16px" }}>
                  <Image
                    src={`/beyond/creative-${n}.png`}
                    alt={alt}
                    width={width}
                    height={height}
                    className="beyond-image"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="beyond-tooltip">{caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
