import React, { Component } from 'react';
import Header from '../../components/Navigation/Header/header';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Cv extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <div>CV</div>
      </Aux>
    );
  }
}

export default Cv;
