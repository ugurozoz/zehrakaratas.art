import React, { useState } from 'react';
import SketchThumbs from './SketchThumbs/SketchThumbs';
import SketchBig from './SketchBig/SketchBig';


import './SketchContent.css'

const imageList = [
  'e_1.jpg',
  'e_2.jpg',
  'e_4.jpg',
  'e_5.jpg',
  'e_6.jpg',
  'e_7.jpg',
  'e_8.jpg',
  'e_9.jpg',  
  'e_11.jpg',
  'e_12.jpg',
  'e_13.jpg',
  'e_14.jpg',
  'e_15.jpg',
  'e_16.jpg',
];

const sketchContent = (props) => {
  const [currentImage, setCurrentImage] = useState(imageList[0]);

  const showSketchHandler = (imageIndex) => {
    console.log("SHOWSKETCH CALLED")
    setCurrentImage(imageList[imageIndex]);
  };

  return (
    <div className='container sketch-container'>
      <SketchThumbs imageList={imageList} showSketch={showSketchHandler} currentIndex={imageList.indexOf(currentImage) }  />
      
      <SketchBig image={currentImage}/>
      
      
    </div>
  );
};

export default sketchContent;
