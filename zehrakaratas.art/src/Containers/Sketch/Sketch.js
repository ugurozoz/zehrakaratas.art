import React, { Component } from 'react';
import Header from '../../components/Navigation/Header/header';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Sketch extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <div>Sketch</div>
      </Aux>
    );
  }
}

export default Sketch;
