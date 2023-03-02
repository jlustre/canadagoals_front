import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import { Link } from 'react-router-dom';
import { Nav, Tab } from 'react-bootstrap';
import HomeSlider1 from '../element/home-slider1';
const wellcomebg1 = require('./../../assets/images/resource/consultant.jpg');

const Index = () => {
  return (
    <>
      <Header />

      {/* <!--Search Popup--> */}
      <div id='search-popup' class='search-popup'>
        <div class='close-search theme-btn'>
          <span class='flaticon-cancel'></span>
        </div>
        <div class='popup-inner'>
          <div class='overlay-layer'></div>
          <div class='search-form'>
            <form
              method='post'
              action='http://azim.commonsupport.com/Finandox/index.html'
            >
              <div class='form-group'>
                <fieldset>
                  <input
                    type='search'
                    class='form-control'
                    name='search-input'
                    value=''
                    placeholder='Search Here'
                    required
                  />
                  <input type='submit' value='Search Now!' class='theme-btn' />
                </fieldset>
              </div>
            </form>
            <br />
            <h3>Recent Search Keywords</h3>
            <ul class='recent-searches'>
              <li>
                <Link to={'/#'}>Finance</Link>
              </li>
              <li>
                <Link to={'/#'}>Idea</Link>
              </li>
              <li>
                <Link to={'/#'}>Service</Link>
              </li>
              <li>
                <Link to={'/#'}>Growth</Link>
              </li>
              <li>
                <Link to={'/#'}>Plan</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <HomeSlider1 />

      {/* <!-- Welcome Section --> */}
      <section class='welcome-section pt-0'>
        <div class='auto-container'>
          <div class='wrapper-box'>
            <div class='row m-0'>
              {/* <!-- Welcome Block One --> */}
              <div
                class='welcome-block-one col-lg-4 wow fadeInUp'
                data-wow-delay='200ms'
                data-wow-duration='1200ms'
              >
                <div class='inner-box'>
                  <div class='icon-box'>
                    <span class='flaticon-resume'></span>
                  </div>
                  <h2>We Assist You With Your Application</h2>
                  <div class='text'>
                    We offer expert assistance in the application process,
                    guiding you every step of the way to ensure that your
                    application is complete and accurate.{' '}
                  </div>
                  {/* <div class='read-more'>
                    <Link to={'/#'}>Read More</Link>
                  </div> */}
                </div>
              </div>
              {/* <!-- Welcome Block One --> */}
              <div
                class='welcome-block-one col-lg-4 wow fadeInUp'
                data-wow-delay='200ms'
                data-wow-duration='1200ms'
              >
                <div
                  class='inner-box'
                  style={{ backgroundImage: 'url(' + wellcomebg1 + ')' }}
                >
                  <div class='icon-box'>
                    <span class='flaticon-tax'></span>
                  </div>
                  <h2>
                    We Help You Strategize To Maximize Your Financial Aids
                  </h2>
                  <div class='text'>
                    Our experienced team will work with you to explore all
                    available avenues, including grants, loans, and
                    scholarships, to ensure that you receive the maximum
                    financial aid possible that you're entitled to.{' '}
                  </div>
                  <div class='top-center'>
                    <Link to={'/#'} class='theme-btn btn-style-two'>
                      <span class='btn-title'>Apply Now</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- Welcome Block One --> */}
              <div
                class='welcome-block-one col-lg-4 wow fadeInUp'
                data-wow-delay='200ms'
                data-wow-duration='1200ms'
              >
                <div class='inner-box'>
                  <div class='icon-box'>
                    <span class='flaticon-target-1'></span>
                  </div>
                  <h2>We Guide You In Your Course Selection</h2>
                  <div class='text'>
                    Our team will collaborate with you to identify the most
                    suitable courses and programs that align with your academic
                    and career objectives and help you pick the right school.{' '}
                  </div>
                  {/* <div class='read-more'>
                    <Link to={'/#'}>Read More</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section class='about-section'>
        <div class='auto-container'>
          <div class='row align-items-center'>
            <div class='col-lg-6'>
              <div class='image-wrapper'>
                <div class='image-one'>
                  <img
                    src={require('../../assets/images/resource/image-2.jpg')}
                    alt=''
                  />
                </div>
                <div
                  class='image-two wow fadeInUp'
                  data-wow-delay='200ms'
                  data-wow-duration='1200ms'
                >
                  <div class='image-outer'>
                    <img
                      src={require('../../assets/images/resource/image-3.jpg')}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='content-box'>
                <div class='sec-title'>
                  <div class='sub-title'>Who We Are</div>
                  <div class='mx-1'>
                    <h2 className='text-center text-md-start'>
                      Empowering Students to Achieve Their Dreams
                    </h2>
                  </div>

                  <div class='text'>
                    Our story began with a passion for helping students realize
                    their potential and make their career goals a reality. We
                    understand that the path to success can be challenging, but
                    we are here to provide the guidance and support you need to
                    overcome any obstacles. Our mission is to empower you with
                    the knowledge and skills to succeed in your chosen field.
                    Join us on this journey and let's build a brighter future
                    together.
                  </div>
                </div>
                <div class='row'>
                  <div class='info-column col-md-6'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <img
                          src={require('../../assets/images/icons/icon-1.png')}
                          alt=''
                        />
                      </div>
                      <h5>Phone Number</h5>
                      <h2>(778) 302-4500</h2>
                    </div>
                  </div>
                  <div class='info-column col-md-6'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <img
                          src={require('../../assets/images/icons/icon-2.png')}
                          alt=''
                        />
                      </div>
                      <h5>Email Address</h5>
                      <h2>info@canadagoals.com</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='row justify-content-center'>
            <Link to={'/#'} class='theme-btn btn-style-one'>
              <span class='btn-title'>Apply Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- Video Section --> */}
      {/* <VideoPopup1 /> */}

      {/* <!-- Why Choose Us Section --> */}
      <section class='why-chooseus-section'>
        <div class='auto-container'>
          <div class='row align-items-center'>
            <div class='col-lg-6'>
              <div class='content-box'>
                <div class='sec-title'>
                  <div class='sub-title'>Why Choose Us</div>
                  <h2 className='text-center text-md-start'>
                    Why Should You Choose Us?
                  </h2>
                </div>
                <Tab.Container defaultActiveKey='first'>
                  <Nav
                    variant='pills'
                    className='nav nav-tabs tab-btn-style-one'
                  >
                    <Nav.Item>
                      <Nav.Link eventKey='first'>
                        <span>Our Mission</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='second'>
                        <span>Our Vision</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='third'>
                        <span>Our Values</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className='tabs-content'>
                    <Tab.Pane eventKey='first' className='fadeInUp animated'>
                      <div class='clearfix'>
                        <div class='image'>
                          <img
                            src={require('../../assets/images/resource/image-4.jpg')}
                            alt=''
                          />
                        </div>
                        <div class='text'>
                          <p>
                            Our mission is to be the premier provider of
                            educational support services, helping students from
                            all backgrounds achieve their academic and career
                            goals through innovative programs, expert guidance,
                            and personalized attention.
                          </p>
                          <p>
                            We believe that every student deserves access to
                            quality education and the opportunity to achieve
                            their dreams.
                          </p>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey='second' className='fadeInUp animated'>
                      <div class='clearfix'>
                        <div class='image'>
                          <img
                            src={require('../../assets/images/resource/image-4.jpg')}
                            alt=''
                          />
                        </div>
                        <div class='text'>
                          <p>
                            To become the leading provider of education and
                            career services, empowering individuals to achieve
                            their full potential.
                          </p>
                          <p>
                            To help individuals reach their full potential and
                            achieve their dreams, by providing them with the
                            tools, resources, and support they need to succeed.
                          </p>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey='third' className='fadeInUp animated'>
                      <div class='clearfix'>
                        <div class='image'>
                          <img
                            src={require('../../assets/images/resource/image-4.jpg')}
                            alt=''
                          />
                        </div>
                        <div class='text'>
                          <p>
                            We strive for excellence in everything we do, from
                            our services to our customer support, to ensure the
                            best possible outcome for our students.
                          </p>
                          <p>
                            We put our students first, prioritizing their needs
                            and satisfaction to ensure a positive and rewarding
                            experience with our services.
                          </p>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='image-wrapper'>
                <div class='image-one'>
                  <img
                    src={require('../../assets/images/resource/image-6.jpg')}
                    alt=''
                  />
                </div>
                <div class='image-two'>
                  <img
                    src={require('../../assets/images/resource/image-5.jpg')}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section class='contact-section'>
        <div class='auto-container'>
          <div class='row'>
            <div class='col-lg-6'>
              <div class='sec-title'>
                <div class='sub-title'>Write Here</div>
                <h2 className='text-center text-md-start'>Get In Touch</h2>
              </div>
              {/* <!-- Contact Form--> */}
              <div class='contact-form'>
                <form
                  method='post'
                  action='http://azim.commonsupport.com/Finandox/sendemail.php'
                  id='contact-form'
                >
                  <div class='row clearfix'>
                    <div class='col-md-12 form-group'>
                      <label for='name'>Enter your name</label>
                      <input
                        type='text'
                        name='username'
                        id='name'
                        placeholder='Enter name here......'
                        required=''
                      />
                      <i class='fas fa-user'></i>
                    </div>

                    <div class='col-md-12 form-group'>
                      <label for='email'>Enter your email</label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter email here......'
                        required=''
                      />
                      <i class='fas fa-envelope'></i>
                    </div>

                    <div class='col-md-12 form-group'>
                      <label for='message'>Enter your message</label>
                      <textarea
                        name='message'
                        id='message'
                        placeholder='Enter message here......'
                      ></textarea>
                      <i class='fas fa-edit'></i>
                    </div>

                    <div class='col-md-12 form-group'>
                      <button
                        class='theme-btn btn-style-one'
                        type='submit'
                        name='submit-form'
                      >
                        <span class='btn-title'>Get In Touch</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='sec-title'>
                <div class='sub-title'>Get Us Here</div>
                <h2 className='text-center text-md-start'>Contact Us</h2>
              </div>
              <div class='contact-info'>
                <div class='border-box'>
                  <div class='border_top'></div>
                  <div class='border_middile'></div>
                </div>
                <div class='row'>
                  <div class='info-column col-md-6'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-email-6'></span>
                      </div>
                      <h3>Email Address</h3>
                      <ul>
                        <li>
                          <Link to={'/mailto:info@webmail.com'}>
                            info@webmail.com
                          </Link>
                        </li>
                        <li>
                          <Link to={'/mailto:jobs@exampleco.com'}>
                            jobs@exampleco.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class='info-column col-md-6'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-call-1'></span>
                      </div>
                      <h3>Phone Number</h3>
                      <ul>
                        <li>
                          <Link to={'/tel:+8976765654654'}>
                            +897 676 5654 654
                          </Link>
                        </li>
                        <li>
                          <Link to={'/tel:+908(097)56476576'}>
                            +908(097) 564 765 76
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class='info-column col-md-6'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-location'></span>
                      </div>
                      <h3>Office Address</h3>
                      <ul>
                        <li>
                          12/A, Romania City Town Hall <br />
                          New Joursey, UK
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class='info-column col-md-6'>
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-worldwide'></span>
                      </div>
                      <h3>Web Connect</h3>
                      <ul>
                        <li>
                          <Link to={'/http://example.com/'}>example.com</Link>
                        </li>
                        <li>
                          <Link to={'/http://jobs.example.com/'}>
                            jobs.example.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
