import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Index2 from './pages/index-2';
import Index3 from './pages/index-3';
import Index4 from './pages/index-4';
import Onepage from './pages/onepage';
import RtlHome from './pages/rtl-home';
import Error404 from './pages/404';
import About from './pages/about';
import BlogDestails from './pages/blog-details';
import BlogGrid from './pages/blog-grid';
import BlogStandard from './pages/blog-standard';
import Careers from './pages/careers';
import Checkout from './pages/checkout';
import Contact from './pages/contact';
import Faq from './pages/faq';
import Portfolio1 from './pages/portfolio-1';
import Portfolio2 from './pages/portfolio-2';
import PortfolioDetails from './pages/portfolio-details';
import ProductDetails from './pages/product-details';
import Services1 from './pages/services-1';
import Services2 from './pages/services-2';
import ServicesDetails from './pages/services-details';
import Shop from './pages/shop';
import ShoppingCart from './pages/shopping-cart';
import TeamDetails from './pages/team-details';
import Team from './pages/team';
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
            <Route path='/index-2' element={<Index2 />} />
            <Route path='/index-3' element={<Index3 />} />
            <Route path='/index-4' element={<Index4 />} />

            <Route path='/onepage' element={<Onepage />} />
            <Route path='/rtl-home' element={<RtlHome />} />
            <Route path='/404' element={<Error404 />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog-details' element={<BlogDestails />} />
            <Route path='/blog-grid' element={<BlogGrid />} />
            <Route path='/blog-standard' element={<BlogStandard />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/portfolio-1' element={<Portfolio1 />} />
            <Route path='/portfolio-2' element={<Portfolio2 />} />
            <Route path='/portfolio-details' element={<PortfolioDetails />} />
            <Route path='/product-details' element={<ProductDetails />} />
            <Route path='/services-1' element={<Services1 />} />
            <Route path='/services-2' element={<Services2 />} />
            <Route path='/services-details' element={<ServicesDetails />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shopping-cart' element={<ShoppingCart />} />
            <Route path='/team-details' element={<TeamDetails />} />
            <Route path='/team' element={<Team />} />
            <Route path='/test' element={<Testimonial1 />} />
          </Routes>

          <BackToTop />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
