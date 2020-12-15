import React, { Component } from 'react';
import Header from '../../components/Navigation/Header/header';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Thesis extends Component {
  componentDidMount() {
    this.setState({ mounted: true });

    document.querySelector('#menuButton').checked = false;
  }
  render() {
    return (
      <Aux>
        <div>Thesis</div>
      </Aux>
    );
  }
}

export default Thesis;
