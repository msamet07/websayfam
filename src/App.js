import React, { useEffect, useState } from "react";
import Introduction from "./components/Introduction";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
import ThemeChanger from './components/theme/ThemeChanger'
import { DataContext } from "./context/DataContext";
import { isDarkMode } from "./functions";
import { languages } from "./data/languages";

function App() {


  const [langPre, setLangPre] = useState(localStorage.getItem("lang"));
  const [theme, setTheme] = useState(
    localStorage.theme
      ? localStorage.getItem("theme")
      : isDarkMode() === true
        ? "dark"
        : "light"
  );
  localStorage.setItem("theme", theme);
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });
  }, []);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", false);
  }, []);
  const themeHandler = (e) => {
    setTheme(localStorage.theme === "dark" ? "light" : "dark");
  };

  const langHandler = (e) => {
    setLangPre(!langPre);
    localStorage.setItem("lang", langPre);
  };

  const content = langPre === true ? languages.tr : languages.en;
  const contentProjects = langPre === true ? `tr` : `en`;



  return (
    <DataContext.Provider
      value={{
        content,
        themeHandler,
        theme,
        langPre,
        langHandler,
        contentProjects,
      }}
    >
      <ThemeChanger />
      <header className="flex">
        <div className="logo">
          <a href="#">MD</a>
        </div>
        <nav className="headerLink">
          <a href="#skills" className="hover">
            Skills
          </a>
          <a href="#projects" className="hover">
            Projects
          </a>
          <a href="#profile" className="hover">
            Profile
          </a>
          <a href="#contact" id="contactLink" className="hover">
            Contact Me!
          </a>
        </nav>
      </header>
      <Introduction />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </DataContext.Provider>
  );
}

export default App;
