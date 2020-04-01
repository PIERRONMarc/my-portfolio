import React from 'react';
import './App.scss';
import Header from './component/Header/Header';
import FrontPage from './component/FrontPage/FrontPage';
// import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Gallery from './component/Gallery/Gallery';
import Footer from './component/Footer/Footer';
import Fade from 'react-reveal/Fade';
import IntervalContext from './context/ChevronIntervalContext';

function App() {

  const [ChevronInterval, setChevronInterval] = React.useState();

  const chevronIntervalContext = {
    chevronInterval: ChevronInterval,
    setChevronInterval: setChevronInterval
  };

  return (
    <div className="App">
      <Fade left distance="20px">
        <Header />
      </Fade>
      {/* <Contact /> */}
      <IntervalContext.Provider value={chevronIntervalContext}>
        <div className="container">
          <Fade left distance="20px">
          <FrontPage />
            <About />
          </Fade>
        </div>
      </IntervalContext.Provider>
      <Fade left distance="20px">
        <Skills />
        <Gallery />
      </Fade>
      <Footer />
    </div>
  );
}

export default App;
