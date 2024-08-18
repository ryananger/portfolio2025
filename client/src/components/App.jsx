import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';
import {mouse} from 'util';

import Earthpunk from './Earthpunk.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Blog from './Blog.jsx';

const tileSize = st.tileSize = window.innerHeight < 900 ? 54 : 60;

st.startX = 0;
st.startY = tileSize * 2;

const App = function() {
  const [view, setView] = st.newState('view', useState(null));

  const views = {
    blog: <Blog/>
  };

  return (
    <div id='app' className='app v'>
      <div id='box'/>
      <div className='main h'>
        <div className='v'>
          <Earthpunk/>
          <Contact/>
        </div>
        <div className='v'>
          <About/>
          <Projects/>
        </div>
      </div>
    </div>
  );
};

export default App;

