import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Project = function({title, info, src, url}) {
  const [loaded, setLoaded] = useState(false);

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

  useEffect(()=>{
    setLoaded(true);
  }, []);

  return (
    <div className={`project h ${loaded ? 'visible' : 'hidden'}`}>
      <div className='projectImageContainer v'>
        <img className='projectImage' src={src} onClick={handleClick}/>
      </div>
      {projectInfo()}
    </div>
  );
};

export default Project;

