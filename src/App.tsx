import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram
} from 'lucide-react';

import Home from './pages/Home';
import Implantologia from './pages/Implantologia';
import Facetas from './pages/Facetas';
import Alinhadores from './pages/Alinhadores';
import Branqueamento from './pages/Branqueamento';
import Prevencao from './pages/Prevencao';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import LocationSection from './components/LocationSection';

function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-primary-light font-sans text-gray-800">

          {/* Navbar */}
          <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-24 items-center">
              <Link to="/" className="flex items-center group gap-2">
                <span className="text-2xl font-serif font-bold text-primary tracking-wide">Porto Implantes</span>
              </Link>

              <div className="hidden md:flex items-center space-x-10">
                <Link to="/" className="nav-link text-gray-600 hover:text-primary font-medium uppercase tracking-wide text-sm transition-colors">{t('home')}</Link>
                <Link to="/#about" className="nav-link text-gray-600 hover:text-primary font-medium uppercase tracking-wide text-sm transition-colors">{t('about')}</Link>

                <div className="relative group">
                  <button className="nav-link text-gray-600 hover:text-primary font-medium uppercase tracking-wide text-sm transition-colors flex items-center">
                    {t('treatments')}
                    <span className="ml-1 text-xs">▼</span>
                  </button>
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Link to="/implantologia" className="block px-6 py-3 text-gray-600 hover:bg-primary-light hover:text-primary border-b border-gray-100">Implantologia</Link>
                    <Link to="/facetas" className="block px-6 py-3 text-gray-600 hover:bg-primary-light hover:text-primary border-b border-gray-100">Facetas</Link>
                    <Link to="/alinhadores" className="block px-6 py-3 text-gray-600 hover:bg-primary-light hover:text-primary border-b border-gray-100">Alinhadores</Link>
                    <Link to="/branqueamento" className="block px-6 py-3 text-gray-600 hover:bg-primary-light hover:text-primary border-b border-gray-100">Branqueamento</Link>
                    <Link to="/prevencao" className="block px-6 py-3 text-gray-600 hover:bg-primary-light hover:text-primary">Prevenção</Link>
                  </div>
                </div>

                <Link to="/blog" className="nav-link text-gray-600 hover:text-primary font-medium uppercase tracking-wide text-sm transition-colors">Blog</Link>

                <a href="#contact" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">{t('contact')}</a>
              </div>

              <div className="flex items-center space-x-4 border-l pl-6 border-gray-200">
                <button onClick={() => i18n.changeLanguage('pt')} className={`font-bold ${i18n.language === 'pt' ? 'text-primary' : 'text-gray-400'} hover:text-primary transition`}>PT</button>
                <button onClick={() => i18n.changeLanguage('en')} className={`font-bold ${i18n.language === 'en' ? 'text-primary' : 'text-gray-400'} hover:text-primary transition`}>EN</button>
              </div>
            </div>
          </nav>

          {/* WhatsApp Float */}
          <a
            href="https://wa.me/351912092209"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20b858] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
            aria-label="WhatsApp"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 2.15.56 4.19 1.61 6.01L0 24l6.48-1.58A11.973 11.973 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm5.37 17.22c-.22.61-1.24 1.18-2.03 1.34-.54.11-1.24.2-3.61-.77-3.05-1.25-5.02-4.32-5.17-4.52-.15-.2-1.24-1.65-1.24-3.14s.78-2.23 1.07-2.52c.29-.29.63-.36.84-.36.22 0 .42.01.61.02.19.01.45-.08.71.54.26.63.87 2.18.94 2.34s.12.34.02.55c-.1.22-.15.35-.3.54-.15.19-.31.42-.44.54-.15.15-.31.31-.13.6.19.3.83 1.37 1.78 2.22 1.22 1.09 2.25 1.43 2.54 1.58.29.14.46.12.63-.07.19-.22.79-.92.99-1.24.19-.32.4-.26.66-.16.27.1 1.69.8 1.98.95.29.15.49.22.56.34.07.12.07.7-.15 1.31z" />
            </svg>
          </a>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/implantologia" element={<Implantologia />} />
            <Route path="/facetas" element={<Facetas />} />
            <Route path="/alinhadores" element={<Alinhadores />} />
            <Route path="/branqueamento" element={<Branqueamento />} />
            <Route path="/prevencao" element={<Prevencao />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>

          <LocationSection />

          {/* Footer */}
          <footer className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-serif font-bold text-white tracking-wide">Porto Implantes</span>
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
                    <li className="flex justify-between"><span>Seg - Sex:</span> <span>09:00 - 19:00</span></li>
                    <li className="flex justify-between"><span>Sábado:</span> <span>09:00 - 13:00</span></li>
                    <li className="flex justify-between"><span>Domingo:</span> <span>Encerrado</span></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-6 border-b border-accent/30 pb-2 w-fit">Contactos</h3>
                  <div className="space-y-4">
                    <a href="tel:+351912092209" className="flex items-center group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-accent transition-colors">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span className="text-primary-light/80 group-hover:text-white transition-colors">+351 912 092 209</span>
                    </a>
                    <a href="mailto:contacto@portoimplantes.pt" className="flex items-center group">
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
                <p>&copy; {new Date().getFullYear()} Porto Implantes. Todos os direitos reservados.</p>
                <div className="mt-4 flex justify-center space-x-6">
                  <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                  <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                  <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Livro de Reclamações</a>
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
