import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Questionnaire: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    experience: "",
    city: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/api/submit-questionnaire",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Submission failed");
      }

      alert("Thank you for your submission!");
      navigate("/");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your response. Please try again.");
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>Hardware Kit Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Email:
            <input
              type="email"
              required
              style={{ width: "100%", padding: "0.5rem" }}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Robotics Experience:
            <textarea
              required
              style={{ width: "100%", padding: "0.5rem", minHeight: "100px" }}
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
              placeholder="Please describe your robotics experience and what you've built"
            />
          </label>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            City:
            <input
              type="text"
              required
              style={{ width: "100%", padding: "0.5rem" }}
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#ff00ff",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Questionnaire;
