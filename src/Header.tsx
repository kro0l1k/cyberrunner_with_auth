import React from "react";
import { Link } from "react-router-dom";

interface StyleMap {
  [key: string]: React.CSSProperties;
}

const styles: StyleMap = {
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
  authButtons: {
    display: "flex",
    gap: "1rem",
  },
};

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>
        🦾 CYBERRUNNER
      </Link>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/challenge" style={styles.link}>
          Challenge
        </Link>
        <Link to="/tutorials" style={styles.link}>
          Tutorials
        </Link>
      </nav>
    </header>
  );
};

export default Header;
