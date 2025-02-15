import React from "react";
import "./tutorials.css";

const Tutorials: React.FC = () => {
  return (
    <main className="tutorials-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>BUILD YOUR CYBERRUNNER</h1>
        <p className="subtitle">
          Complete step-by-step guide to building and training your robot
        </p>
      </section>
      {/* Resources Section */}
      <section className="resources-section">
        <div className="primary-resources">
          <h2>MAIN RESOURCES</h2>
          <div className="resource-links">
            <a
              href="https://github.com/thomasbi1/cyberrunner"
              target="_blank"
              rel="noreferrer"
              className="resource-link"
            >
              <span>📦</span>
              <span>GitHub Repository</span>
            </a>
            <a
              href="https://cyberrunner.readthedocs.io/en/latest/"
              target="_blank"
              rel="noreferrer"
              className="resource-link"
            >
              <span>📚</span>
              <span>Documentation</span>
            </a>
          </div>
        </div>
      </section>
      {/* Tutorials Grid */}
      <section className="tutorials-grid">
        <div className="tutorial-card">
          <div>
            <h3>01. HARDWARE SETUP</h3>
            <p>
              Learn how to build the physical components of your CyberRunner
            </p>
          </div>
          <a
            href="https://cyberrunner.readthedocs.io/en/latest/01_hardware_setup/"
            target="_blank"
            rel="noreferrer"
            className="tutorial-link"
          >
            View Guide →
          </a>
        </div>
        <div className="tutorial-card">
          <div>
            <h3>02. RELOAD MECHANISM</h3>
            <p>Set up the automatic ball reload system</p>
          </div>
          <a
            href="https://cyberrunner.readthedocs.io/en/latest/02_reload/"
            target="_blank"
            rel="noreferrer"
            className="tutorial-link"
          >
            View Guide →
          </a>
        </div>
        <div className="tutorial-card">
          <div>
            <h3>03. SOFTWARE INSTALLATION</h3>
            <p>Install and configure the required software components</p>
          </div>
          <a
            href="https://cyberrunner.readthedocs.io/en/latest/03_installation/"
            target="_blank"
            rel="noreferrer"
            className="tutorial-link"
          >
            View Guide →
          </a>
        </div>
        <div className="tutorial-card">
          <div>
            <h3>04. SYSTEM CONFIGURATION</h3>
            <p>Configure camera, motors, and markers for optimal performance</p>
          </div>
          <a
            href="https://cyberrunner.readthedocs.io/en/latest/04_initial_config/"
            target="_blank"
            rel="noreferrer"
            className="tutorial-link"
          >
            View Guide →
          </a>
        </div>
        <div className="tutorial-card">
          <div>
            <h3>05. TRAINING</h3>
            <p>Learn how to train the reinforcement learning algorithm</p>
          </div>
          <a
            href="https://cyberrunner.readthedocs.io/en/latest/05_train/"
            target="_blank"
            rel="noreferrer"
            className="tutorial-link"
          >
            View Guide →
          </a>
        </div>
        <div className="tutorial-card">
          <div>
            <h3>06. TROUBLESHOOTING</h3>
            <p>Solutions to common problems and issues</p>
          </div>
          <a
            href="https://cyberrunner.readthedocs.io/en/latest/06_troubleshooting/"
            target="_blank"
            rel="noreferrer"
            className="tutorial-link"
          >
            View Guide →
          </a>
        </div>
      </section>
    </main>
  );
};

export default Tutorials;
