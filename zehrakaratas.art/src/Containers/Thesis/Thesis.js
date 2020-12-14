import React, { Component } from 'react';
import Header from '../../components/Navigation/Header/header';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Thesis extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <div>Thesis</div>
      </Aux>
    );
  }
}

export default Thesis;
