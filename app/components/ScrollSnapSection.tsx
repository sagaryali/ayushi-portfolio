export default function ScrollSnapSection({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <section
      style={{
        ...style,
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
      }}
    >
      {children}
    </section>
  );
}
