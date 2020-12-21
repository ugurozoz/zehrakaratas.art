import React, { Component } from 'react';
import './Contact.css';
class Contact extends Component {
  componentDidMount() {
    document.querySelector('#menuButton').checked = false;
  }

  render() {
    return (
      <div className='container contact-container'>
        <strong className='gen-head'>İletişim</strong>
        <div className='edu-div-row'>
          <strong>E-mail</strong>
          <span>:</span>
          <p>zehrakaratass@gmail.com 
            
          </p>
        </div>
        <div className='edu-div-row'>
          <strong>Linkedin</strong>
          <span>:</span>
          <p><a href="https://www.linkedin.com/in/zehra-karataş-495217a6" target="blank">Zehra Karataş</a>
            
          </p>
        </div>
        <div className='edu-div-row'>
          <strong>Instagram</strong>
          <span>:</span>
          <p><a href="https://www.instagram.com/zartcollection/" target="blank">instagram.com/zartcollection</a>
            
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
