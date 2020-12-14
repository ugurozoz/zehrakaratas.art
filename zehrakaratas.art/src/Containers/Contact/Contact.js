import React, { Component } from 'react';
import Header from '../../components/Navigation/Header/header';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Contact extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <div>Contact</div>
      </Aux>
    );
  }
}

export default Contact;
