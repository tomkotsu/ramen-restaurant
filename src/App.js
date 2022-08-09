import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MyRamen from './components/MyRamen';
import Menu from './components/Menu';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App flex flex-col" id='home'>
      <Navbar />
      <Hero />
      <MyRamen />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
