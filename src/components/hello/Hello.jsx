import "./hello.css";
import { data } from "../../data/data.js";
import { motion } from "framer-motion";
import ScrollAnimatedSection from "../animations/ScrollAnimatedSection.jsx";
import { lazy, Suspense } from "react";

// Lazy load the heavy Three.js canvas
const TorusCanvas = lazy(() => import("./ThreeCanvas.jsx"));

const HelloSection = () => {
  //   const scrollToContact = () => {
  //     const sectionId = "contact";
  //     const section = document.getElementById(sectionId);
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };
  const scrollToWork = () => {
    const sectionId = "work";
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="content-container">
      <div className="torus-wrapper">
        <Suspense fallback={<div />}>
          <TorusCanvas />
        </Suspense>
      </div>
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
          <p className="logo-tags text-body-large">
            {data.helloSection.logo.tags}
          </p>
        </motion.div>
        <motion.p
          className="hello-section_title text-header-variant"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {data.helloSection.hello.subtext}
        </motion.p>
        <h1 className="hello-section_body-1 text-header-large">
          {data.helloSection.hello.body}
        </h1>
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
            <div className="hello-cube_wrapper">
              <div className="cube-container">
                <div className="cube">
                  <div className="face front"></div>
                  <div className="face back"></div>
                  <div className="face left"></div>
                  <div className="face right"></div>
                  <div className="face top"></div>
                  <div className="face bottom"></div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimatedSection>
      </motion.section>
    </div>
  );
};

export default HelloSection;
