import React from "react";
import "./Challenge.css";

const Challenge: React.FC = () => {
  return (
    <main>
      <div className="challenge-container">
        <section className="hero-section">
          <h1>MASTER THE MAZE</h1>
          <p className="subtitle">
            Train an AI to conquer the labyrinth in record time
          </p>
        </section>

        <section className="video-section">
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/zQMKfuWZRdA"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="about-section">
          <div className="text-content">
            <h2>WHAT IS CYBERRUNNER?</h2>
            <p>
              CyberRunner is an autonomous system based on the classic labyrinth
              board game, developed through groundbreaking research at ETH
              Zurich by Thomas Bi and Raffaelo D'Andrea. Using advanced
              model-based reinforcement learning, it learns to master the game
              through experience, surpassing human performance.
            </p>
            <p>
              The system uses a camera as its "eyes" and two motors as its
              "hands" to navigate the marble through the maze, learning and
              improving with each attempt.
            </p>
          </div>
        </section>

        <section className="challenge-details">
          <div className="card">
            <h3>GRAND CHALLENGE</h3>
            <p>
              Train an algorithm that can solve any unseen maze within 10
              minutes
            </p>
            <p>Prize Pool: $10,000+</p>
            <p>Deadline: June 2025</p>
          </div>

          <div className="bounties-grid">
            <h3>MONTHLY BOUNTIES</h3>
            <div className="bounty-cards">
              <div className="card">
                <h4>MARCH 2025</h4>
                <p>Set up your environment and run first simulation</p>
                <p>Reward: Hardware testing time</p>
              </div>
              <div className="card">
                <h4>APRIL 2025</h4>
                <p>Achieve basic maze navigation</p>
                <p>Reward: Custom hardware kit</p>
              </div>
              <div className="card">
                <h4>MAY 2025</h4>
                <p>Complete advanced challenges</p>
                <p>Reward: Mentorship session</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Challenge;
