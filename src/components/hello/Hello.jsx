import "./hello.css";
import { data } from "../../data/data.js";
// import ButtonPrimary from "../button/ButtonPrimary.jsx";
// import ButtonSecondary from "../button/ButtonSecondary.jsx";
import TorusCanvas from "./ThreeCanvas.jsx";

const HelloSection = () => {
  //   const scrollToContact = () => {
  //     const sectionId = "contact";
  //     const section = document.getElementById(sectionId);
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };
  //   const scrollToWork = () => {
  //     const sectionId = "work";
  //     const section = document.getElementById(sectionId);
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };
  return (
    <div className="content-container">
      <div className="torus-wrapper">
        <TorusCanvas />
      </div>
      <section id="hello" className="hello-section">
        <div className="hello-logo-wrapper">
          <div className="logo">
            <p className="logo-text text-body-large">
              {data.helloSection.logo.text}
            </p>
          </div>
          <p className="logo-tags text-body-large">
            {data.helloSection.logo.tags}
          </p>
        </div>
        <h1 className="hello-section_title text-huge">
          {data.helloSection.hello.title}
        </h1>
        <h2 className="hello-section_body">
          <span className="hello-section_body-1 text-header">
            {data.helloSection.hello.body}
          </span>
          <span className="hello-section_body-2 text-header-variant">
            {data.helloSection.hello.body2}
          </span>
          <span className="hello-section_body-3 text-header">
            {data.helloSection.hello.body3}
          </span>
        </h2>
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
      </section>
    </div>
  );
};

export default HelloSection;
