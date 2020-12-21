import React, { useState } from 'react';
import ThesisImage from './ThesisImage';
import SlideControls from './SlideControls/SlideControls';

import './ThesisImages.css';

const imageList = [
  '1-1.jpg',
  '1-2.jpg',
  '2-0.jpg',
  '2-1.jpg',
  '2-2.jpg',
  '3.jpg',
  '3-1.jpg',
  '4-1.jpg',
  '4-2.jpg',
  '5-2.jpg',
];

const thesisImages = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = imageList.map((image, index) => {
    const thesisImage = require(`../../../../Assets/Images/thesis/${image}`);
    return <ThesisImage key={`img-${index}`} imageUrl={thesisImage} />;
  });

  const slideToImage = (index) => {
    if (!(index < 0) && !(index >= imageList.length)) {
      setCurrentImage(index);
    }
  };

  return [
    <div
      key="slide-image"
      className='thesis-image-slider__content'
      style={{
        width: `calc( 100% * ${imageList.length})`,
        position: 'absolute',
        left: `-${currentImage !== 0 ? currentImage * 100 : 0}%`,
      }}
    >
      {images}
    </div>,
    <SlideControls
      key="slide-controls"
      currentSlide={currentImage}
      slide={slideToImage}
      imageCount={imageList.length}
    />,
  ];
};

export default thesisImages;
