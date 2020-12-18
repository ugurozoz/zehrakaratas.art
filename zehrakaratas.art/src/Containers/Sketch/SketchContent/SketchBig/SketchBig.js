import React from 'react';
import './SketchBig.css';

const sketchBig = (props) => {
  const imagePath = require(`../../../../Assets/Images/sketch/${props.image}`);

  console.log('SKETCHBIG RENDERED');
  return (
    <div className='Image-Big'>
      <img src={imagePath} alt="" />
    </div>
  );
};

export default sketchBig;
