import React, { useState } from 'react';
import Nav from './components/nav/Nav';
import HelloSection from './components/hello/Hello';
import SectionDivider from './components/divider/Divider';

function App() {
  return (
    <>
      <Nav />
      <div className="content-container">
        <HelloSection />
        <SectionDivider text={"About"} number="01" color="var(--secondary-orange)" />
      </div>
    </>
  )
}

export default App;
