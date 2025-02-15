import React from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

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
      <div style={styles.logo}>CYBERRUNNER</div>
      <nav style={styles.nav}>
        <Link to="/tutorials" style={styles.link}>
          Tutorials
        </Link>
        <Link to="/challenge" style={styles.link}>
          Challenge
        </Link>
        <Link to="/github" style={styles.link}>
          GitHub
        </Link>
        <Link to="/docs" style={styles.link}>
          Docs
        </Link>
        <Link to="/signup" style={styles.link}>
          2025 Signup
        </Link>
      </nav>
      <div style={styles.authButtons}>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
