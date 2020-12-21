import React from 'react';
import './SlideControls.css';

const slideControls = (props) => {
  return (
    <div className='slide-controls'>
      <span onClick={() => props.slide(props.currentSlide - 1)}></span>
      <span onClick={() => props.slide(props.currentSlide + 1)}></span>
    </div>
  );
};

export default slideControls;
