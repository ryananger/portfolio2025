import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';

import Project from './Project.jsx';
import ProjectButtons from './ProjectButtons.jsx';

const App = function() {
  const [isMobile, setIsMobile] = st.newState('isMobile', useState(window.innerHeight > window.innerWidth));
  const [open, setOpen] = useState(isMobile ? true : false);
  const [visible, setVisible] = useState(isMobile ? true : false);
  const [view, setView] = st.newState('view', useState(null));
  const [zoomImage, setZoomImage] = st.newState('zoomImage', useState(false));

  var renderZoom = function() {
    return (
      <div className='imageModal v c'>
        <img className='zoomImage' src={zoomImage} onClick={()=>{setZoomImage(false)}}/>
      </div>
    )
  };

  var renderProject = function() {
    if (!view) {return};

    return (<Project title={projects[view].title} info={projects[view].info} src={projects[view].src} url={projects[view].url}/>);
  };

  var renderProjects = function() {
    var rendered = [];

    for (var key in projects) {
      rendered.push(<Project title={projects[key].title} info={projects[key].info} src={projects[key].src} url={projects[key].url}/>);
    }

    return (
      <div className='projects v'>
        {rendered}
      </div>
    );
  };

  var renderAboutMe = function() {
    return (
      <p className={`aboutMe v ${visible ? 'visible' : 'hidden'}`}>
        Welcome! I'm Ry, a full-stack software engineer, and this is my portfolio. 
        Projects here were developed with React, React Native, Node.js, MongoDB, and hosted on AWS.
        I also have experience with Vue and Angular, SQL, some Python, and I've worked with a number of API's for different purposes, 
        including AI integration, market data retrieval, authentication, and sales.
        <br/><br/>
        Outside of software engineering, I am an artist (illustration and design) and musician (piano and vocals),
        and I was an Air Traffic Controller for the United States Air Force from 2008 to 2013, during which time I also trained a couple dozen others in ATC.
        <br/><br/>
        I am a self-motivated learner and I am compelled to solve problems wherever I may find them, which generally means further development of some skill or another.
        I am driven to improve myself in some way every day, and this has resulted in a comprehensive understanding of many different systems, and an awareness and 
        appreciation of the complexities in their interconnection.
      </p>
    );
  };

  useEffect(()=>{
    setTimeout(function() {
      setOpen(true);
    }, 1000);

    setTimeout(function() {
      setVisible(true);
    }, 1500);
  }, []);

  useEffect(orientationInit, []);

  return (
    <div id='app' className='app v'>
      {zoomImage && renderZoom()}
      <div className={`main v ${open ? 'open' : 'closed'}`}>
        {!open && <div style={{position: 'absolute'}}>hi</div>}
        <div className={`header h ${visible ? 'visible' : 'hidden'}`}>
          <img src='images/profile_pic_cropped.png'/>
          <div className='info v'>
            <div className='title v'>
              <h2>Ryan Anger</h2>
              <h3>Full-Stack Software Engineer</h3>
              <h4>Artist, Musician, USAF Air Traffic Control Veteran</h4>
            </div>

            <div className='contact v'>
              <h5><a href='tel:13133781977'>313.378.1977</a></h5>
              <h5><a href='https://mail.google.com/mail/u/0/?fs=1&to=ryan.anger.315@gmail.com&tf=cm'>ryan.anger.314@gmail.com</a></h5>
            </div>
          </div>
        </div>
        {!isMobile && open && <ProjectButtons/>}
        {isMobile && renderProjects()}
      </div>
      {renderProject()}
      {!isMobile && !view && renderAboutMe()}
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
  puzzles: {
    title: 'puzzl',
    info: 'The puzzl suite is a small collection of puzzles, including the 15 puzzle, number fill, and sudoku, created as an exploration in crisp, consistent, and functional front-end design.',
    src: './images/puzzle_screen.png',
    url: 'https://15puzzl.earthpunk.art',
    position: 'left'
  },
  jupiterFalls: {
    title: 'jupiterFalls',
    info: 'JupiterFalls is an educational math game built for web and mobile platforms intended to grant users the ability to quickly perform basic and algebraic math.',
    src: './images/jupiterfalls_screen.png',
    url: 'https://jupiterfalls.earthpunk.art',
    position: 'right'
  },
  stokk: {
    title: 'stokk',
    info: 'Stokk is a stock signal screener for retail investors that pulls, parses, and analyzes real-time market data from Polygon.io and provides users with money-making opportunity.',
    src: './images/stokk_screen.png',
    url: 'https://stokk.biz',
    position: 'left'
  }
};

var getCurrentOrientation = function() {
  return window.screen.orientation?.type;
};

var orientationInit = function() {
  var handleOrientation = function() {    
    if (getCurrentOrientation() === 'landscape-primary') {
      st.setIsMobile(false);
    } else {
      st.setIsMobile(true);
    }
  };
  
  window.addEventListener('orientationchange', handleOrientation);
  window.addEventListener('resize', handleOrientation);
};

export default App;

