import React, {useEffect, useState} from 'react';

import '../styles/style.css';

import Earthpunk from './Earthpunk.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const AppMobile = function() {
  return (
    <div id='app' className='app v'>
      <Earthpunk/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default AppMobile;

