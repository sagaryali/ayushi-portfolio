import Nav from "../../components/Nav";

export default function Project2() {
  return (
    <div style={{ backgroundColor: "#FDF6EC", minHeight: "100vh" }}>
      <Nav />
      <section className="px-16 pt-20">
        <h1
          className="font-merriweather font-bold"
          style={{ fontSize: "64px" }}
        >
          Philips X Gates Foundation: AI for Maternal Healthcare
        </h1>
        <p
          className="font-avenir text-black mt-8 max-w-3xl"
          style={{ fontSize: "24px", fontWeight: 400 }}
        >
          Case study content coming soon.
        </p>
      </section>
    </div>
  );
}
