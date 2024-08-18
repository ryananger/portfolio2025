import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Blog = function() {
  return (
    <div id={'blog'} className={'info texture v'}>
      <div className='circle texture' onClick={()=>{st.setView(null)}}/>
      blog
    </div>
  );
};

export default Blog;

