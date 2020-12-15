import React from 'react';
import Links from '../Links/Links';
import NameTitle from './NameTitle/NameTitle';

import './Header.css';

const header = (props) => {
  console.log('HEADER RENDERED');

  return (
    <header>
      <div className='Headerin'>
        <NameTitle />
        <Links />
      </div>
    </header>
  );
};

export default header;
