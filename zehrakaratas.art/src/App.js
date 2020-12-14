import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Auxiliary/Auxiliary';

import Contact from './Containers/Contact/Contact';
import Home from './Containers/Home/Home';
import Sketch from './Containers/Sketch/Sketch';
import Thesis from './Containers/Thesis/Thesis';
import Cv from './Containers/CV/Cv';

import './App.css';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path='/contact' component={Contact} />        
        <Route path='/sketch' component={Sketch} />
        <Route path='/thesis' component={Thesis} />
        <Route path='/cv' component={Cv} />
        <Route path='/' exact component={Home} />
        <Redirect to='/' />
      </Switch>
    );

    // console.log(routes);

    return (
      <Aux>
        <Layout>{routes}</Layout>
      </Aux>
    );
  }
}

export default withRouter(App);
