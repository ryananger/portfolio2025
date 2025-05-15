import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';

import Project from './Project.jsx';

const App = function() {
  const [isMobile, setIsMobile] = st.newState('isMobile', useState(window.innerHeight > window.innerWidth));
  const [zoomImage, setZoomImage] = st.newState('zoomImage', useState(false));

  var renderZoom = function() {
    return (
      <div className='imageModal v c'>
        <img className='zoomImage' src={zoomImage} onClick={()=>{setZoomImage(false)}}/>
      </div>
    )
  };

  var renderProjects = function() {
    var rendered = [];

    for (var key in projects) {
      var project = projects[key];

      rendered.push(<Project title={project.title} info={project.info} src={project.src} url={project.url} position={project.position}/>);
    }

    return rendered;
  };

  var getCurrentOrientation = function() {
    return window.screen.orientation?.type;
  };

  useEffect(()=>{
    var handleOrientation = function() {
      if (getCurrentOrientation() === 'landscape-primary') {
        st.setIsMobile(false);
      } else {
        st.setIsMobile(true);
      }
    };
    
    window.addEventListener('orientationchange', handleOrientation);
    window.addEventListener('resize', handleOrientation);
  })

  return (
    <div id='app' className='app v'>
      {zoomImage && renderZoom()}
      <div className='main v'>
        <div className='header h'>
          <img src='images/profile_pic_cropped.png'/>
          <div className='info v'>
            <div className='title v'>
              <h1>Ryan Anger</h1>
              <h2>Full-Stack Software Engineer</h2>
              <h3>Artist, Musician, USAF Air Traffic Control Veteran</h3>
            </div>

            <div className='contact v'>
              <h4><a href='tel:13133781977'>313.378.1977</a></h4>
              <h4><a href='https://mail.google.com/mail/u/0/?fs=1&to=ryan.anger.314@gmail.com&tf=cm'>ryan.anger.314@gmail.com</a></h4>
            </div>
          </div>
        </div>
        <div className='projects v'>
          {renderProjects()}
        </div>
      </div>
    </div>
  );
};

const projects = {
  communitii: {
    title: 'communitii',
    info: 'Communitii is a full-featured social media and organizational platform designed to drive intentional investment in local communities.', 
    src: './images/communitii_screen.png',
    url: 'https://communitii.net',
    position: 'right'
  },
  stokk: {
    title: 'stokk',
    info: 'Stokk is a stock signal screener for retail investors that pulls, parses, and analyzes real-time market data from Polygon.io and provides users with money-making opportunity.',
    src: './images/stokk_screen.png',
    url: 'https://stokk.biz',
    position: 'left'
  },
  jupiterFalls: {
    title: 'jupiterFalls',
    info: 'JupiterFalls is an educational math game built for web and mobile platforms intended to grant users the ability to quickly perform basic and algebraic math.',
    src: './images/jupiterfalls_screen.png',
    url: 'https://jupiterfalls.earthpunk.art',
    position: 'right'
  },
  puzzles: {
    title: 'puzzl',
    info: 'The puzzl suite is a small collection of puzzles, including the 15 puzzle, number fill, and sudoku, created as an exploration in crisp, consistent, and functional front-end design.',
    src: './images/puzzle_screen.png',
    url: 'https://15puzzl.earthpunk.art',
    position: 'left'
  }
};

export default App;

