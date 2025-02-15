import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Header from "./Header"; // Import the new Header component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Challenge from "./Challenge"; // Import the Challenge component

interface StyleMap {
  [key: string]: React.CSSProperties;
}

const styles: StyleMap = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "monospace",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#111",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
  },
  highlight: {
    color: "#ff00ff", // Example accent color
  },
  challengeSection: {
    marginTop: "2rem",
    border: "1px solid #555",
    padding: "1rem",
    maxWidth: "400px",
    width: "100%",
  },
  challengeHeading: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    textDecoration: "underline",
  },
  joinButton: {
    marginTop: "2rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#ff00ff",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleJoinClick = () => {
    // Navigate to your "about the challenge" page
    console.log("Join the challenge");
  };

  return (
    <Router>
      <div style={styles.container}>
        <Header /> {/* Use the new Header component */}
        <main style={styles.main}>
          <h1 style={styles.title}>
            CYBERRUNNER CHALLENGE{" "}
            <span style={styles.highlight}>REMAINS UNDEFEATED</span>.
          </h1>
          <p style={styles.subtitle}>
            Train an algorithm to solve unseen mazes in 10 minutes.
          </p>
          <p style={styles.subtitle}>
            $10,000 prize pool for the grand challenge.
          </p>

          <div style={styles.challengeSection}>
            <h2 style={styles.challengeHeading}>Grand Challenge</h2>
            <p>Solve unseen mazes in 10 minutes</p>
            <p>Deadline: June 2025</p>
          </div>

          <div style={styles.challengeSection}>
            <h2 style={styles.challengeHeading}>Bounties</h2>
            <p>Complete smaller challenges</p>
            <p>Win hardware time and prizes</p>
          </div>

          <button style={styles.joinButton} onClick={handleJoinClick}>
            JOIN THE CHALLENGE
          </button>
        </main>
        <Routes>
          <Route path="/challenge" element={<Challenge />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
