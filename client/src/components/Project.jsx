import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Project = function({title, info, src, url, position}) {
  var projectInfo = function() {
    return (
      <div className='projectInfo v'>
        <h2><a href={url}>{title}</a></h2>
        <h3>{info}</h3>
      </div>
    )
  };

  var handleClick = function() {
    if (st.isMobile) {
      window.open(url);
    } else {
      st.setZoomImage(src)
    }
  };

  return (
    <div className='project h'>
      {(position === 'left' || st.isMobile) && <img className='projectImage' src={src} onClick={handleClick}/>}
      {projectInfo()}
      {(position === 'right' && !st.isMobile) && <img className='projectImage' src={src} onClick={handleClick}/>}
    </div>
  );
};

export default Project;

