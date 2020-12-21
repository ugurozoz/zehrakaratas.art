import React from 'react';

import NavigationLink from './Link/Link';
import './Links.css';

const navigationLinks = (props) => {

  return (
    <div className='NavMenu'>
      <input type='checkbox' id='menuButton' className='menu-button'></input>
      <label className='Menu-Button' htmlFor='menuButton'>
        <span></span>
      </label>

      <div className='Menu'>
        <nav>
          <ul>
            <NavigationLink exact link='/'>
              Anasayfa
            </NavigationLink>
            
            <NavigationLink link='/thesis'>Tez</NavigationLink>
            <NavigationLink link='/sketch'>Eskiz</NavigationLink>
            <NavigationLink link='/cv'>CV</NavigationLink>
            <NavigationLink link='/contact'>İletişim</NavigationLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default navigationLinks;
