import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Donate = function() {
  return (
    <div id={'donate'} className={'info texture v c'}>
      <div className='circle texture' onClick={()=>{st.setView(null)}}/>
      <h2>donate</h2>
      <img src='images/cashapp.png'/>
      <h3 style={{margin: '2vh'}}>
        $earthpunk2024
      </h3>
      <p>
        Your contributions will directly support the earthpunk mission. Thank you!
      </p>
    </div>
  );
};

export default Donate;
