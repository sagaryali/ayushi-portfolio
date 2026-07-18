import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Image from "next/image";

const scopeQuestions = [
  {
    title: "User",
    items: [
      "Who are the users of the technology based on policy, trust and clinical expertise?",
      "How can we best support the user with using our technology (training, equipment, etc.)",
    ],
  },
  {
    title: "Clinical",
    items: [
      "What parameters do we need to read to detect a high-risk pregnancy?",
      "How would this change the patients course of pregnancy?",
    ],
  },
  {
    title: "Business",
    items: [
      "Are there existing government schemes that support our mission?",
      "How can we reach the most patients?",
    ],
  },
];

const opportunityInsights = [
  {
    insight:
      "Users must be medically registered to gain patient trust (OBGYNs, GPs, Nurse Practitioners)",
    solution:
      "Empower medically registered frontline workers to perform early identification of high-risk pregnancies at local facilities, providing the necessary data for specialists (Radiologists, OBGYN's) to determine the subsequent course of care.",
  },
  {
    insight:
      "Adoption depends on strict compliance with India's sex-determination regulations",
    solution:
      "Ensure that the UI is only surfacing data that is compliant with the regulations",
  },
  {
    insight:
      "Procurement of technology requires defining clear ROI, efficiency gains, minimal training, and procurement viability.",
    solution:
      "Provide facilities with a clear end-to-end service starting from procurement and training to end of life.",
  },
  {
    insight:
      "Users were not comfortable referring to the product as a replacement for ultrasound scanning.",
    solution:
      "Frame the product as a basic screening tool rather than a replacement for ultrasound scanning to align with medical professionals' comfort levels.",
  },
];

const validationInsights = [
  {
    insight:
      "One of our user testing sessions revealed that placing the tablet on a flat surface during scans caused back strain, reducing productivity by nearly half.",
    solution:
      "A compact physical cart that can adjust to a facilities existing infrastructure to alleviate strain and restore productivity.",
  },
  {
    insight:
      "Beyond training, adoption required trust in AI; some Providers wanted the ability to validate AI outputs with manual measurements.",
    solution:
      "Develop a non-black box workflow option that allows professionals to validate AI outputs with manual measurements to build trust.",
  },
  {
    insight: "Noisy, crowded clinical environments can hinder users ability to hear cues.",
    solution:
      "Implement multimodal feedback, such as visual and haptic cues, to ensure effectiveness in noisy clinical environments without depending on sound.",
  },
];

const definingInsights = [
  {
    insight:
      "Affordability was critical, as many users were hesitant to invest long-term in new technology.",
    solution:
      "Explore a subscription-based model to lower barriers to adoption, reduce upfront investment costs, and gain user trust.",
  },
  {
    insight:
      "Beyond primary users, secondary stakeholders have strong on-ground influence; while they don't conduct screenings, they play a key role in building awareness.",
    solution:
      "Empower secondary stakeholders to educate patients on early check-ups and build brand awareness within the community.",
  },
];

const indiaDefinitions = [
  ["ASHA workers:", "Community-based health volunteers"],
  ["ANM workers:", "Multipurpose female health workers providing frontline primary care"],
  ["RCH portal:", "A digital tracking system for managing and monitoring reproductive and child health services."],
  ["HMIS portal:", "A centralized data management system for monitoring health facility performance"],
  ["iMAMA:", "Our AI-enabled solution"],
];

const kenyaDefinitions = [
  ["CHV/CHW:", "Community health volunteers/workers"],
  ["NMW:", "Nursing and Midwifery professionals"],
  ["L1:", "The Community Health level"],
  ["L2-3:", "Primary Care facilities"],
  ["L5:", "Secondary Referral hospitals at the county level for specialized care"],
];

const abbreviations = [
  ["HRP:", "High risk pregnancy"],
  ["PW:", "Pregnant woman"],
  ["ANC:", "Antenatal care"],
  ["PNC:", "Postnatal care"],
];

const impactQuotes = [
  {
    quote:
      '"Some of the features will be helpful even for Radiologists (who currently conduct ultrasounds)"',
    source: "Radiologist in India",
  },
  {
    quote:
      '"Would make my job so easy, I would end up trusting it. So I would be open to such a machine"',
    source: "Gen. Practitioner in India",
  },
  {
    quote:
      '"Since the machine is portable, I can carry it with me, maybe take it to health camps, to promote my facility and help others."',
    source: "OBGYN in India",
  },
];

function InsightSolution({
  items,
}: {
  items: { insight: string; solution: string }[];
}) {
  return (
    <div
      className="font-avenir"
      style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.75 }}
    >
      <p style={{ fontWeight: 800, marginBottom: "16px" }}>
        Key insights and solutions:
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {items.map((item, i) => (
          <div key={i}>
            <p style={{ marginBottom: "4px" }}>
              <strong>Insight:</strong> {item.insight}
            </p>
            <p>
              <strong>Solution:</strong> {item.solution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DefinitionsBox({
  definitions,
  abbreviations,
}: {
  definitions: string[][];
  abbreviations: string[][];
}) {
  return (
    <div
      style={{
        border: "2px solid #275F55",
        borderRadius: "8px",
        padding: "32px",
        display: "flex",
        gap: "64px",
      }}
    >
      <div style={{ flex: 1 }}>
        <p
          className="font-avenir"
          style={{ fontSize: "15px", fontWeight: 800, marginBottom: "12px" }}
        >
          Definitions
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {definitions.map(([term, def]) => (
            <p
              key={term}
              className="font-avenir"
              style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.6 }}
            >
              <strong>{term}</strong> {def}
            </p>
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <p
          className="font-avenir"
          style={{ fontSize: "15px", fontWeight: 800, marginBottom: "12px" }}
        >
          Abbreviations
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {abbreviations.map(([term, def]) => (
            <p
              key={term}
              className="font-avenir"
              style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.6 }}
            >
              <strong>{term}</strong> {def}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-avenir"
      style={{ fontSize: "14px", fontWeight: 400, color: "#666", marginTop: "8px" }}
    >
      {children}
    </p>
  );
}

export default function Philips() {
  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      <Nav />

      {/* Hero Image */}
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3024 / 4032",
            maxHeight: "640px",
            borderRadius: "16px",
            overflow: "hidden",
            marginTop: "40px",
          }}
        >
          <Image
            src="/projects/philips/hero.png"
            alt="Frontline healthcare worker using Lumify handheld ultrasound"
            fill
            className="object-cover"
            priority
          />
          <div
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "56px",
              height: "72px",
            }}
          >
            <Image
              src="/projects/philips/philips-logo.png"
              alt="Philips logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Title + Meta */}
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 48px" }}>
        <section style={{ paddingTop: "48px" }}>
          <h1
            className="font-merriweather font-bold"
            style={{ fontSize: "48px", lineHeight: 1.2 }}
          >
            Philips X Gates Foundation: AI for Maternal Healthcare
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1.5fr",
              gap: "40px",
              marginTop: "48px",
            }}
          >
            <div>
              <p
                className="font-avenir"
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#666",
                }}
              >
                Timeline
              </p>
              <p
                className="font-avenir"
                style={{ fontSize: "15px", fontWeight: 500, marginTop: "4px" }}
              >
                August 2022 &ndash; July 2023
              </p>
            </div>
            <div>
              <p
                className="font-avenir"
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#666",
                }}
              >
                Capabilities
              </p>
              <p
                className="font-avenir"
                style={{ fontSize: "15px", fontWeight: 500, marginTop: "4px" }}
              >
                Design research and strategy, User Experience design, Service
                Design
              </p>
            </div>
            <div>
              <p
                className="font-avenir"
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#666",
                }}
              >
                Team
              </p>
              <p
                className="font-avenir"
                style={{ fontSize: "15px", fontWeight: 500, marginTop: "4px" }}
              >
                Design, Business, Engineering, Clinical across India, Europe,
                and the US
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Overview Section — teal background */}
      <section
        style={{
          backgroundColor: "#275F55",
          color: "#FDF6EC",
          padding: "72px 0",
          marginTop: "80px",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 48px" }}>
          <h2
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "48px" }}
          >
            Overview
          </h2>

          <div style={{ marginBottom: "48px" }}>
            <h3
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 800, marginBottom: "16px" }}
            >
              Context
            </h3>
            <p
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.75,
                marginBottom: "16px",
              }}
            >
              This project was part of a collaboration between{" "}
              <a
                href="https://www.usa.philips.com/healthcare"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Philips Healthcare
              </a>{" "}
              and{" "}
              <a
                href="https://www.gatesfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                The Gates Foundation
              </a>{" "}
              to develop an AI-enabled solution around Philips&rsquo; existing
              handheld ultrasound technology. The goal was to enable frontline
              healthcare workers to identify high-risk pregnancies earlier and
              improve access to antenatal care in underserved regions in India
              and Kenya.
            </p>
            <p
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.75,
                marginBottom: "16px",
              }}
            >
              The initiative further underscores Philips&rsquo; commitment to
              improving the lives of 2.5 billion people a year by 2030,
              including 400 million in underserved communities.
            </p>
            <p
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.75 }}
            >
              Read more about the initiative{" "}
              <a
                href="https://www.usa.philips.com/a-w/about/news/archive/standard/news/press/2021/20211110-philips-receives-grant-to-improve-quality-and-accessibility-of-maternal-care-in-low-and-middle-income-countries.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                here
              </a>
              .
            </p>
          </div>

          <div style={{ marginBottom: "48px" }}>
            <h3
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 800, marginBottom: "16px" }}
            >
              The Business Problem
            </h3>
            <p
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.75 }}
            >
              In underserved regions of India and Kenya, limited access to
              radiology services prevents many pregnant women from receiving
              timely ultrasounds, resulting in undetected high-risk
              pregnancies and avoidable maternal and infant complications.
            </p>
          </div>

          <div style={{ marginBottom: "48px" }}>
            <h3
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 800, marginBottom: "16px" }}
            >
              The Outcome
            </h3>
            <ol
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.75,
                paddingLeft: "24px",
                listStyleType: "decimal",
              }}
            >
              <li>
                An AI-enabled preliminary screening tool integrated with
                Philips&rsquo; handheld ultrasound probe,{" "}
                <a
                  href="https://www.philips.co.in/healthcare/sites/lumify/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  Lumify
                </a>
              </li>
              <li>
                A portable cart for the technology enabling healthcare workers
                to deliver screenings directly to patients
              </li>
              <li>
                End-to-end product services including training modules,
                servicing, and technology support.
              </li>
            </ol>
          </div>

          <div>
            <h3
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 800, marginBottom: "16px" }}
            >
              My Role
            </h3>
            <p
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.75 }}
            >
              I worked with a cross-functional team including clinical
              experts, engineers, and business leads. As part of the design
              and research team of the project, I was mainly responsible for
              our India market.
            </p>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 48px" }}>
        {/* Defining the scope */}
        <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <h2
            className="font-merriweather font-bold"
            style={{
              fontSize: "36px",
              color: "#275F55",
              marginBottom: "24px",
            }}
          >
            Defining the scope
          </h2>
          <p
            className="font-avenir"
            style={{
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.75,
              marginBottom: "48px",
            }}
          >
            The project began with significant uncertainty across user
            adoption, clinical feasibility, and product scope. We started
            with several questions in these 3 dimensions including:
          </p>

          <div style={{ display: "flex", gap: "40px" }}>
            {scopeQuestions.map((col) => (
              <div key={col.title} style={{ flex: 1, textAlign: "center" }}>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    marginBottom: "24px",
                  }}
                >
                  {col.title}
                </p>
                <div style={{ display: "flex", gap: "16px" }}>
                  {col.items.map((item, i) => (
                    <p
                      key={i}
                      className="font-avenir"
                      style={{
                        flex: 1,
                        fontSize: "13px",
                        fontWeight: 400,
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Value Proposition */}
        <section style={{ paddingBottom: "80px" }}>
          <h2
            className="font-merriweather font-bold"
            style={{
              fontSize: "36px",
              color: "#275F55",
              marginBottom: "24px",
            }}
          >
            The Value Proposition
          </h2>
          <p
            className="font-avenir"
            style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.75 }}
          >
            We partnered closely with cross-functional stakeholders to shape
            these three dimensions of the product through the following
            methods:
          </p>
        </section>

        {/* Establishing the opportunity */}
        <section style={{ paddingBottom: "80px" }}>
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "40px" }}
          >
            Establishing the opportunity
          </h3>

          <div style={{ marginBottom: "32px" }}>
            <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
              <Image
                src="/projects/philips/interview-insights.png"
                alt="User and expert interview insights"
                width={2860}
                height={976}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Caption>User &amp; Expert Interview insights</Caption>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
              <Image
                src="/projects/philips/competitive-analysis.png"
                alt="Competitive analysis"
                width={4096}
                height={2150}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Caption>
              Competitive Analysis exploring Protocol, Image Acquisition,
              Communication, Education, System Architecture, Hardware, Sound
              &amp; Haptics, etc.
            </Caption>
          </div>

          <InsightSolution items={opportunityInsights} />
        </section>

        {/* Validating the solution */}
        <section style={{ paddingBottom: "80px" }}>
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "40px" }}
          >
            Validating the solution
          </h3>

          <div style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ flex: 1, position: "relative", aspectRatio: "457/609", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/usability-1.png"
                  alt="Usability testing with phantom belly, image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div style={{ flex: 1, position: "relative", aspectRatio: "456/609", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/usability-2.png"
                  alt="Usability testing with phantom belly, image 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div style={{ flex: 1, position: "relative", aspectRatio: "457/609", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/usability-3.png"
                  alt="Usability testing with phantom belly, image 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <Caption>Usability testing of technology using a phantom belly</Caption>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
              <Image
                src="/projects/philips/usability-testing-template.png"
                alt="Usability testing template for the screens in the flow"
                width={2030}
                height={1284}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Caption>Usability testing for the screens in the flow</Caption>
          </div>

          <InsightSolution items={validationInsights} />
        </section>

        {/* Defining */}
        <section style={{ paddingBottom: "80px" }}>
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "40px" }}
          >
            Defining
          </h3>

          <div style={{ marginBottom: "32px" }}>
            <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
              <Image
                src="/projects/philips/service-blueprint.png"
                alt="Service blueprint activity"
                width={1386}
                height={701}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Caption>Service Blueprint activity</Caption>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", maxWidth: "974px" }}>
              <Image
                src="/projects/philips/core-values-workshop.png"
                alt="Transformative quality workshop"
                width={1888}
                height={1252}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Caption>Defining the product core values</Caption>
          </div>

          <InsightSolution items={definingInsights} />
        </section>
      </div>

      {/* Outcome */}
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 48px" }}>
        <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <h2
            className="font-merriweather font-bold"
            style={{
              fontSize: "36px",
              color: "#275F55",
              marginBottom: "24px",
            }}
          >
            Outcome
          </h2>
          <p
            className="font-avenir"
            style={{
              fontSize: "17px",
              fontWeight: 800,
              lineHeight: 1.75,
              marginBottom: "64px",
            }}
          >
            A key outcome of my time at Philips Healthcare was partnering
            cross-functionally to define the product&rsquo;s value
            proposition and design the end-to-end patient journey for our
            healthcare facility partners:
          </p>

          {/* Digital Product */}
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "24px" }}
          >
            Digital Product
          </h3>

          <div style={{ marginBottom: "48px" }}>
            <p
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 800, marginBottom: "8px" }}
            >
              Black Box screening: Blind Sweep
            </p>
            <p
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.75,
                marginBottom: "24px",
              }}
            >
              A technique designed for Frontline healthcare workers to
              conduct horizontal and vertical sweeps across the patient&rsquo;s
              abdomen to automatically collect the necessary parameters.
            </p>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/blind-sweep-1.png"
                  alt="3x3 and 5x5 sweep patterns for blind sweep screening"
                  width={1732}
                  height={1616}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Caption>
                3X3 sweep for the first part of a woman&rsquo;s pregnancy,
                5X5 sweep for the second part to cover more area
              </Caption>
            </div>
            <div>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/blind-sweep-report.png"
                  alt="Reporting summary for blind sweep"
                  width={1812}
                  height={710}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Caption>Reporting summary for blind sweep</Caption>
            </div>
          </div>

          <div style={{ marginBottom: "64px" }}>
            <p
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 800, marginBottom: "8px" }}
            >
              Manual screening: Guided Sweep
            </p>
            <p
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.75,
                marginBottom: "24px",
              }}
            >
              A technique designed for manual screening and analysis, mainly
              used by specialist healthcare workers
              (Obstetricians/Radiologists) for faster, AI-supported reporting
            </p>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/guided-sweep-1.png"
                  alt="Manual screening supported with AI-enabled reporting"
                  width={1658}
                  height={1326}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Caption>Manual screening supported with AI-enabled reporting</Caption>
            </div>
            <div>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/guided-sweep-report.png"
                  alt="Reporting summary for guided sweep for detailed analysis"
                  width={1084}
                  height={1066}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Caption>Reporting summary for guided sweep for detailed analysis</Caption>
            </div>
          </div>

          {/* Physical Equipment */}
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "24px" }}
          >
            Physical Equipment
          </h3>
          <div
            className="font-avenir"
            style={{
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.75,
              marginBottom: "24px",
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              The goal was to have compact, portable equipment to support
              users with their goals. This was done using 3 main components:
            </p>
            <p style={{ marginBottom: "4px" }}>
              <strong>Lumify handheld probe</strong>
            </p>
            <p style={{ marginBottom: "16px" }}>
              The solution was built around Philip&rsquo;s existing handheld
              ultrasound technology that provides real-time assessment.
            </p>
            <p style={{ marginBottom: "4px" }}>
              <strong>Tablet</strong>
            </p>
            <p style={{ marginBottom: "16px" }}>
              The digital product would be provided on a compact, light
              weight digital tablet
            </p>
            <p style={{ marginBottom: "4px" }}>
              <strong>Modular Cart</strong>
            </p>
            <p>
              A supplementary feature introduced to provide adjustable
              support for the equipment (along with supporting items like
              gel, tissues, etc.), accommodating users&rsquo; needs across
              different environments. The cart would allow the user to adjust
              the height for comfortable usage, and have a portable solution
              to carry all items across facilities.
            </p>
          </div>
          <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", marginBottom: "80px" }}>
            <Image
              src="/projects/philips/physical-equipment.png"
              alt="Physical equipment: tablet, probe, and modular cart"
              width={3024}
              height={4032}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* End-to-End Patient Journey */}
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "24px" }}
          >
            End-to-End Patient Journey
          </h3>
          <p
            className="font-avenir"
            style={{
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.75,
              marginBottom: "48px",
            }}
          >
            The product workflows in India and Kenya were designed to
            integrate with existing patient journeys. While the core
            workflows were similar, they were adapted to account for regional
            healthcare policies, patient pathways, and local care contexts in
            each geography. Both the pathways focus on identifying high risk
            pregnancies early in the pregnancy, and directing the patients to
            higher facilities for a suitable course of treatment and delivery
            plan.
          </p>

          {/* India */}
          <div style={{ marginBottom: "64px" }}>
            <p
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.75,
                marginBottom: "24px",
              }}
            >
              <strong>Fun Fact:</strong> In India, the role of family was
              identified as important, meaning we had to not only account for
              the patient in the journey, but also the family in terms of
              education and awareness, and involvement in the treatment.
            </p>

            <div style={{ marginBottom: "32px" }}>
              <DefinitionsBox
                definitions={indiaDefinitions}
                abbreviations={abbreviations}
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/india-current-journey.png"
                  alt="India current state pregnancy journey"
                  width={2500}
                  height={1057}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Caption>
                <strong>India</strong> &ndash; Current state pregnancy journey
              </Caption>
            </div>

            <div>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/india-future-journey.png"
                  alt="India future state pregnancy journey"
                  width={2500}
                  height={1177}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Caption>
                <strong>India</strong> &ndash; Future state pregnancy journey
              </Caption>
            </div>
          </div>

          {/* Kenya */}
          <div>
            <p
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.75,
                marginBottom: "24px",
              }}
            >
              <strong>Fact:</strong> In Kenya, we noticed that higher
              facilities were less accessible, requiring us to equip lower
              facilities with our technology solution, both during early
              checkups and deliveries, and only sending very selective cases
              to higher facilities.
            </p>

            <div style={{ marginBottom: "32px" }}>
              <DefinitionsBox
                definitions={kenyaDefinitions}
                abbreviations={abbreviations}
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/kenya-current-journey.png"
                  alt="Kenya current state pregnancy journey"
                  width={2500}
                  height={1176}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Caption>
                <strong>Kenya</strong> &ndash; Current state pregnancy journey
              </Caption>
            </div>

            <div>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                <Image
                  src="/projects/philips/kenya-future-journey.png"
                  alt="Kenya future state pregnancy journey"
                  width={2500}
                  height={1182}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Caption>
                <strong>Kenya</strong> &ndash; Future state pregnancy journey
              </Caption>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section style={{ paddingTop: "80px", paddingBottom: "120px" }}>
          <h2
            className="font-merriweather font-bold"
            style={{
              fontSize: "36px",
              color: "#275F55",
              marginBottom: "24px",
            }}
          >
            Impact
          </h2>
          <p
            className="font-avenir"
            style={{
              fontSize: "17px",
              fontWeight: 800,
              lineHeight: 1.75,
              marginBottom: "48px",
            }}
          >
            During my time on the project, our team successfully developed a
            minimum viable product (Phase 1) to validate the concept! While
            Phase 1 is just the beginning, we received positive reactions
            from users and stakeholders, including:
          </p>

          <div style={{ display: "flex", gap: "24px" }}>
            {impactQuotes.map((item) => (
              <div
                key={item.source}
                style={{
                  flex: 1,
                  border: "1px solid #275F55",
                  borderRadius: "8px",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  {item.quote}
                </p>
                <p
                  className="font-avenir"
                  style={{ fontSize: "15px", fontWeight: 800 }}
                >
                  &ndash; {item.source}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
