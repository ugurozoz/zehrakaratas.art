import React, { useState } from 'react';

import NavigationLink from './Link/Link';
import './Links.css';

const navigationLinks = (props) => {
  console.log('LINKS RENDERED');

  return (
    <div className='NavMenu'>
      <input type='checkbox' id='menuButton' className='menu-button'></input>
      <label className='Menu-Button' htmlFor='menuButton'>
        <span></span>
      </label>

      <div className='Menu'>
        <nav>
          <ul>
            <NavigationLink exact link='/home'>
              Anasayfa
            </NavigationLink>
            <NavigationLink link='/cv'>CV</NavigationLink>
            <NavigationLink link='/thesis'>Tez</NavigationLink>
            <NavigationLink link='/sketch'>Eskiz</NavigationLink>
            <NavigationLink link='/contact'>İletişim</NavigationLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default navigationLinks;
