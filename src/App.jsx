import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import "./App.css";
import "./index.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//     </>
//   );
// }

// export default App;
export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <h1 className="text-5xl font-bold text-red-500">
        Tailwind Working ✅
      </h1>
    </div>
  )
}
