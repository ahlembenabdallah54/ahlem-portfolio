
import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero/Hero";
import Story from "./sections/Story/Story";
import Expertise from "./sections/Expertise/Expertise";
import Work from "./sections/Work/Work";
import Beyond from "./sections/Beyond/Beyond";
import Contact from "./sections/Contact/Contact";

import {
  projects,
  skills,
  milestones
} from "./data/portfolio";

export default function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Navbar />

      <main>
        <Hero />
        <Story milestones={milestones} />
        <Expertise skills={skills} />
        <Work projects={projects} />
        <Beyond />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
