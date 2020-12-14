import React, { Component } from 'react';
import Header from '../../components/Navigation/Header/header';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Home extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <div>Home</div>
      </Aux>
    );
  }
}

export default Home;
