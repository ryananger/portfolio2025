import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const ProjectButtons = function() {
  const [ready, setReady] = useState(false);
  const [buttonState, setButtonState] = useState({
    communitii: 'hidden',
    puzzles: 'hidden',
    jupiterFalls: 'hidden',
    stokk: 'hidden',
    all: 'hidden'
  });

  var handleClick = function(project) {
    if (st.view === project) {
      st.setView(null);
    } else {
      st.setView(project);
    }
  };

  var renderProjectButtons = function() {
    const projectButtons = {
      communitii: '#ffb6aa',
      puzzles: '#bedf8f',
      jupiterFalls: '#b8cdf5',
      stokk: '#dfc1eb'
    };

    var rendered = [];

    for (var key in projectButtons) {
      let project = key;
      var color = projectButtons[project];
      var selected = st.view === project ? 'selected' : '';

      rendered.push(
        <div className='projectButtonContainer v'>
          <div className={`projectButton ${buttonState[project]} ${selected}`} style={{backgroundColor: color}} onClick={()=>{handleClick(project)}}/>
        </div>);
    }

    return rendered;
  };

  useEffect(()=>{
    setTimeout(()=>{
      setReady(true);
    }, 500);
  }, []);

  useEffect(()=>{
    if (!ready) {return};

    for (var key in buttonState) {
      if (buttonState[key] === 'hidden') {

        setTimeout(()=>{
          var newState = {...buttonState};

          newState[key] = 'visible';

          setButtonState(newState);
        }, 250);
        break;
      } 
    }
  }, [ready, buttonState]);

  return (
    <div className={`projectButtons h`}>
      <div className={`${buttonState.all === 'visible' ? 'visible' : 'hidden'}`} style={{width: '60px'}}>
        projects
      </div>
      {renderProjectButtons()}
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

export default ProjectButtons;

