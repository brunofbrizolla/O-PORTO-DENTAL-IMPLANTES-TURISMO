import { useState, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import { currentSite } from './config/siteConfig';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Menu,
  X
} from 'lucide-react';

import LocationSection from './components/LocationSection';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';
import LoadingSpinner from './components/LoadingSpinner';
import { initGA, logPageView, logEvent } from './utils/analytics';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Implantologia = lazy(() => 
  currentSite.id === 'dental-tourism' 
    ? import('./pages/tourism/Implantologia') 
    : import('./pages/Implantologia')
);
const Facetas = lazy(() => 
  currentSite.id === 'dental-tourism' 
    ? import('./pages/tourism/Facetas') 
    : import('./pages/Facetas')
);
const Alinhadores = lazy(() => 
  currentSite.id === 'dental-tourism' 
    ? import('./pages/tourism/Alinhadores') 
    : import('./pages/Alinhadores')
);
const Branqueamento = lazy(() => import('./pages/Branqueamento'));
const Prevencao = lazy(() => import('./pages/Prevencao'));
const TurismoDentario = lazy(() => import('./pages/TurismoDentario'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Component to track page views
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <AnalyticsTracker />
        <ScrollToTop />
        <ChatBot />
        <div className="min-h-screen bg-primary-light font-sans text-gray-800">


          {/* Navbar */}
          <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
              <Link to="/" className="flex items-center group gap-2">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary/10 bg-white flex items-center justify-center shadow-md">
                  <img
                    src={currentSite.logo}
                    alt={currentSite.name}
                    className="h-full w-full object-contain transform scale-[1.35]"
                  />
                </div>
              </Link>

              <div className="hidden md:flex items-center space-x-10">
                <Link to="/" className="nav-link text-gray-600 hover:text-primary font-medium uppercase tracking-wide text-sm transition-colors">{t('home')}</Link>


                <div className="relative group">
                  <button className="nav-link text-gray-600 hover:text-primary font-medium uppercase tracking-wide text-sm transition-colors flex items-center">
                    {t('treatments')}
                    <span className="ml-1 text-xs">▼</span>
                  </button>
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {currentSite.services.includes('implantologia') && <Link to="/implantologia" className="block px-6 py-3 text-gray-600 hover:bg-primary-light hover:text-primary border-b border-gray-100">Implantologia</Link>}
                    {currentSite.services.includes('facetas') && <Link to="/facetas" className="block px-6 py-3 text-gray-600 hover:bg-primary-light hover:text-primary border-b border-gray-100">Facetas</Link>}
                    {currentSite.services.includes('alinhadores') && <Link to="/alinhadores" className="block px-6 py-3 text-gray-600 hover:bg-primary-light hover:text-primary border-b border-gray-100">Alinhadores</Link>}
                    {currentSite.services.includes('branqueamento') && <Link to="/branqueamento" className="block px-6 py-3 text-gray-600 hover:bg-primary-light hover:text-primary border-b border-gray-100">Branqueamento</Link>}
                    {currentSite.services.includes('prevencao') && <Link to="/prevencao" className="block px-6 py-3 text-gray-600 hover:bg-primary-light hover:text-primary">Prevenção</Link>}
                  </div>
                </div>

                <Link to="/blog" className="nav-link text-gray-600 hover:text-primary font-medium uppercase tracking-wide text-sm transition-colors">Blog</Link>

                {/* Desktop Navbar Button */}
                <a href="#appointment" className="hidden md:flex px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg uppercase tracking-wide text-xs font-bold items-center justify-center">{t('contact')}</a>
                {/* Mobile Navbar Button (Simplified if needed, but the user requested mobile calling) */}
                <a href="tel:+351912092209" className="flex md:hidden px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg uppercase tracking-wide text-xs font-bold items-center justify-center">{t('contact')}</a>
              </div>

              <div className="flex items-center space-x-4 border-l pl-6 border-gray-200">
                <button onClick={() => i18n.changeLanguage('pt')} className={`font-bold ${i18n.language === 'pt' ? 'text-primary' : 'text-gray-400'} hover:text-primary transition`}>PT</button>
                <button onClick={() => i18n.changeLanguage('en')} className={`font-bold ${i18n.language === 'en' ? 'text-primary' : 'text-gray-400'} hover:text-primary transition`}>EN</button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-600 hover:text-primary transition-colors p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-24 shadow-xl z-40 animate-slideIn">
                <div className="flex flex-col px-4 py-6 space-y-4 h-[calc(100vh-6rem)] overflow-y-auto">
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-gray-800 hover:text-primary border-b border-gray-50 pb-2"
                  >
                    {t('home')}
                  </Link>

                  <div className="space-y-2">
                    <span className="text-sm font-bold text-accent uppercase tracking-wider block mb-2">{t('treatments')}</span>
                    {currentSite.services.includes('implantologia') && <Link to="/implantologia" onClick={() => setIsMenuOpen(false)} className="block pl-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg">Implantologia</Link>}
                    {currentSite.services.includes('facetas') && <Link to="/facetas" onClick={() => setIsMenuOpen(false)} className="block pl-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg">Facetas</Link>}
                    {currentSite.services.includes('alinhadores') && <Link to="/alinhadores" onClick={() => setIsMenuOpen(false)} className="block pl-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg">Alinhadores</Link>}
                    {currentSite.services.includes('branqueamento') && <Link to="/branqueamento" onClick={() => setIsMenuOpen(false)} className="block pl-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg">Branqueamento</Link>}
                    {currentSite.services.includes('prevencao') && <Link to="/prevencao" onClick={() => setIsMenuOpen(false)} className="block pl-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg">Prevenção</Link>}
                  </div>

                  <Link
                    to="/blog"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-gray-800 hover:text-primary border-b border-gray-50 pb-2"
                  >
                    Blog
                  </Link>

                  <a
                    href="tel:+351912092209"
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-4 w-full bg-primary text-white text-center py-4 rounded-full font-bold shadow-lg"
                  >
                    {t('contact')}
                  </a>
                </div>
              </div>
            )}

            {/* Overlay Background to close when clicking outside */}
            {isMenuOpen && (
              <div
                className="md:hidden fixed inset-0 bg-black/50 z-30"
                style={{ top: '96px' }}
                onClick={() => setIsMenuOpen(false)}
              ></div>
            )}
          </nav>

          {/* WhatsApp Float */}
          <a
            href="https://wa.me/351912092209"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logEvent('Contact', 'WhatsApp Click', 'Float Button')}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20b858] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
            aria-label="WhatsApp"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 2.15.56 4.19 1.61 6.01L0 24l6.48-1.58A11.973 11.973 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm5.37 17.22c-.22.61-1.24 1.18-2.03 1.34-.54.11-1.24.2-3.61-.77-3.05-1.25-5.02-4.32-5.17-4.52-.15-.2-1.24-1.65-1.24-3.14s.78-2.23 1.07-2.52c.22-.29.63-.36.84-.36.22 0 .42.01.61.02.19.01.45-.08.71.54.26.63.87 2.18.94 2.34s.12.34.02.55c-.1.22-.15.35-.3.54-.15.19-.31.42-.44.54-.15.15-.31.31-.13.6.19.3.83 1.37 1.78 2.22 1.22 1.09 2.25 1.43 2.54 1.58.29.14.46.12.63-.07.19-.22.79-.92.99-1.24.19-.32.4-.26.66-.16.27.1 1.69.8 1.98.95.29.15.49.22.56.34.07.12.07.7-.15 1.31z" />
            </svg>
          </a>

          {/* Routes */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {currentSite.id === 'porto-implantes' ? (
                <Route path="/" element={<Home />} />
              ) : (
                <Route path="/" element={<TurismoDentario />} />
              )}
              <Route path="/implantologia" element={<Implantologia />} />
              <Route path="/facetas" element={<Facetas />} />
              <Route path="/alinhadores" element={<Alinhadores />} />
              <Route path="/branqueamento" element={<Branqueamento />} />
              <Route path="/prevencao" element={<Prevencao />} />
              <Route path="/turismo-dentario" element={<TurismoDentario />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </Suspense>

          <LocationSection />

          {/* Footer */}
          <footer className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-serif font-bold text-white tracking-wide">{currentSite.name}</span>
                  </div>
                  <p className="text-primary-light/80 leading-relaxed mb-8 max-w-sm">
                    {t('footerText')}
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 w-fit">{t('scheduleTitle')}</h3>
                  <ul className="space-y-3 text-primary-light/80">
                    <li className="flex justify-between"><span>{t('footerMondayFriday')}:</span> <span>09:00 - 19:00</span></li>
                    <li className="flex justify-between"><span>{t('footerSaturday')}:</span> <span>09:00 - 13:00</span></li>
                    <li className="flex justify-between"><span>{t('footerSunday')}:</span> <span>{t('footerClosed')}</span></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 w-fit">{t('footerContactsTitle')}</h3>
                  <div className="space-y-4">
                    <a href="tel:+351912092209" onClick={() => logEvent('Contact', 'Phone Click', 'Footer')} className="flex items-center group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-accent transition-colors">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-primary-light/80 group-hover:text-white transition-colors block">+351 912 092 209</span>
                        <span className="text-primary-light/60 text-xs group-hover:text-white transition-colors block mt-1">{t('emergencyPhone')}: 963 086 963</span>
                      </div>
                    </a>
                    <a href="mailto:contacto@portoimplantes.pt" onClick={() => logEvent('Contact', 'Email Click', 'Footer')} className="flex items-center group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-accent transition-colors">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span className="text-primary-light/80 group-hover:text-white transition-colors">contacto@portoimplantes.pt</span>
                    </a>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span className="text-primary-light/80">{t('clinicAddress')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 text-center text-primary-light/60 text-sm">
                <p>&copy; {new Date().getFullYear()} {currentSite.name}. {t('footerRights')}</p>
                <div className="mt-4 flex justify-center space-x-6">
                  <a href="#" className="hover:text-white transition-colors">{t('footerTerms')}</a>
                  <a href="#" className="hover:text-white transition-colors">{t('footerPrivacy')}</a>
                  <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t('footerComplaint')}</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
