import "./hello.css";
import { data } from "../../data/data.js";
import ButtonPrimary from "../button/ButtonPrimary.jsx";
// import ButtonSecondary from "../button/ButtonSecondary.jsx";
import TorusCanvas from "./ThreeCanvas.jsx";
import TypewriterText from "./TypewriterText.jsx";
import { motion } from "framer-motion";
import ScrollAnimatedSection from "../animations/ScrollAnimatedSection.jsx";

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
        <TorusCanvas />
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
        
        <motion.h1 
          className="hello-section_title text-huge"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="typewriter-desktop">
            <TypewriterText 
              texts={["hello world ", "my name is Andrei", "welcome to my page"]}
              speed={100}
              deleteSpeed={50}
              pauseTime={2000}
            />
          </span>
          <span className="static-mobile">hello world</span>
        </motion.h1>
        
        <motion.h2 
          className="hello-section_body-1 text-header-large"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
            {data.helloSection.hello.body}
        </motion.h2>
        
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
        {/* <div className="hello-button-wrapper">
          <ButtonPrimary
            label="view my work" 
            onClick={scrollToWork}
          />
        </div> */}
      </motion.section>
    </div>
  );
};

export default HelloSection;
