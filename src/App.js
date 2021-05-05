import React from "react";
import TopBar from "./components/TopBar";
import AboutMe from "./components/AboutMe";
import ProjectGallery from "./components/ProjectGallery";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Community from "./components/Community";
import Testimonials from "./components/Testimonials";
import Contact from "./components/GetInTouch";

import "./App.css";

function App() {
  return (
    <div className="app">
      <TopBar />
      <AboutMe />
      <ProjectGallery />
      <Education />
      <Experience />
      <Community />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
