import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

class WithTransition extends Component {
  state = {
    mounted: false,
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
  }

  render() {
    const defaultStyle = {
      transition: `all 300ms ease`,
      paddingTop:'20px',
      opacity: 1,
      
    };

    const transitionStyles = {
      entering: { paddingTop:'20px',opacity: 0 },
      entered: { paddingTop:'0px',opacity: 1 },
      exiting: { paddingTop:'0px',opacity: 0 },
      exited: { paddingTop:'0px',opacity: 0 },
    };

    return (
      
        
        <Transition
          in={this.state.mounted}
          timeout={{
            appear: 300,
            enter: 300,
            exit: 300,
          }}
          appear
          unmountOnExit
          
        >
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {this.props.children}
            </div>
          )}
        </Transition>
      
    );
  }
}

export default WithTransition;
