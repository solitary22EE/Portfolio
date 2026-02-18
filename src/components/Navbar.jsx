import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <nav className="fixed w-full bg-white dark:bg-slate-900 shadow z-50">
      {/* <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-indigo-600">Rajkumar</h1>

        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          onClick={() => setDark(!dark)}
          className="bg-indigo-600 text-white px-3 py-1 rounded"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div> */}

       <h1 className="text-3xl font-bold underline primary">
      Hello world!
    </h1>
    </nav>
  );
}

export default Navbar;
