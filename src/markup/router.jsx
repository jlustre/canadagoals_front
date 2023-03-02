import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Error404 from './pages/404';
import About from './pages/about';
// import BlogDestails from './pages/blog-details';
// import BlogGrid from './pages/blog-grid';
// import BlogStandard from './pages/blog-standard';
// import Careers from './pages/careers';
// import Checkout from './pages/checkout';
import Contact from './pages/contact';
import FaqLocal from './pages/faq-local';
import FaqIntl from './pages/faq-intl';
import FaqGeneral from './pages/faq-general';
import Services1 from './pages/services-1';
import Services2 from './pages/services-2';
import ServicesDetails from './pages/services-details';
import Testimonial1 from './element/testimonial1';
import BackToTop from './layout/backToTop';

class Router extends Component {
  render() {
    return (
      // <BrowserRouter basename={'/demo/fianandox/'}>
      <BrowserRouter>
        <div class='page-wrapper'>
          <Routes>
            <Route path='/' exact element={<Index />} />
            {/* <Route path='/index-2' element={<Index2 />} />
            <Route path='/index-3' element={<Index3 />} />
            <Route path='/index-4' element={<Index4 />} /> */}

            {/* <Route path='/onepage' element={<Onepage />} />
            <Route path='/rtl-home' element={<RtlHome />} /> */}
            <Route path='/404' element={<Error404 />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/blog-details' element={<BlogDestails />} />
            <Route path='/blog-grid' element={<BlogGrid />} />
            <Route path='/blog-standard' element={<BlogStandard />} /> */}
            <Route path='/contact' element={<Contact />} />
            <Route path='/faq-local' element={<FaqLocal />} />
            <Route path='/faq-intl' element={<FaqIntl />} />
            <Route path='/faq-general' element={<FaqGeneral />} />
            <Route path='/services-1' element={<Services1 />} />
            <Route path='/services-2' element={<Services2 />} />
            <Route path='/services-details' element={<ServicesDetails />} />
            <Route path='/test' element={<Testimonial1 />} />
          </Routes>

          <BackToTop />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
