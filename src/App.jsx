import React, { useState } from 'react';
import Nav from './components/nav/Nav';
import HelloSection from './components/hello/Hello';

function App() {
  return (
    <>
      <Nav />
      <div className="content-container">
        <HelloSection />
      </div>
    </>
  )
}

export default App;
