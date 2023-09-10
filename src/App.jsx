import React, { useState } from 'react';
import Nav from './components/nav/Nav';
import HelloSection from './components/hello/Hello';
import SectionDivider from './components/divider/Divider';
import { data } from './data/data.js';

function App() {
  return (
    <>
      <Nav />
      <div className="content-container">
        <HelloSection />
        <SectionDivider text={data.divider[0].text} number={data.divider[0].number} color={data.divider[0].color} />
        <SectionDivider text={data.divider[1].text} number={data.divider[1].number} color={data.divider[1].color} />
      </div>
    </>
  )
}

export default App;
