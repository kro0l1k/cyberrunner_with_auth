import React from "react";
import Spline from "@splinetool/react-spline";

const Home: React.FC = () => {
  return (
    <main
      style={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        minHeight: "100vh",
      }}
    >
      <div style={{ height: "70vh", marginBottom: "2rem" }}>
        <Spline scene="https://prod.spline.design/3lEZMizMlBTTfd9K/scene.splinecode" />
      </div>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        CYBERRUNNER CHALLENGE{" "}
        <span style={{ color: "#ff00ff" }}>REMAINS UNDEFEATED</span>.
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
        Learn robotics and embboddied AI with an open-sourced platform.
      </p>
      <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
        Hardware is hard. But you can master it.
      </p>
      <button
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#89CFF0", // Changed to baby blue
          border: "none",
          borderRadius: "4px",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
        onClick={() => window.open("https://discord.gg/VaBsTHQx", "_blank")}
      >
        JOIN THE DISCORD
      </button>
      <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
        Get your hardware kit
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          margin: "0 auto",
          maxWidth: "900px",
        }}
      >
        <section
          style={{
            border: "1px solid #555",
            padding: "1rem",
            margin: "1rem 0",
            width: "400px",
          }}
        >
          <h2 style={{ textDecoration: "underline", marginBottom: "0.5rem" }}>
            Order a hardware kit from us.
          </h2>
          <p>Select which parts you need</p>
          <p>and build your own robot</p>
          <button
            style={{
              display: "inline-block",
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#89CFF0",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
            onClick={() => window.open("https://tally.so/r/wz14pg", "_blank")}
          >
            Fill out this form.
          </button>
          <p> We'll email you when this is ready.</p>
        </section>
        <section
          style={{
            border: "1px solid #555",
            padding: "1rem",
            margin: "1rem 0",
            width: "400px",
          }}
        >
          <h2 style={{ textDecoration: "underline", marginBottom: "0.5rem" }}>
            Bill of materials
          </h2>
          <p>Order needed parts yourself</p>
          <p>Improve. Hack. Contribute.</p>
          <button
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#89CFF0",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
            onClick={() =>
              window.open(
                "https://cyberrunner.readthedocs.io/en/latest/01_hardware_setup/",
                "_blank"
              )
            }
          >
            Oder the parts yourself.
          </button>
        </section>
      </div>
    </main>
  );
};

export default Home;
