import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Base Layout
import BaseLayout from './layouts/BaseLayout';

//Pages
//General Pages
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import WhyUs from './pages/WhyUs';
import Testimonial from './pages/Testimonial';
import OurStory from './pages/OurStory';
import Career from './pages/Career';
//404 Not Found Page
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/careers" element={<Career />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
};

export default App;
