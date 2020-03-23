import React from 'react';
import './App.scss';
import Header from './component/Header/Header';
import FrontPage from './component/FrontPage/FrontPage';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Gallery from './component/Gallery/Gallery';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Contact /> */}
      <div className="container">
        <FrontPage />
        <About />
      </div>
        <Skills />
        <Gallery />
      <Footer />
    </div>
  );
}

export default App;
