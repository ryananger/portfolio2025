import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Project = function({title, info, src, url}) {
  return (
    <a href={url} className='projectBar info texture h'>
      <div className='v'>
        {st.isMobile && <img className='projectImage' src={src}/>}
        <b>{title}</b>
        <p>
        {info}
        </p>
      </div>
      {!st.isMobile && <img className='projectImage' src={src}/>}
    </a>
  );
};

export default Project;

