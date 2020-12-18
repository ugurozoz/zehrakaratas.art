import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import ThesisContent from './ThesisContent/ThesisContent'
class Thesis extends Component {
  componentDidMount() {
    this.setState({ mounted: true });

    document.querySelector('#menuButton').checked = false;
  }
  render() {
    return (
      <Aux>
        <ThesisContent />
      </Aux>
    );
  }
}

export default Thesis;
