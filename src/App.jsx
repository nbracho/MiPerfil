import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Cookies from 'universal-cookie';

export default function App() {
  const cookies = new Cookies();
cookies.set({secure: true, sameSite: 'none'});
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      

      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />

    </main>
  );
}