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

            {/* Row 1: 2 images */}
            <div style={{ display: "flex", gap: "24px", marginTop: "24px", alignItems: "flex-start" }}>
              <Image src="/beyond/industrial-1.png" alt="Industrial design 1" width={2160} height={880} style={{ display: "block", height: "320px", width: "auto" }} />
              <Image src="/beyond/industrial-2.png" alt="Industrial design 2" width={836} height={1032} style={{ display: "block", height: "320px", width: "auto" }} />
            </div>
            {/* Row 2: 3 images */}
            <div style={{ display: "flex", gap: "24px", marginTop: "24px", alignItems: "flex-start" }}>
              <Image src="/beyond/industrial-3.png" alt="Industrial design 3" width={1132} height={1200} style={{ display: "block", height: "320px", width: "auto" }} />
              <Image src="/beyond/industrial-4.png" alt="Industrial design 4" width={1076} height={1300} style={{ display: "block", height: "320px", width: "auto" }} />
              <Image src="/beyond/industrial-5.png" alt="Industrial design 5" width={1042} height={880} style={{ display: "block", height: "320px", width: "auto" }} />
            </div>
            {/* Row 3: 2 images */}
            <div style={{ display: "flex", gap: "24px", marginTop: "24px", alignItems: "flex-start" }}>
              <Image src="/beyond/industrial-6.png" alt="Industrial design 6" width={1044} height={1136} style={{ display: "block", height: "320px", width: "auto" }} />
              <Image src="/beyond/industrial-7.png" alt="Industrial design 7" width={2186} height={904} style={{ display: "block", height: "320px", width: "auto" }} />
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

            {/* Masonry via CSS columns */}
            <div style={{ columns: 3, columnGap: "20px", marginTop: "24px" }}>
              {[
                { n: 1, w: 1064, h: 1654 },
                { n: 2, w: 1064, h: 1154 },
                { n: 3, w: 1054, h: 838 },
                { n: 4, w: 1030, h: 1534 },
                { n: 5, w: 1056, h: 1426 },
                { n: 6, w: 1046, h: 748 },
                { n: 7, w: 1042, h: 1650 },
                { n: 8, w: 1064, h: 962 },
                { n: 9, w: 1068, h: 942 },
                { n: 10, w: 1084, h: 1450 },
              ].map(({ n, w, h }) => (
                <div key={n} style={{ breakInside: "avoid", marginBottom: "20px" }}>
                  <Image
                    src={`/beyond/creative-${n}.png`}
                    alt={`Creative ${n}`}
                    width={w}
                    height={h}
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
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
