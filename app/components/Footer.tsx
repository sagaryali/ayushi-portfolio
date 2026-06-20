export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000", padding: "64px 0" }}>
      <style>{`
        .footer-link:hover .footer-link-underline {
          text-decoration: underline;
        }
      `}</style>
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "64px",
        }}
      >
        {/* Left */}
        <p
          className="font-avenir"
          style={{ fontSize: "20px", fontWeight: 300, color: "#FDF6EC", lineHeight: 1.7, maxWidth: "360px" }}
        >
          This is only part of my story...
          <br /><br />
          You can learn more about me{" "}
          <a href="/about" style={{ color: "#FDF6EC", textDecoration: "underline" }}>here</a>
          , or reach out to connect, collaborate, or chat about all things design, tech, and more!
        </p>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "right" }}>
          <a
            href="mailto:ayushi0607@gmail.com"
            className="font-avenir footer-link"
            style={{ fontSize: "20px", fontWeight: 300, color: "#FDF6EC", textDecoration: "none" }}
          >
            My Email: <span className="footer-link-underline">ayushi0607@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ayushi-shah0607/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-avenir footer-link"
            style={{ fontSize: "20px", fontWeight: 300, color: "#FDF6EC", textDecoration: "none" }}
          >
            My LinkedIn: <span className="footer-link-underline">ayushi-shah0607</span>
          </a>
          <p
            className="font-avenir"
            style={{ fontSize: "20px", fontWeight: 300, color: "#FDF6EC" }}
          >
            NYC-based Designer
          </p>
        </div>
      </div>
    </footer>
  );
}
