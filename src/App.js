import './styles.css'
import React from "react";

import Nav from "./components/Nav"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

export default function App() {
  return (
    <main>
      <Nav />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}