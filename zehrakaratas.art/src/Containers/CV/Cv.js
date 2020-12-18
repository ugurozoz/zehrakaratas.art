import React, { Component } from 'react';
import CvContent from './CvContent/CvContent';

import Aux from '../../hoc/Auxiliary/Auxiliary';

class Cv extends Component {

  componentDidMount() {
    document.querySelector('#menuButton').checked=false
  }

  render() {
    return (
      <Aux>
        <CvContent />
      </Aux>
    );
  }
}

export default Cv;
