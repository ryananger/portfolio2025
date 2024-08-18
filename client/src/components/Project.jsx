import React, {useState, useEffect} from 'react';

const Project = function({title, info, src, url}) {
  return (
    <a href={url} className='projectBar info texture h'>
        <div>
            <b>{title}</b>
            <p>
            {info}
            </p>
        </div>
        <img className='projectImage' src={src}/>
    </a>
  );
};

export default Project;

