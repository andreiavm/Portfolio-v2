import "./hello.css";
import { data } from "../../data/data.js";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimatedSection from "../animations/ScrollAnimatedSection.jsx";

const skullMask = [
  "          ####################          ",
  "        ########################        ",
  "      ############################      ",
  "     ##############################     ",
  "    ################################    ",
  "   ##################################   ",
  "  ####################################  ",
  "  ####################################  ",
  "  ####################################  ",
  "  ####################################  ",
  "  ###   ##########    ##########   ###  ",
  "  ###   ##########    ##########   ###  ",
  "  ###   ##########    ##########   ###  ",
  "  ###   ##########    ##########   ###  ",
  "  ####################################  ",
  "  ##############  ####  ##############  ",
  "  ###############  ##  ###############  ",
  "  ####################################  ",
  "  ##  ####  ####  ####  ####  ####  ##  ",
  "  ##  ####  ####  ####  ####  ####  ##  ",
  "      ####      ####      ####          ",
  "      ####      ####      ####          ",
];

const noise = "01010110101011010101101010110101010011";
const extras = "!@#$%&ABCDEFabcdef:;.,|/\\^*+-=";
const allChars = noise + extras;

const randChar = () =>
  Math.random() < 0.8
    ? Math.random() < 0.5
      ? "0"
      : "1"
    : allChars[Math.floor(Math.random() * allChars.length)];

const createSkullGrid = () =>
  skullMask.map((row) =>
    row
      .split("")
      .map((cell) => (cell === "#" ? randChar() : " "))
      .join("")
  );

function SkullAscii() {
  const [skullFrame, setSkullFrame] = useState(() => createSkullGrid().join("\n"));

  useEffect(() => {
    const grid = createSkullGrid().map((row) => row.split(""));

    const intervalId = window.setInterval(() => {
      const nextGrid = grid.map((row, rowIndex) =>
        row.map((cell, columnIndex) => {
          if (skullMask[rowIndex][columnIndex] === "#" && Math.random() < 0.08) {
            return randChar();
          }

          return cell;
        })
      );

      nextGrid.forEach((row, rowIndex) => {
        grid[rowIndex] = row;
      });

      setSkullFrame(nextGrid.map((row) => row.join("")).join("\n"));
    }, 80);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="hello-skull_wrapper" aria-hidden="true">
      <pre className="hello-skull">{skullFrame}</pre>
    </div>
  );
}

const HelloSection = ({ theme, onToggleTheme }) => {
    const scrollToContact = () => {
      const sectionId = "contact";
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  const scrollToWork = () => {
    const sectionId = "work";
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="content-container">
      <motion.section
        id="hello"
        className="hello-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="hello-logo-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="logo">
            <p className="logo-text text-body-large">
              {data.helloSection.logo.text}
            </p>
          </div>
          <button 
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            aria-pressed={theme === "dark"}
          >
            <span className="theme-toggle_label">
              {theme === "dark" ? "dark" : "light"}
            </span>
            <span className="theme-toggle_track" aria-hidden="true">
              <span className="theme-toggle_icon" />
            </span>
          </button>
        </motion.div>
        <motion.p
          className="hello-section_title text-header-variant"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {data.helloSection.hello.subtext}
        </motion.p>
        <motion.h1
          className="hello-section_body-1 text-header-large"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {data.helloSection.hello.body}
        </motion.h1>
        <motion.div
          className="key-facts"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="key-fact-item">
            <p className="hello-section_body-2 text-body-large">
              {data.helloSection.hello.body2}
            </p>
          </div>
          <div className="key-fact-item">
            <p className="hello-section_body-3 text-body-large">
              {data.helloSection.hello.body3}
            </p>
          </div>
        </motion.div>
                    <motion.div
              className="hello-link-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="#work"
                className="hello-link text-header-variant"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToWork();
                }}
              >
                view my work <span aria-hidden="true">↗</span>
              </a>
            </motion.div>
            <ScrollAnimatedSection animationType="scale" delay={0.5}>
              <section className="about-section_fact-wrapper">
                <SkullAscii />
              </section>
        </ScrollAnimatedSection>
      </motion.section>
    </div>
  );
};

export default HelloSection;
