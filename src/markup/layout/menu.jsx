import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <>
        <div
          class='collapse navbar-collapse show clearfix'
          id='navbarSupportedContent'
        >
          <ul class='navigation clearfix'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About Us</Link>
            </li>
            <li>
              <Link to={'/about'}>Local Students</Link>
            </li>
            <li>
              <Link to={'/about'}>International Students</Link>
            </li>
            <li class='dropdown'>
              <Link to={'/#'}>FAQ</Link>
              <ul>
                <li>
                  <Link to={'/faq-local'}>FAQ:Local Students</Link>
                </li>
                <li>
                  <Link to={'/faq-intl'}>FAQ:International</Link>
                </li>
                <li>
                  <Link to={'/faq-general'}>FAQ:General</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={'/contact'}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Menu;
