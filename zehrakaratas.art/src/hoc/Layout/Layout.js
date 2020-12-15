import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/Navigation/Header/header';
import Footer from '../../components/Navigation/Footer/Footer';
class Layout extends Component {
  state = {
    menuVisible: false,
  };

  render() {
    return (
      <Aux>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
