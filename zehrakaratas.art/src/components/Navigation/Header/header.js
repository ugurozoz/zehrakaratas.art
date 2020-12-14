import React from 'react';
import Links from '../Links/Links';
import './Header.css';

const header = (props) => {
  

  console.log('HEADER RENDERED')

  return (
    <header>
      <h1 className='Name'>Zehra Karataş</h1>
      <p className='Title'>Seramik Sanatçısı</p>

      <Links></Links>
    </header>
  );
};

export default header;
