import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';

const navigationLink = (props) => (
  <li className='NavLink'>
    <NavLink
      exact={props.exact}
      to={props.link}
      activeClassName='NavLink--active'
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationLink;
