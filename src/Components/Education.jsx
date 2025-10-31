import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center", marginBottom: "3rem", color: "#2D3250" }}>Education</h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem"
      }}>
        <div style={{
          background: "rgba(248,177,121,0.1)",
          padding: "2.5rem",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          border: "1px solid rgba(248,177,121,0.2)",
          maxWidth: "600px",
          width: "100%"
        }}>
          <h3 style={{
            color: "#F8B179",
            fontSize: "1.8rem",
            marginBottom: "1rem"
          }}>
            Computer Engineering
          </h3>
          <p style={{
            fontSize: "1.2rem",
            color: "#2D3250",
            marginBottom: "0.5rem",
            fontWeight: "600"
          }}>
            2024 - Present
          </p>
          <p style={{
            fontSize: "1.4rem",
            color: "#2D3250",
            marginBottom: "1rem"
          }}>
            Tarrant County College
          </p>
          <p style={{
            fontSize: "1.1rem",
            color: "#4a4a4a",
            lineHeight: "1.6"
          }}>
            Currently pursuing a degree in Computer Engineering, focusing on building a strong foundation in both hardware and software development. Developing skills in programming, circuit design, and computer architecture while maintaining a dedication to academic excellence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education;