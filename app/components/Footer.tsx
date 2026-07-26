export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000" }} className="py-10 md:py-16">
      <style>{`
        .footer-link:hover .footer-link-underline {
          text-decoration: underline;
        }
      `}</style>
      <div
        style={{ maxWidth: "1120px", margin: "0 auto" }}
        className="px-6 md:px-12 flex flex-col md:flex-row md:justify-between items-start gap-8 md:gap-16"
      >
        {/* Left */}
        <p
          className="font-avenir text-[16px] md:text-[20px] max-w-full md:max-w-[360px]"
          style={{ fontWeight: 300, color: "#FDF6EC", lineHeight: 1.7 }}
        >
          This is only part of my story...
          <br /><br />
          You can learn more about me{" "}
          <a href="/about" style={{ color: "#FDF6EC", textDecoration: "underline" }}>here</a>
          , or reach out to connect, collaborate, or chat about all things design, tech, and more!
        </p>

        {/* Right */}
        <div className="flex flex-col gap-2 text-left md:text-right">
          <a
            href="mailto:ayushi0607@gmail.com"
            className="font-avenir footer-link text-[16px] md:text-[20px]"
            style={{ fontWeight: 300, color: "#FDF6EC", textDecoration: "none" }}
          >
            My Email: <span className="footer-link-underline">ayushi0607@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ayushi-shah0607/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-avenir footer-link text-[16px] md:text-[20px]"
            style={{ fontWeight: 300, color: "#FDF6EC", textDecoration: "none" }}
          >
            My LinkedIn: <span className="footer-link-underline">ayushi-shah0607</span>
          </a>
          <p
            className="font-avenir text-[16px] md:text-[20px]"
            style={{ fontWeight: 300, color: "#FDF6EC" }}
          >
            NYC-based Designer
          </p>
        </div>
      </div>
    </footer>
  );
}
