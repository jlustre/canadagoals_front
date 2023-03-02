import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo2 from '../../assets/images/canadacareergoalslogo.svg';

class Footer extends Component {
  render() {
    return (
      <>
        <footer class='main-footer'>
          <div class='auto-container'>
            <div class='widgets-section'>
              <div class='row clearfix'>
                <div class='column col-lg-4'>
                  <div class='footer-widget logo-widget'>
                    <div class='widget-content'>
                      <div class='footer-logo'>
                        <Link to={'/'}>
                          <img
                            class='brandlogo'
                            src={BrandLogo2}
                            alt='CCG Logo'
                          />
                        </Link>
                      </div>
                      <div class='text'>
                        We assist our students in finding educational
                        institutions, programs, or courses that align with their
                        academic goals and interests. We also help them maximize
                        their financial aid opportunities to make their
                        education more affordable.
                      </div>
                      <ul class='social-links clearfix'>
                        <li>
                          <Link to={'/#'}>
                            <span class='fab fa-facebook-f'></span>
                          </Link>
                        </li>
                        <li>
                          <Link to={'/#'}>
                            <span class='fab fa-twitter'></span>
                          </Link>
                        </li>
                        <li>
                          <Link to={'/#'}>
                            <span class='fab fa-vimeo-v'></span>
                          </Link>
                        </li>
                        <li>
                          <Link to={'/#'}>
                            <span class='fab fa-instagram'></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class='column col-lg-4'>
                  <div class='footer-widget links-widget'>
                    <div class='widget-content'>
                      <h3>Links</h3>
                      <div class='row'>
                        <div class='col-md-6'>
                          <ul>
                            <li>
                              <Link to={'/#'}>Home</Link>
                            </li>
                            <li>
                              <Link to={'/#'}>About</Link>
                            </li>
                            <li>
                              <Link to={'/#'}>Services</Link>
                            </li>
                            <li>
                              <Link to={'/#'}>Portfolio</Link>
                            </li>
                            <li>
                              <Link to={'/#'}>Pricing</Link>
                            </li>
                            <li>
                              <Link to={'/#'}>Contact</Link>
                            </li>
                          </ul>
                        </div>
                        <div class='col-md-6'>
                          <ul>
                            <li>
                              <Link to={'/#'}>News</Link>
                            </li>
                            <li>
                              <Link to={'/#'}>Press Release</Link>
                            </li>
                            <li>
                              <Link to={'/#'}>Case Study</Link>
                            </li>
                            <li>
                              <Link to={'/#'}>Terms</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='column col-lg-4'>
                  <div class='footer-widget instagram-widget'>
                    <h3>Photo Showcase</h3>
                    <div class='inner-box'>
                      <div class='wrapper-box'>
                        <div class='image'>
                          <img
                            class='lazy-image owl-lazy'
                            src={require('../../assets/images/gallery/gallery-1.jpg')}
                            alt=''
                          />

                          <div class='overlay-link'>
                            <Link
                              to={'/assets/images/gallery/gallery-1.jpg'}
                              class='lightbox-image'
                              data-fancybox='gallery'
                            >
                              <span class='fa fa-plus'></span>
                            </Link>
                          </div>
                        </div>
                        <div class='image'>
                          <img
                            class='lazy-image owl-lazy'
                            src={require('../../assets/images/gallery/gallery-2.jpg')}
                            alt=''
                          />
                          <div class='overlay-link'>
                            <Link
                              to={'/assets/images/gallery/gallery-2.jpg'}
                              class='lightbox-image'
                              data-fancybox='gallery'
                            >
                              <span class='fa fa-plus'></span>
                            </Link>
                          </div>
                        </div>
                        <div class='image'>
                          <img
                            class='lazy-image owl-lazy'
                            src={require('../../assets/images/gallery/gallery-3.jpg')}
                            alt=''
                          />
                          <div class='overlay-link'>
                            <Link
                              to={'/assets/images/gallery/gallery-3.jpg'}
                              class='lightbox-image'
                              data-fancybox='gallery'
                            >
                              <span class='fa fa-plus'></span>
                            </Link>
                          </div>
                        </div>
                        <div class='image'>
                          <img
                            class='lazy-image owl-lazy'
                            src={require('../../assets/images/gallery/gallery-4.jpg')}
                            alt=''
                          />
                          <div class='overlay-link'>
                            <Link
                              to={'/assets/images/gallery/gallery-4.jpg'}
                              class='lightbox-image'
                              data-fancybox='gallery'
                            >
                              <span class='fa fa-plus'></span>
                            </Link>
                          </div>
                        </div>
                        <div class='image'>
                          <img
                            class='lazy-image owl-lazy'
                            src={require('../../assets/images/gallery/gallery-5.jpg')}
                            alt=''
                          />
                          <div class='overlay-link'>
                            <Link
                              to={'/assets/images/gallery/gallery-5.jpg'}
                              class='lightbox-image'
                              data-fancybox='gallery'
                            >
                              <span class='fa fa-plus'></span>
                            </Link>
                          </div>
                        </div>
                        <div class='image'>
                          <img
                            class='lazy-image owl-lazy'
                            src={require('../../assets/images/gallery/gallery-6.jpg')}
                            alt=''
                          />
                          <div class='overlay-link'>
                            <Link
                              to={'/assets/images/gallery/gallery-6.jpg'}
                              class='lightbox-image'
                              data-fancybox='gallery'
                            >
                              <span class='fa fa-plus'></span>
                            </Link>
                          </div>
                        </div>
                        <div class='image'>
                          <img
                            class='lazy-image owl-lazy'
                            src={require('../../assets/images/gallery/gallery-7.jpg')}
                            alt=''
                          />
                          <div class='overlay-link'>
                            <Link
                              to={'/assets/images/gallery/gallery-7.jpg'}
                              class='lightbox-image'
                              data-fancybox='gallery'
                            >
                              <span class='fa fa-plus'></span>
                            </Link>
                          </div>
                        </div>
                        <div class='image'>
                          <img
                            class='lazy-image owl-lazy'
                            src={require('../../assets/images/gallery/gallery-8.jpg')}
                            alt=''
                          />
                          <div class='overlay-link'>
                            <Link
                              to={'/assets/images/gallery/gallery-8.jpg'}
                              class='lightbox-image'
                              data-fancybox='gallery'
                            >
                              <span class='fa fa-plus'></span>
                            </Link>
                          </div>
                        </div>
                        <div class='image'>
                          <img
                            class='lazy-image owl-lazy'
                            src={require('../../assets/images/gallery/gallery-9.jpg')}
                            alt=''
                          />
                          <div class='overlay-link'>
                            <Link
                              to={'/assets/images/gallery/gallery-9.jpg'}
                              class='lightbox-image'
                              data-fancybox='gallery'
                            >
                              <span class='fa fa-plus'></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='auto-container'>
            <div class='footer-bottom'>
              <div class='copyright'>
                Copyright By <Link to={'/'}>CanadaGoals, Inc.</Link> - 2023
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
