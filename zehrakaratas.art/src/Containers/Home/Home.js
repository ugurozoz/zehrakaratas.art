import React, { Component } from 'react';
import Header from '../../components/Navigation/Header/header';
import HomeContent from './HomeContent/HomeContent';

import WithTransition from '../../hoc/WithTransition/WithTransition';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Home extends Component {
  state = {
    mounted: false,
  };

  componentDidMount() {
    this.setState({ mounted: true });

    document.querySelector('#menuButton').checked = false;
  }

  render() {
    const defaultStyle = {
      transition: `all 300ms ease`,
      paddingTop: '20px',
      opacity: 1,
    };

    const transitionStyles = {
      entering: { paddingTop: '20px', opacity: 0 },
      entered: { paddingTop: '0px', opacity: 1 },
      exiting: { paddingTop: '0px', opacity: 0 },
      exited: { paddingTop: '0px', opacity: 0 },
    };

    return (
      <Aux>
        <HomeContent />

        {/* <WithTransition>
          <HomeContent />
        </WithTransition> */}
      </Aux>
    );
  }
}

export default Home;
