import React, { Component } from 'react';
// import Image from 'next/image';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Menu from './menu';
import BrandLogo from '../../assets/images/ccglogo_light.svg';
import BrandLogo2 from '../../assets/images/canadacareergoalslogo.svg';

const options = [
  { value: 'English', label: 'English' },
  //   { value: 'French', label: 'French' },
  //   { value: 'Spanish', label: 'Spanish' },
];

const companyinfo = {
  contactphone: '778-302-4500',
  contactemail: 'info@canadagoals.com',
};

class Header extends Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    var btn = document.querySelector('.mobile-nav-toggler');
    var closeBtn = document.querySelector('.close-btn');
    var body = document.getElementsByTagName('body')[0];

    function addFunc() {
      return body.classList.add('mobile-menu-visible');
    }
    function closeFunc() {
      return body.classList.remove('mobile-menu-visible');
    }

    btn.addEventListener('click', addFunc);
    closeBtn.addEventListener('click', closeFunc);

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    return (
      <>
        <header class={scrolled ? 'main-header fixed-header' : 'main-header'}>
          <div class='header-top'>
            <div class='auto-container'>
              <div class='inner'>
                <div class='top-left'>
                  <div class='logo-box'>
                    <div class='logo'>
                      <Link to={'/'}>
                        <img class='brandlogo' src={BrandLogo} alt='CCG Logo' />
                      </Link>
                    </div>
                  </div>
                </div>

                <div class='top-middile'>
                  <div class='language'>
                    <span>Language:</span>
                    <form action='#' class='language-switcher'>
                      <Select options={options} />
                    </form>
                  </div>
                  <div class='contact-info'>
                    <div class='single-info'>
                      <div class='icon-box'>
                        <i class='flaticon-call-1'></i>
                      </div>
                      <div class='text'>Phone Number</div>

                      <h4>{companyinfo.contactphone}</h4>
                    </div>
                    <div class='single-info'>
                      <div class='icon-box'>
                        <i class='flaticon-email-4'></i>
                      </div>
                      <div class='text'>Email Address</div>
                      <h4>{companyinfo.contactemail}</h4>
                    </div>
                  </div>
                </div>

                <div class='top-right'>
                  <Link to={'/#'} class='theme-btn btn-style-two'>
                    <span class='btn-title'>Apply Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class='header-upper'>
            <div class='auto-container'>
              <div class='inner-container'>
                <div class='nav-outer clearfix'>
                  <div class='mobile-nav-toggler'>
                    <span class='icon fal fa-bars'></span>
                  </div>

                  <nav class='main-menu navbar-expand-md navbar-light'>
                    <Menu />
                  </nav>

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
                        <span class='fab fa-linkedin-in'></span>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/#'}>
                        <span class='fab fa-pinterest-p'></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            class={
              scrolled ? 'sticky-header animated slideInDown' : 'sticky-header'
            }
          >
            <div class='auto-container clearfix'>
              <div class='logo pull-left'>
                <Link to={'/#'} title=''>
                  <img class='brandlogo' src={BrandLogo2} alt='CCG Logo' />
                </Link>
              </div>

              <div class='pull-right'>
                <nav class='main-menu clearfix'>
                  <div className='d-flex justify-content-between'>
                    <Menu />
                    <div class='top-right'>
                      <Link to={'/#'} class='theme-btn btn-style-one'>
                        <span
                          class='btn-title'
                          style={{ whiteSpace: 'nowrap', marginLeft: '20px' }}
                        >
                          Apply Now
                        </span>
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div class='mobile-menu'>
            <div class='menu-backdrop'></div>
            <div class='close-btn'>
              <span class='icon flaticon-cancel'></span>
            </div>

            <nav class='menu-box'>
              <div class='nav-logo'>
                <Link to={'/#'}>
                  <img
                    src='assets/images/canadagoalslogo.png'
                    alt=''
                    title=''
                  />
                </Link>
              </div>
              <div class='menu-outer'>
                <Menu />
              </div>
              <div class='social-links'>
                <ul class='clearfix'>
                  <li>
                    <Link to={'/#'}>
                      <span class='fab fa-twitter'></span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/#'}>
                      <span class='fab fa-facebook-square'></span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/#'}>
                      <span class='fab fa-pinterest-p'></span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/#'}>
                      <span class='fab fa-instagram'></span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/#'}>
                      <span class='fab fa-youtube'></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
