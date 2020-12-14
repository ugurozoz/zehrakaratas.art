import React from 'react';
import Links from '../Links/Links';
import './Header.css';

const header = (props) => {
  console.log('HEADER RENDERED');

  return (
    <header>
      <div className="Name-Title">
        <h1 className='Name'>Zehra Karataş</h1>
        <p className='Title'>Seramik & Heykel Sanatçısı</p>
      </div>

      <Links></Links>
    </header>
  );
};

export default header;
