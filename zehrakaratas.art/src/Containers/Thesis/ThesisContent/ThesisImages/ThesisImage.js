import React from 'react';
import Spinner from '../../../../components/UI/Spinner/Spinner';

import './ThesisImage.css';

class ThesisImage extends React.Component {
  state = { imageStatus: 'loading', loaded: false };

  handleImageLoaded = () => {
    console.log('IMAGE LOADED');
    this.setState({ imageStatus: 'loaded', loaded: true });
  };

  handleImageErrored = () => {
    this.setState({ imageStatus: 'failed to load' });
  };

  render() {
    return (
      <div className='thesis-image'>
        {!this.state.loaded ? <Spinner /> : null}
        <img
          src={this.props.imageUrl}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
          style={this.state.loaded ? { display: 'block' } : { display: 'none' }}
        />
      </div>
    );
  }
}
export default ThesisImage;
