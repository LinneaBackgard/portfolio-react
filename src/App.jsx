import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />  
      <Hero /> 
      <About /> 
      <Contact />  
    </div>
  );
};

export default App;
    
