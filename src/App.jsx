import './App.scss';
import Aos from "aos"
import "aos/dist/aos.css"
import React, {useEffect}  from 'react'
import Section from './components/Section/Section';
import Headerinput from './Home/Headerinput/Headerinput';
import SectionPage from './components/SectionPage/SectionPage';
import Sublime from './components/Sublime/Sublime';
import Aside from './components/Aside/Aside';
import Box from './components/Box/Box'; 
// import Sofapage from './components/Sofapage/Sofapage';
import Homepage from './components/Homepage/Homepage';
// import { Swiper } from 'swiper/react';
import Swiper from './components/Swiper/Swiper';


function App() { 
  useEffect(() =>{
    Aos.init({});
  }, []);
  return (
    <div className="App">
       <Headerinput />
       <Section /> 
       <SectionPage />
       <Sublime />
       <Aside />
       <Box />
       {/* <Sofapage /> */}
       <Homepage />
       <Swiper />
    </div>
  );
}

export default App;
