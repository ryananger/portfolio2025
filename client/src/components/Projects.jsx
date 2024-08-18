import React, {useState, useEffect} from 'react';

const Projects = function() {
  var handleClick = function(link) {
    console.log('test');
    window.open(link, '_blank').focus()
  };

  return (
    <div id='projects'>
      <div className='projectBar info texture h' onClick={()=>{handleClick('https://15puzzl.earthpunk.art/')}}>
        <b>
          puzzles
        </b>
        <img className='projectImage' src='/images/puzzles.png'/>
      </div>
      <div className='projectBar info texture h'>
        <b>
          communitii
        </b>
        <img className='projectImage' src='/images/communitii.png'/>
      </div>
      <div className='projectBar info texture h'>
        <b>
          techTree Academy
        </b>
        <img className='projectImage' src='/images/techtree.png'/>
      </div>
    </div>
  );
};

export default Projects;

