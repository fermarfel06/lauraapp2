import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ProgressPage from './pages/ProgressPage';
import ContactPage from './pages/ContactPage';

// Placeholder for Privacy Policy page or any other static page
const PrivacyPolicyPage: React.FC = () => (
  <div className="container mx-auto px-4 py-16 text-center min-h-[calc(100vh-200px)]">
    <h1 className="text-4xl font-bold text-[#0E0E0E] mb-4">Privacy Policy</h1>
    <p className="text-[#434343]">Placeholder for Privacy Policy content.</p>
  </div>
);


const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F3ECFF]">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
