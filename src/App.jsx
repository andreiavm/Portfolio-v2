import React from 'react';
import HelloSection from './components/hello/Hello';
import AboutSection from './components/about/About';
import WorkSection from './components/work/Work';
import PlaySection from './components/play/Play';
import ContactSection from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {

  return (
    <>
      {/* <Nav /> */}
      {/* <NavMobile /> */}
      <HelloSection />
      <PlaySection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App;
