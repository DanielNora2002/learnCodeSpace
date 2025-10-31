/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #1a1f35 0%, #2D3250 100%)",
          padding: "0 8rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left side - Text content */}
        <div
          style={{
            color: "#ffffff",
            maxWidth: "600px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1 
            style={{ 
              fontSize: "4.5rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(135deg, #ffffff 0%, #F8B179 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(248, 177, 121, 0.3)",
            }}
          >
            {name}
          </h1>
          <h2 
            style={{ 
              fontSize: "2rem",
              marginBottom: "2rem",
              color: "#F8B179",
              fontWeight: "300",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#ffffff",
              opacity: 0.9,
              marginBottom: "2.5rem",
            }}
          >
            Crafting beautiful and intuitive digital experiences through clean code and modern design.
          </p>
          <a
            href="#portfolio"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              backgroundColor: "#F8B179",
              color: "#1a1f35",
              textDecoration: "none",
              borderRadius: "30px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
            onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
            onFocus={(e) => (e.target.style.transform = "translateY(-2px)")}
            onBlur={(e) => (e.target.style.transform = "translateY(0)")}
          >
            View My Work
          </a>
        </div>

        {/* Right side - Decorative elements */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-5rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(248,177,121,0.1) 0%, rgba(248,177,121,0) 70%)",
              borderRadius: "50%",
              animation: "pulse 4s infinite",
            }}
          />
        </div>

        {/* Scroll indicator */}
        <div 
          style={{ 
            position: "absolute", 
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "bounce 2s infinite",
          }}
        >
          <img
            src={arrowSvg}
            style={{
              height: "2.5rem",
              width: "2.5rem",
              filter: "brightness(0) invert(1)",
              opacity: 0.7,
            }}
            alt="Scroll down"
          />
        </div>

        {/* Add some floating shapes for visual interest */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "15%",
            width: "100px",
            height: "100px",
            background: "linear-gradient(135deg, rgba(248,177,121,0.1) 0%, rgba(45,50,80,0.1) 100%)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            animation: "float 6s infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "25%",
            width: "150px",
            height: "150px",
            background: "linear-gradient(135deg, rgba(248,177,121,0.05) 0%, rgba(45,50,80,0.05) 100%)",
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
            animation: "float 8s infinite",
          }}
        />
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(-10px, -10px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes pulse {
            0% { transform: translateY(-50%) scale(1); opacity: 0.5; }
            50% { transform: translateY(-50%) scale(1.1); opacity: 0.3; }
            100% { transform: translateY(-50%) scale(1); opacity: 0.5; }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
            40% { transform: translateY(-10px) translateX(-50%); }
            60% { transform: translateY(-5px) translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
