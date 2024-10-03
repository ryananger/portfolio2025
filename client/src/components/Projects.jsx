import React, {useState, useEffect} from 'react';

import Project from './Project.jsx';

const Projects = function() {
  var handleClick = function(link) {
    console.log('test');
    window.open(link, '_blank').focus()
  };

  const infos = {
    puzzles: 'This collection of puzzles, including the 15 puzzle, number fill, and sudoku, showcases our ability to create highly responsive and interactive websites with high quality design.',
    communitii: 'Communitii is a demo for a feature-complete social media platform intent on empowering communities and uplifting users.',
    techTree: ' This is a more traditional website layout for a software engineering bootcamp with the goal of providing tuition-free software engineering education to low-income or otherwise disadvantaged individuals.'
  }

  return (
    <div id='projects' className='v'>
      <Project title='puzzles' info={infos.puzzles} src='/images/puzzles.png' url='https://15puzzl.earthpunk.art/'/>
      <Project title='communitii' info={infos.communitii} src='/images/communitii.png' url='http://communitii.earthpunk.art/'/>
      <Project title='techTree Academy' info={infos.techTree} src='/images/techtree.png' url='https://techtree.academy/'/>
    </div>
  );
};

export default Projects;

