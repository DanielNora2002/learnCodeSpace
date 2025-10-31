/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import Education from "./Components/Education";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Daniel Nora",
  title: "Front-end Developer & UI Designer",
  email: "DanielNora1212@gmail.com",
  gitHub: "DanielNora2002",
  instagram: "danielnora",
  linkedIn: "danielnora",
  medium: "",
  twitter: "danielnora",
  youTube: "danielnora",
};
const primaryColor = "#2D3250"; // Deep blue-purple for a professional look
const secondaryColor = "#F8B179"; // Warm coral accent color

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
