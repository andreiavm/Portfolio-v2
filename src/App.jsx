import React from 'react';
import ReactGA from 'react-ga';
import Nav from './components/nav/Nav';
import HelloSection from './components/hello/Hello';
import AboutSection from './components/about/About';
import WorkSection from './components/work/Work';
import ContactSection from './components/contact/Contact';
import NavMobile from './components/navmobile/NavMobile';
import PlaySection from './components/play/Play';
import Footer from './components/footer/Footer';

ReactGA.initialize('G-26NMTG86QZ');

function App() {
  return (
    <>
      <Nav />
      <NavMobile />
        <HelloSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
        {/* <PlaySection /> */}
        <Footer />
    </>
  )
}

export default App;
