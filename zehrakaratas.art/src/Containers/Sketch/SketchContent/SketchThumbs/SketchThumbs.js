import React, { useState } from 'react';
import './SketchThumbs.css';

const sketchThumbs = (props) => {
  return (
    <div className='Image-Thumbs'>
      <ul>
        {props.imageList.map((image,index) => {
          const imagePath = require(`../../../../Assets/Images/sketch/thumbs/${image}`);
          return (
            <li onClick={() => props.showSketch(index)}>
              <img src={imagePath} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default sketchThumbs;
