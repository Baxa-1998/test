
import React from 'react';
import './title.scss';


export default function Title({ children }) {

  return (
    <div id="text" className="fancy-wipe">
      {children}
      {/* <span className="wipe-in">
      Transference	
    </span> */}
      {/* <span className="blur-in">
      Transference	
    </span> */}
    </div>
  );
}
