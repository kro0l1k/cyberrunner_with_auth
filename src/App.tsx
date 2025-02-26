import { useState } from "react";

import "./App.css";

import Header from "./Header"; // Import the new Header component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Challenge from "./Challenge"; // Import the Challenge component
import Tutorials from "./Tutorials"; // New import for Tutorials
import Home from "./Home"; // New Home component

interface StyleMap {
  [key: string]: React.CSSProperties;
}

const styles: StyleMap = {
  container: {
    width: "90%", // New width for the entire website
    margin: "0 auto", // Center the content horizontally
    minHeight: "100vh",
    backgroundColor: "#000", // Ensuring the background is black
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
  return (
    <Router>
      <div style={styles.container}>
        <Header /> {/* Use the new Header component */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Homepage content */}
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/tutorials" element={<Tutorials />} />{" "}
          {/* New Route for Tutorials */}
          {/* New Route for Questionnaire */}
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
