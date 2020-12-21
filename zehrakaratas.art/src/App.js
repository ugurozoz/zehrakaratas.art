import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Auxiliary/Auxiliary';

import { CSSTransition } from 'react-transition-group';

import Contact from './Containers/Contact/Contact';
import Home from './Containers/Home/Home';
import Sketch from './Containers/Sketches/Sketch';
import Thesis from './Containers/Thesis/Thesis';
import Cv from './Containers/CV/Cv';

import './App.css';

const routes = [
  { path: '/', name: 'Anasayfa', Component: Home },
  { path: '/thesis', name: 'Tez', Component: Thesis },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/sketch', name: 'Eskiz', Component: Sketch },
  { path: '/cv', name: 'CV', Component: Cv },
];
class App extends Component {
  render() {
    // const routes = (
    //   <Switch>
    //     <Route path='/contact' component={Contact} />
    //     <Route path='/sketch' component={Sketch} />
    //     <Route path='/thesis' component={Thesis} />
    //     <Route path='/cv' component={Cv} />
    //     <Route path='/' exact component={Home} />
    //     <Redirect to='/' />
    //   </Switch>
    // );

    

    return (
      <Aux>
        <Layout>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames='page'
                  unmountOnExit
                >
                  <div className='page'>
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Layout>
      </Aux>
    );
  }
}

export default withRouter(App);
