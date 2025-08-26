import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HelloSection from './components/hello/Hello';
import AboutSection from './components/about/About';
import WorkSection from './components/work/Work';
import PlaySection from './components/play/Play';
import ContactSection from './components/contact/Contact';
import Footer from './components/footer/Footer';


function HomePage() {
  return (
    <>
      <HelloSection />
      <AboutSection />
      <WorkSection />
      <PlaySection />
      <ContactSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/project/:projectId" element={<ProjectDetailPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
