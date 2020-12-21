import React from 'react';
import './SketchThumbs.css';

const sketchThumbs = (props) => {
  

  
  return (
    <div className='Image-Thumbs'>
      <ul>
        {props.imageList.map((image,index) => {
          const imagePath = require(`../../../../Assets/Images/sketch/thumbs/${image}`);
          return (
            <li key={`thumb${index}`} onClick={() => props.showSketch(index)} className={props.currentIndex === index ? 'thumb-active':null}>
              <img src={imagePath} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default sketchThumbs;
