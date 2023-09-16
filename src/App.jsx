import React from 'react';
import Nav from './components/nav/Nav';
import HelloSection from './components/hello/Hello';
import SectionDivider from './components/divider/Divider';
import { data } from './data/data.js';
import AboutSection from './components/about/About';
import WorkSection from './components/work/Work';
import ContactSection from './components/contact/Contact';
import NavMobile from './components/navmobile/NavMobile';


function App() {
  return (
    <>
      <Nav />
      <NavMobile />
      <div className="content-container">
        <HelloSection />
        <div id="about">
          <SectionDivider text={data.divider[0].text} number={data.divider[0].number} color={data.divider[0].color} slug={data.divider[0].slug} />
        </div>
        <AboutSection />
        <div id="work">
          <SectionDivider text={data.divider[1].text} number={data.divider[1].number} color={data.divider[1].color} slug={data.divider[1].slug} />
        </div>
        <WorkSection />
        <div id="contact">
          <SectionDivider text={data.divider[2].text} number={data.divider[2].number} color={data.divider[2].color} slug={data.divider[2].slug} />
        </div>
        <div id="contact"><ContactSection /></div>
      </div>
    </>
  )
}

export default App;
