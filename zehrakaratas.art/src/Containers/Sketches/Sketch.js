import React, { Component } from 'react';

import SketchContent from './SketchContent/SketchContent';

import Aux from '../../hoc/Auxiliary/Auxiliary';

class Sketch extends Component {
  componentDidMount() {
    this.setState({ mounted: true });

    document.querySelector('#menuButton').checked = false;
  }

  render() {
    return (
      <Aux>
        <SketchContent />

        {/* <WithTransition>
        <HomeContent />
      </WithTransition> */}
      </Aux>
    );
  }
}

export default Sketch;
