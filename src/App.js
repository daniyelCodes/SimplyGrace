import React from 'react';


import { AboutUs, MainDish, FindUs, Footer, Header, Video, SpecialMenu,  } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <>
   
    <Navbar />
     
      
      <Header />
      <AboutUs />
      <SpecialMenu />
      <MainDish />
      <Video />
      <FindUs />
      <Footer />
    
    

  </>
);

export default App;
