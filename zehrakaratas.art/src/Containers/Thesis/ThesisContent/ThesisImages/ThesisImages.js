import React, { Component } from 'react';
import ThesisImage from './ThesisImage';

import './ThesisImages.css'

const imageList = [
  '1-1.jpg',
  '1-2.jpg',
  '2-0.jpg',
  '2-1.jpg',
  '3.jpg',
  '4-1.jpg',
  '4-2.jpg',
  '5-2.jpg',
  '6-1.jpg',
];

const thesisImages = (props) => {
  const images = imageList.map((image) => {
    const thesisImage = require(`../../../../Assets/Images/thesis/${image}`);
    return <ThesisImage imageUrl={thesisImage}  />;
  });

  

  return <div className='thesis-image-slider__content' style={{width: `calc( 100% * ${imageList.length})`}}>{images}</div>;
};

export default thesisImages;
