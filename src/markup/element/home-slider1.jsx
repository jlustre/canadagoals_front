import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';
import BrandLogo from '../../assets/images/ccglogo_light.svg';

const slides = [
  {
    title: 'Your Path to Success Starts Here',
    description:
      'Start your journey towards success with us. Our comprehensive courses and support services will equip you with the knowledge and skills you need to achieve your goals.',
    btnService: 'Apply Now',
    image: require('./../../assets/images/main-slider/students1.jpg'),
  },
  {
    title: 'Making Your Career Goals a Reality',
    description:
      "Whether you're looking to advance in your current career or pursue a new one, we provide the tools, resources, and support you need to succeed.",
    // btnService: 'Apply Now',
    image: require('./../../assets/images/main-slider/students3.jpg'),
  },
  {
    title: 'Discover Your Next Career Move with Us',
    description:
      'We help you uncover your full potential by providing a wide range of educational and career opportunities.',
    image: require('./../../assets/images/main-slider/students4.jpg'),
  },
  {
    title: 'Bridge the Gap to Your Future Career',
    description:
      "Whether you're a local or international student, we offer a range of courses, financial assistance, and support services to help you make your career aspirations a reality.",
    image: require('./../../assets/images/main-slider/students5.jpg'),
  },
];

class HomeSlider1 extends Component {
  render() {
    return (
      <>
        <Slider className='slider-wrapper' autoplay>
          {slides.map((slide, index) => (
            <div
              key={index}
              className='slider-content'
              style={{
                background: `url('${slide.image}') no-repeat center center`,
                backgroundSize: 'cover',
              }}
            >
              <div className='inner relative'>
                <h2 className='d-flex flex-column justify-content-end justify-content-md-start align-items-end align-items-md-center justify-content-md-center'>
                  <img
                    className='brandlogo-slider'
                    src={BrandLogo}
                    alt='CCG Logo Slider'
                  />
                </h2>
                <div className='d-flex justify-content-center justify-content-md-end'>
                  <div className='text d-flex flex-column'>
                    <h1>{slide.title}</h1>
                    <div>{slide.description}</div>
                  </div>
                </div>
                <div class='btn-box'>
                  <Link to={'/#'} class='theme-btn btn-style-one'>
                    <span class='btn-title'>{slide.btnService}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <section class="banner-section">
                    <div class="banner-carousel theme_carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'>
                        
                        <div class="slide-item">
                            <div class="image-layer lazy-image" data-bg="url('assets/images/main-slider/1.jpg')"></div>

                            <div class="auto-container">
                                <div class="content-box">
                                    <h3>Making Your Business Idea</h3>
                                    <h2>Finan<span>dox </span></h2>
                                    <div class="text">Our company is one of the world’s leading management <br />consulting firms. Get in touch here asap.</div>
                                    <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">-- Our Services --</span></Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">-- Learn More --</span></Link></div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="slide-item">
                            <div class="image-layer lazy-image" data-bg="url('assets/images/main-slider/5.jpg')"></div>

                            <div class="auto-container">
                                <div class="content-box">
                                    <h3>Making Your Business Idea</h3>
                                    <h2>Finan<span>dox </span></h2>
                                    <div class="text">Our company is one of the world’s leading management <br />consulting firms. Get in touch here asap.</div>
                                    <div class="btn-box"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">-- Our Services --</span></Link><Link to={'/#'} class="theme-btn btn-style-two"><span class="btn-title">-- Learn More --</span></Link></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section> */}
      </>
    );
  }
}
export default HomeSlider1;
