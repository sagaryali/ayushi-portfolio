import { Fragment } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Image from "next/image";

const stakeholders = [
  {
    type: "Users:",
    title: "Capacity Planners",
    description: "responsible for planning & delivering to end customers",
    image: "/projects/ai-cloud/stakeholder-planner.png",
  },
  {
    type: "Indirect Users:",
    title: "Sales Teams",
    description:
      "responsible for coordinating with customers on their needs and communicating it to Planners",
    image: "/projects/ai-cloud/stakeholder-sales.png",
  },
  {
    type: "End Users:",
    title: "AI Customers",
    description:
      "seeking consistent, on-time and high-quality capacity delivery",
    image: "/projects/ai-cloud/stakeholder-customer.png",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Customer requests for capacity",
    description:
      "Customer requests for capacity and any supporting infrastructure to the Sales Team, which are then communicated to the Planners.",
    userNeed:
      "Quick communication with Sales, visibility into overall supply and demand",
    customerNeed: "High confidence confirmation of request",
  },
  {
    step: 2,
    title: "Planner identifies supply to meet customer needs",
    description:
      "The Planners identify supply as per the customers requested duration, regions, product types and quantities. Any deviations from the customer requests are further discussed with the customer.",
    userNeed:
      "Full visibility into all available supply and all incoming customer requests",
    customerNeed:
      "Timely communication regarding any deviations from the request",
  },
  {
    step: 3,
    title: "Planners block the supply for the customer",
    description:
      "Once the Customer and Planners reach an agreement, the supply is blocked off so that it is not available for any other customer. However, as we get closer to the delivery date, the amount, dates, or products can still be changed based on availability, priority, and more.",
    userNeed:
      "Ability to 'tetris' requests for the most beneficial match, tracking of capacity readiness closer to delivery",
    customerNeed: "Constant transparency about request status, clear communication about action items",
  },
  {
    step: 4,
    title: "Planners schedule ramped delivery to the customer and fix any blockers in the process",
    description:
      "Once the delivery is confirmed to the customer, the Planners create a delivery plan and ensure that blockers (if any) are flagged to the right team members.",
    userNeed:
      "Ability to establish delivery plans as per user needs. Visibility into delivery phases, timelines and alerts of any blockers",
    customerNeed:
      "Point of contact to address blockers, communication for any changes in delivery plan",
  },
  {
    step: 5,
    title: "Planners address any ongoing needs of the customer",
    description:
      "After initial delivery, Planners continue to address needs of the customer such as reducing/increasing the capacity amounts, adding infrastructure, changing the end dates, etc.",
    userNeed:
      "Strategic insights into the delivery evolution over time for highest customer satisfaction and business impact",
    customerNeed:
      "Continuous services, ability to change reservation as per evolving needs",
  },
];

const currentState = [
  "Planning is fragmented across spreadsheets and low-fidelity dashboards, with little consistency across product types.",
  "Critical decisions rely heavily on individual judgment and undocumented tribal knowledge.",
  "Communication with Sales and Customers happens through informal channels, creating gaps in alignment and visibility.",
  "Delivery is unmonitored and lacks end-to-end involvement. Teams spend most days in war rooms resolving customer issues.",
];

const futureState = [
  "A unified planning experience that provides visibility into supply, demand, and delivery statuses into end-to-end workflows.",
  "High-confidence insights into customer needs, business priorities, and delivery feasibility to support informed decision-making.",
  "Streamlined cross-product collaboration through standardized processes and formal communication channels across teams.",
  "Services beyond planning and delivery, to provide a better customer experience. Visibility into fulfillment tracking to ensure blockers can be dealt with early on.",
];

const designPlan = {
  columns: [
    {
      title: "Engage",
      subtitle:
        "Build relationships with users and stakeholders, involving them in the process",
      items: [
        "Host co-create workshops with users",
        "Show continuous progress for feedback",
        "Support user migration to new workflows",
      ],
    },
    {
      title: "Understand",
      subtitle:
        "Observe our users in their current workflows and thought processes",
      items: [
        "Mirror behaviors and mental models in new workflows",
        "Research plan to study behavior and trust in adoption",
        "Establish cross-product systems",
      ],
    },
    {
      title: "Iterate",
      subtitle:
        "Rapid prototyping with no/low code to allow for fast feedback loops",
      items: [
        "Mock reviews and usability testing for constant feedback",
        "Executing minimum workflows to get users into our products",
        "Addressing design improvements constantly",
      ],
    },
  ],
};

const userImpact = [
  {
    num: 1,
    title: "Increasing efficiency",
    description:
      "Reduced planner time per customer from ~10 to ~2 minutes",
    quote:
      '"It\'s helpful being able to edit in the views and it updates all the data. Because then I don\'t have to go into the details until we\'re going close to delivery."',
  },
  {
    num: 2,
    title: "Consolidating Workflows",
    description:
      "Consolidated workflows from 5 dashboards & spreadsheets into 1 product",
    quote:
      '"Working in spreadsheets needs us to move back and forth, so this would help us move away from manual methods immediately."',
  },
  {
    num: 3,
    title: "Reducing errors",
    description:
      "Caught ~80% of errors early through planning-stage validation",
    quote:
      '"Our current methods can be error-prone, so this could reduce our chances of planning errors like double-booking."',
  },
];

const businessImpact = [
  {
    num: 1,
    title: "Improving customer relations",
    description: "Better communication, collaboration with customers",
  },
  {
    num: 2,
    title: "Consolidating Workflows",
    description:
      "Deliveries supported with necessary infrastructure",
  },
  {
    num: 3,
    title: "Increasing fulfillment rates",
    description:
      "Increasing fulfillment rates of customer deals, minimizing idle capacity that in turn recovers lost revenue for every chip per hour",
  },
];

export default function AiCloudInfrastructure() {
  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      <Nav />

      {/* Hero Image */}
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1451 / 967",
            borderRadius: "4px",
            overflow: "hidden",
            marginTop: "40px",
          }}
        >
          <Image
            src="/projects/ai-cloud/hero.png"
            alt="AI Cloud Infrastructure planning"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Title + Meta */}
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 48px" }}>
        <section style={{ paddingTop: "48px" }}>
          <h1
            className="font-merriweather font-bold"
            style={{ fontSize: "48px", lineHeight: 1.2 }}
          >
            Designing workflows for AI + Cloud capacity planning
          </h1>

          {/* Meta box */}
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
                August 2025 &ndash; Present
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
              <div style={{ marginTop: "4px" }}>
                <p
                  className="font-avenir"
                  style={{ fontSize: "15px", fontWeight: 500 }}
                >
                  User Experience design
                </p>
                <p
                  className="font-avenir"
                  style={{ fontSize: "15px", fontWeight: 500 }}
                >
                  Systems Design
                </p>
              </div>
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
                Senior UX Designer (Ayushi Shah), Product Manager, Technical
                Program Manager, UX Research, Engineering
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

          {/* Context */}
          <div style={{ marginBottom: "48px" }}>
            <h3
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 800, marginBottom: "16px" }}
            >
              Context
            </h3>
            <p
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.75 }}
            >
              Designing systems and products for a global technology
              company that plans and delivers AI &amp; Cloud capacity.
            </p>
          </div>

          {/* The Business Problem */}
          <div style={{ marginBottom: "48px" }}>
            <h3
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 800, marginBottom: "16px" }}
            >
              The Business Problem
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
              As one of the world&apos;s largest providers of AI and cloud
              capacity, the company operates highly complex systems to forecast
              supply, allocate capacity, and deliver infrastructure at global
              scale. It is a high stakes environment where every idle capacity
              translates directly to lost revenue.
            </p>
            <p
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.75 }}
            >
              The challenge extends beyond just operational complexity, to
              helping Capacity Planners and Sales teams work effectively
              across interconnected systems and teams, and enabling them to make
              high-impact decisions with confidence.
            </p>
          </div>

          {/* The Outcome */}
          <div style={{ marginBottom: "48px" }}>
            <h3
              className="font-avenir"
              style={{ fontSize: "17px", fontWeight: 800, marginBottom: "16px" }}
            >
              The Outcome
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
              The initial MVP establishes a scalable foundation to enhance
              planning efficiency and decision quality across planning, sales,
              and customer interfaces, delivering measurable impact including:
            </p>
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
                Reducing planning time per customer from ~10 minutes to ~2 minutes
              </li>
              <li>
                Unifying five fragmented dashboards and spreadsheets into a single
                planning experience
              </li>
              <li>
                Reducing operational risk by centralizing data and minimizing
                manual handoffs
              </li>
            </ol>
          </div>

          {/* My Role */}
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
              As part of a broader effort to support Planners, sales teams, and
              customers, I lead design for the Planner-facing workflows, focused
              on planning and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding AI and Cloud capacity services */}
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
            Understanding AI and Cloud capacity services
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
            These services are responsible for planning and delivering AI and
            cloud capacity in a way that balances customer needs with operational
            efficiency and business profitability.
          </p>

          {/* Stakeholders */}
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "40px" }}
          >
            Our Stakeholders
          </h3>
          <div
            style={{
              display: "flex",
              gap: "40px",
              justifyContent: "center",
              marginBottom: "64px",
            }}
          >
            {stakeholders.map((s) => (
              <div
                key={s.title}
                style={{
                  flex: 1,
                  textAlign: "center",
                  maxWidth: "320px",
                }}
              >
                <div
                  style={{
                    width: "140px",
                    height: "140px",
                    margin: "0 auto 24px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#275F55",
                    marginBottom: "4px",
                  }}
                >
                  {s.type}
                </p>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    marginBottom: "8px",
                  }}
                >
                  {s.title}
                </p>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Journey Overview */}
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "40px" }}
          >
            Stakeholder Journey Overview
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            {journeySteps.map((step, i) => (
              <div key={step.step}>
                <div
                  style={{
                    border: "2px solid #275F55",
                    borderRadius: "16px",
                    padding: "24px 32px",
                  }}
                >
                  <p
                    className="font-avenir"
                    style={{
                      fontSize: "17px",
                      fontWeight: 800,
                      marginBottom: "8px",
                    }}
                  >
                    {step.step} &ndash; {step.title}
                  </p>
                  <p
                    className="font-avenir"
                    style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: 1.7,
                      marginBottom: "24px",
                    }}
                  >
                    {step.description}
                  </p>
                  <div style={{ display: "flex", gap: "48px" }}>
                    <div style={{ flex: 1 }}>
                      <p
                        className="font-avenir"
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          marginBottom: "12px",
                        }}
                      >
                        User needs
                      </p>
                      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <div style={{ width: "40px", height: "40px", flexShrink: 0, position: "relative" }}>
                          <Image
                            src="/projects/ai-cloud/avatar-planner.png"
                            alt="Planner"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p
                          className="font-avenir"
                          style={{
                            fontSize: "15px",
                            fontWeight: 400,
                            lineHeight: 1.6,
                          }}
                        >
                          {step.userNeed}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "1px",
                        backgroundColor: "#275F55",
                        opacity: 0.3,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <p
                        className="font-avenir"
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          marginBottom: "12px",
                        }}
                      >
                        End Customer needs
                      </p>
                      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <div style={{ width: "40px", height: "40px", flexShrink: 0, position: "relative" }}>
                          <Image
                            src="/projects/ai-cloud/avatar-customer.png"
                            alt="Customer"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p
                          className="font-avenir"
                          style={{
                            fontSize: "15px",
                            fontWeight: 400,
                            lineHeight: 1.6,
                          }}
                        >
                          {step.customerNeed}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {i < journeySteps.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "8px 0",
                    }}
                  >
                    <svg
                      width="16"
                      height="32"
                      viewBox="0 0 16 32"
                      fill="none"
                    >
                      <path
                        d="M8 0 L8 24 M2 18 L8 26 L14 18"
                        stroke="#275F55"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <h2
            className="font-merriweather font-bold"
            style={{
              fontSize: "36px",
              color: "#275F55",
              marginBottom: "40px",
            }}
          >
            Vision
          </h2>

          {/* Current vs Future State Table */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "48px",
              rowGap: "16px",
              marginBottom: "64px",
            }}
          >
            <p
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 800,
                paddingBottom: "16px",
                borderBottom: "1px solid #275F55",
                marginBottom: "8px",
              }}
            >
              Current State
            </p>
            <p
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 800,
                paddingBottom: "16px",
                borderBottom: "1px solid #275F55",
                marginBottom: "8px",
              }}
            >
              Future State
            </p>
            {currentState.map((item, i) => (
              <Fragment key={i}>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: 1.7,
                  }}
                >
                  {item}
                </p>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: 1.7,
                  }}
                >
                  {futureState[i]}
                </p>
              </Fragment>
            ))}
          </div>

          {/* Competitors: Spreadsheets */}
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "40px" }}
          >
            Our competitors...spreadsheets
          </h3>
          <div
            style={{
              display: "flex",
              gap: "32px",
              alignItems: "flex-end",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                flex: "1 1 55%",
                position: "relative",
                aspectRatio: "803 / 556",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/projects/ai-cloud/spreadsheet.png"
                alt="Spreadsheet example"
                fill
                className="object-cover"
              />
            </div>
            <div style={{ flex: "1 1 40%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "28px" }}>
              {[
                { pro: "Highly customizable", con: "Prone to error" },
                { pro: "Easy to read", con: "No intelligent insights" },
                { pro: "Fast to use", con: "Unreliable system of record" },
              ].map((pair) => (
                <div key={pair.pro} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span
                      className="font-merriweather font-bold"
                      style={{ fontSize: "28px", color: "#1b6e30", lineHeight: 1 }}
                    >
                      +
                    </span>
                    <p
                      className="font-merriweather font-bold"
                      style={{ fontSize: "20px", color: "#1b6e30", lineHeight: 1.4 }}
                    >
                      {pair.pro}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span
                      className="font-merriweather font-bold"
                      style={{ fontSize: "28px", color: "#6e1b1b", lineHeight: 1 }}
                    >
                      &minus;
                    </span>
                    <p
                      className="font-merriweather font-bold"
                      style={{ fontSize: "20px", color: "#6e1b1b", lineHeight: 1.4 }}
                    >
                      {pair.con}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p
            className="font-avenir"
            style={{
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.75,
            }}
          >
            Therefore, our goal was to keep the ease and speed of spreadsheets,
            but design more reliant and smarter ways of working.
          </p>
        </section>

        {/* Design Plan */}
        <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <h2
            className="font-merriweather font-bold"
            style={{
              fontSize: "36px",
              color: "#275F55",
              marginBottom: "40px",
            }}
          >
            Design Plan
          </h2>
          <div style={{ display: "flex", gap: "40px", marginBottom: "48px" }}>
            {designPlan.columns.map((col) => (
              <div key={col.title} style={{ flex: 1 }}>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    marginBottom: "8px",
                  }}
                >
                  {col.title}
                </p>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {col.subtitle}
                </p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            {designPlan.columns.map((col) => (
              <div
                key={col.title}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {col.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      border: "1px solid #275F55",
                      borderRadius: "8px",
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      className="font-avenir"
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
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
              fontWeight: 400,
              lineHeight: 1.75,
              marginBottom: "48px",
            }}
          >
            The MVP (minimum viable product) covers 3 solutions that provide the
            Capacity Planners the capabilities to support customer needs:
          </p>

          {/* Solution 1 */}
          <div style={{ marginBottom: "64px" }}>
            <h3
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 800,
                marginBottom: "24px",
              }}
            >
              Solution 1: Unified dashboards for supply, demand, and status evaluation
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
              <p style={{ marginBottom: "8px" }}>As a planner...</p>
              <p style={{ marginBottom: "8px" }}>
                I am able to{" "}
                <strong>sync budget with real-time supply and demand</strong>,
                instead of manual data checking, which is{" "}
                <strong>improving my forecast accuracy</strong>.
              </p>
              <p style={{ marginBottom: "8px" }}>
                I am able to{" "}
                <strong>
                  track milestone readiness leading up to delivery
                </strong>
                , instead of guessing readiness and fulfillment timelines, which is{" "}
                <strong>improving my ability to deliver on time</strong>.
              </p>
              <p>
                I am able to{" "}
                <strong>
                  prioritize capacity requests based on customer need and business impact
                </strong>
                , instead of reactive fire-fighting, which is{" "}
                <strong>
                  improving my strategic alignment with leadership goals
                </strong>
                .
              </p>
            </div>
            <div style={{ position: "relative", marginBottom: "8px" }}>
              <Image
                src="/projects/ai-cloud/screenshot-1.png"
                alt="Unified dashboard solution"
                width={1452}
                height={919}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                }}
              />
            </div>
            <p
              className="font-avenir"
              style={{
                fontSize: "14px",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#666",
                lineHeight: 1.4,
              }}
            >
              Anonymized for privacy: This AI-generated preview captures the
              vibe and functionality of the real-world solution
            </p>
          </div>

          {/* Solution 2 */}
          <div style={{ marginBottom: "64px" }}>
            <h3
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 800,
                marginBottom: "24px",
              }}
            >
              Solution 2: Scenario Playground
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
              <p style={{ marginBottom: "8px" }}>As a planner...</p>
              <p style={{ marginBottom: "8px" }}>
                I am able to{" "}
                <strong>
                  test various supply and demand matches using confidence
                  indicators
                </strong>
                , instead of working with static assumptions, which is{" "}
                <strong>
                  improving my ability to test business impact scenarios
                </strong>
                .
              </p>
              <p style={{ marginBottom: "8px" }}>
                I am able to{" "}
                <strong>
                  create strategic deliveries mapped to nuanced customer needs
                </strong>
                , instead of one-size-fits-all shipping, which is{" "}
                <strong>improving my customer experiences</strong>.
              </p>
              <p>
                I am able to{" "}
                <strong>
                  fulfill holistic requests by coordinating all required
                  resources
                </strong>
                , instead of managing components in silos, which is{" "}
                <strong>ensuring customer requests are fully met</strong>.
              </p>
            </div>
            <div style={{ position: "relative", marginBottom: "8px" }}>
              <Image
                src="/projects/ai-cloud/screenshot-2.png"
                alt="Scenario Playground solution"
                width={1452}
                height={1110}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                }}
              />
            </div>
            <p
              className="font-avenir"
              style={{
                fontSize: "14px",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#666",
                lineHeight: 1.4,
              }}
            >
              Anonymized for privacy: This AI-generated preview captures the
              vibe and functionality of the real-world solution
            </p>
          </div>

          {/* Solution 3 */}
          <div style={{ marginBottom: "64px" }}>
            <h3
              className="font-avenir"
              style={{
                fontSize: "17px",
                fontWeight: 800,
                marginBottom: "24px",
              }}
            >
              Solution 3: Fulfillment Tracking
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
              <p style={{ marginBottom: "8px" }}>As a planner,</p>
              <p style={{ marginBottom: "8px" }}>
                I am able to{" "}
                <strong>
                  monitor delivery throughout the entire handover lifecycle
                </strong>
                , instead of losing visibility after initiating delivery, which
                is{" "}
                <strong>
                  improving the thoroughness of addressing blockers
                </strong>
                .
              </p>
              <p>
                As a planner, I am able to{" "}
                <strong>
                  evaluate overall profitability, business impact, and customer satisfaction
                </strong>
                , ensuring that chips do not sit idle.
              </p>
            </div>
            <div style={{ position: "relative", marginBottom: "8px" }}>
              <Image
                src="/projects/ai-cloud/screenshot-3.png"
                alt="Fulfillment Tracking solution"
                width={1452}
                height={1078}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                }}
              />
            </div>
            <p
              className="font-avenir"
              style={{
                fontSize: "14px",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#666",
                lineHeight: 1.4,
              }}
            >
              Anonymized for privacy: This AI-generated preview captures the
              vibe and functionality of the real-world solution
            </p>
          </div>
        </section>

        {/* Impact */}
        <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <h2
            className="font-merriweather font-bold"
            style={{
              fontSize: "36px",
              color: "#275F55",
              marginBottom: "40px",
            }}
          >
            Impact
          </h2>

          {/* User Impact */}
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "32px" }}
          >
            User Impact
          </h3>
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            {userImpact.map((item) => (
              <div
                key={item.num}
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
                  style={{ fontSize: "17px", fontWeight: 800 }}
                >
                  {item.num}. {item.title}
                </p>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    color: "#444",
                  }}
                >
                  {item.quote}
                </p>
              </div>
            ))}
          </div>

          {/* Business Impact */}
          <h3
            className="font-merriweather font-bold"
            style={{ fontSize: "36px", marginBottom: "32px" }}
          >
            Business Impact
          </h3>
          <div style={{ display: "flex", gap: "24px" }}>
            {businessImpact.map((item) => (
              <div
                key={item.num}
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
                  style={{ fontSize: "17px", fontWeight: 800 }}
                >
                  {item.num}. {item.title}
                </p>
                <p
                  className="font-avenir"
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Next */}
        <section style={{ paddingTop: "80px", paddingBottom: "120px" }}>
          <h2
            className="font-merriweather font-bold"
            style={{
              fontSize: "36px",
              color: "#275F55",
              marginBottom: "24px",
            }}
          >
            What&apos;s Next?
          </h2>
          <p
            className="font-avenir"
            style={{
              fontSize: "17px",
              fontWeight: 800,
              lineHeight: 1.75,
              marginBottom: "24px",
            }}
          >
            Building on feedback from the MVP, we are evolving the product suite
            to strengthen cross-product collaboration and refine information
            architecture, with a focus on making planning workflows more
            intuitive and scalable.
          </p>
          <p
            className="font-avenir"
            style={{
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.75,
              marginBottom: "12px",
            }}
          >
            Some solutions we are currently building post-MVP:
          </p>
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
              Established communication across stakeholders.
            </li>
            <li>
              Helping users evaluate impact and risk of their decisions.
            </li>
            <li>
              Added transparency for more accurate decision-making.
            </li>
          </ol>
        </section>
      </div>

      <Footer />
    </div>
  );
}
