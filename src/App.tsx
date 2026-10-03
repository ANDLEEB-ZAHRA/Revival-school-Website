import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Programs } from './pages/Programs';
import { Montessori } from './pages/Montessori';
import { Admissions } from './pages/Admissions';
import { Activities } from './pages/Activities';
import { Events } from './pages/Events';
import { Gallery } from './pages/Gallery';
import { Teachers } from './pages/Teachers';
import { Parents } from './pages/Parents';
import { StudentLife } from './pages/StudentLife';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f8fafd] text-slate-800 antialiased font-sans">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/montessori" element={<Montessori />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
