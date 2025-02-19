import React from "react";
import Spline from '@splinetool/react-spline';


const Home: React.FC = () => {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <div style={{ height: "70vh", marginBottom: "2rem" }}>
        <Spline scene="https://prod.spline.design/3lEZMizMlBTTfd9K/scene.splinecode" />
      </div>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        CYBERRUNNER CHALLENGE{" "}
        <span style={{ color: "#ff00ff" }}>REMAINS UNDEFEATED</span>.
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
        Train an algorithm to solve unseen mazes in 10 minutes.
      </p>
      <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
        $10,000 prize pool for the grand challenge.
      </p>
      <section
        style={{
          border: "1px solid #555",
          padding: "1rem",
          margin: "1rem auto",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textDecoration: "underline", marginBottom: "0.5rem" }}>
          Grand Challenge
        </h2>
        <p>Solve unseen mazes in 10 minutes</p>
        <p>Deadline: June 2025</p>
      </section>
      <section
        style={{
          border: "1px solid #555",
          padding: "1rem",
          margin: "1rem auto",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textDecoration: "underline", marginBottom: "0.5rem" }}>
          Bounties
        </h2>
        <p>Complete smaller challenges</p>
        <p>Win hardware time and prizes</p>
      </section>
      <button
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#ff00ff",
          border: "none",
          borderRadius: "4px",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
        onClick={
          () => {
            console.log("Join the challenge"),
              (window.location.href = "https://discord.gg/WD5BSAUf");
          }
          // take the user to the link https://discord.gg/WD5BSAUf
        }
      >
        JOIN THE DISCORD CHANNEL TO LEARN MORE!
      </button>
    </main>
  );
};

export default Home;
