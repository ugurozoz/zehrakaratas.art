import React, { Component } from 'react';
import HomeContent from './HomeContent/HomeContent';


import Aux from '../../hoc/Auxiliary/Auxiliary';

class Home extends Component {
  

  componentDidMount() {    
    document.querySelector('#menuButton').checked = false;
  }

  render() {
    

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
