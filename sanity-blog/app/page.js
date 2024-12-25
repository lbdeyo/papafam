import BackgroundOrchid from "@/components/BackgroundOrchid";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1c1c1c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
      <BackgroundOrchid />
      <div style={{textAlign: "center", zIndex: 10}}>
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            padding: "2.5rem",
          }}>
          TEST PAGE
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "1.25rem",
          }}>
          If you can see this, Next.js is working!
        </p>
      </div>
    </div>
  );
}
