import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
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
              style={{ borderRadius: "0", width: "100%", height: "auto" }}
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

            {/* 2x2 grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                marginTop: "24px",
              }}
            >
              {/* Image 1 */}
              <div>
                <div style={{ height: "320px", overflow: "hidden" }}>
                  <Image
                    src="/beyond/mentor-1.png"
                    alt="Mentorship at high schools"
                    width={800}
                    height={600}
                    style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#275F55",
                    marginTop: "12px",
                    lineHeight: 1.4,
                  }}
                >
                  Mentorship on &ldquo;Careers in Design&rdquo; at high schools
                </p>
              </div>

              {/* Image 2 */}
              <div>
                <div style={{ height: "320px", overflow: "hidden" }}>
                  <Image
                    src="/beyond/mentor-2.png"
                    alt="Intro to UX at NYU"
                    width={800}
                    height={600}
                    style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#275F55",
                    marginTop: "12px",
                    lineHeight: 1.4,
                  }}
                >
                  &ldquo;Intro to UX&rdquo; course at NYU
                </p>
              </div>

              {/* Image 3 */}
              <div>
                <div style={{ height: "320px", overflow: "hidden" }}>
                  <Image
                    src="/beyond/mentor-3.png"
                    alt="Industry Panels"
                    width={800}
                    height={600}
                    style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#275F55",
                    marginTop: "12px",
                    lineHeight: 1.4,
                  }}
                >
                  Industry Panels
                </p>
              </div>

              {/* Image 4 — no caption */}
              <div>
                <div style={{ height: "320px", overflow: "hidden" }}>
                  <Image
                    src="/beyond/mentor-4.png"
                    alt=""
                    width={800}
                    height={600}
                    style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
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

            {/* 2-column grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                marginTop: "24px",
              }}
            >
              {[
                { src: "/beyond/industrial-1a.png", alt: "Pop-up gardening cart for elderly", caption: "Design for elderly: A pop-up gardening cart for community common spaces in cities" },
                { src: "/beyond/industrial-1b.png", alt: "Windfall lighting exhibit design", caption: "Windfall: Lighting Exhibit Design" },
                { src: "/beyond/industrial-2.png", alt: "Ripples lighting exhibit design", caption: "Ripples: Lighting Exhibit Design" },
                { src: "/beyond/industrial-3.png", alt: "Allerpack travel kit for food allergies", caption: "Allerpack: A travel kit for food allergies" },
                { src: "/beyond/industrial-4.png", alt: "Green and Garnishes serving set", caption: "Green and Garnishes serving set: An all-inclusive salad bowl made for the Uncommon Goods brand catalog" },
                { src: "/beyond/industrial-5.png", alt: "Globetrotter game for kids", caption: "Globetrotter: An imaginative game for kids to promote story-telling and problem-solving" },
                { src: "/beyond/industrial-6.png", alt: "Lemon squeezer design", caption: "Lemon Squeezer design: A lemon squeezing mechanism designed to minimize mess" },
                { src: "/beyond/industrial-7a.png", alt: "Hairdryer design", caption: "Hairdryer Design: A scaled hairdryer designed with the internal components of a real hairdryer" },
                { src: "/beyond/industrial-7b.png", alt: "Wanderlust piggy bank", caption: "Wanderlust Bank: A piggy bank for kids designed to evoke the thrill of vacations" },
              ].map(({ src, alt, caption }) => (
                <div key={src}>
                  <div style={{ height: "320px", overflow: "hidden" }}>
                    <Image
                      src={src}
                      alt={alt}
                      width={800}
                      height={600}
                      style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#275F55",
                      marginTop: "12px",
                      lineHeight: 1.4,
                    }}
                  >
                    {caption}
                  </p>
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

            {/* 2-column grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                marginTop: "24px",
              }}
            >
              {[
                { n: 1, alt: "Pop up coffee house poster", caption: "Pop up coffee house invite: A poster designed to spread awareness for National Curry week" },
                { n: 2, alt: "Pop up christmas card", caption: "Pop up christmas card" },
                { n: 3, alt: "Rikshaw car concept sketch", caption: "Digital sketch: Rikshaw car concept" },
                { n: 4, alt: "Mushroom observation sketches", caption: "Observation sketches of mushrooms at the Brooklyn botanical garden" },
                { n: 5, alt: "Museum of natural history sketches", caption: "Observation sketches at the Museum of natural history" },
                { n: 6, alt: "Paper planar study", caption: "Paper planar study: A 3D study using a 2D paper to explore 3D principles" },
                { n: 7, alt: "Convexity study sculpture", caption: "Convexity study: Exploring 3D form through hierarchy, gesture, movement and visual interest using positive and negative spaces" },
                { n: 8, alt: "Rectilinear study", caption: "Rectilinear study: a rectilinear form that has spacial tension and movement using proportionally diverse components." },
                { n: 9, alt: "Teapot abstraction", caption: "Teapot abstraction: Depicting the concept of a tea party using 3D principles on CAD" },
                { n: 10, alt: "Wooden photo frame", caption: "Wooden photo frame" },
              ].map(({ n, alt, caption }) => (
                <div key={n}>
                  <div style={{ height: "320px", overflow: "hidden" }}>
                    <Image
                      src={`/beyond/creative-${n}.png`}
                      alt={alt}
                      width={800}
                      height={600}
                      style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#275F55",
                      marginTop: "12px",
                      lineHeight: 1.4,
                    }}
                  >
                    {caption}
                  </p>
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
