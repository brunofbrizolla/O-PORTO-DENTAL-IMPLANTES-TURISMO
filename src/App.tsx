import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import emailjs from '@emailjs/browser';
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Activity as Tooth,
  Award,
  Users,
  Calendar,
  MessageCircle,
  Star,
  Quote,
  CheckCircle2,
  MessageCircleMore,
  PhoneCall,
  Loader2,
} from 'lucide-react';

function App() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.sendForm(
        'service_htj9n8s', // Verifique no EmailJS
        'template_zzz72ek', // Confirme que este template existe
        formRef.current!,
        'meaA1Ni7_dJtElS0x' // Certifique-se de que a chave pública está correta
      );

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Erro ao enviar a mensagem. Por favor, tente novamente.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-primary-light">
      {/* Navbar com Troca de Idioma */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20">
          <div className="flex items-center animate-fadeIn">
            <Tooth className="h-8 w-8 text-primary animate-pulse" />
            <span className="ml-2 text-2xl font-bold text-primary">
              {t('doctorName')}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">
              {t('home')}
            </a>
            <a href="#about" className="nav-link">
              {t('about')}
            </a>
            <a href="#treatments" className="nav-link">
              {t('treatments')}
            </a>
            <a href="#testimonials" className="nav-link">
              {t('testimonials')}
            </a>
            <a href="#contact" className="nav-link">
              {t('contact')}
            </a>
          </div>
          <div>
            <button onClick={() => i18n.changeLanguage('pt')} className="mr-2">
              Português
            </button>
            <button onClick={() => i18n.changeLanguage('en')}> English</button>
          </div>
        </div>
      </nav>
      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/351912092209"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 2.15.56 4.19 1.61 6.01L0 24l6.48-1.58A11.973 11.973 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm5.37 17.22c-.22.61-1.24 1.18-2.03 1.34-.54.11-1.24.2-3.61-.77-3.05-1.25-5.02-4.32-5.17-4.52-.15-.2-1.24-1.65-1.24-3.14s.78-2.23 1.07-2.52c.29-.29.63-.36.84-.36.22 0 .42.01.61.02.19.01.45-.08.71.54.26.63.87 2.18.94 2.34s.12.34.02.55c-.1.22-.15.35-.3.54-.15.19-.31.42-.44.54-.15.15-.31.31-.13.6.19.3.83 1.37 1.78 2.22 1.22 1.09 2.25 1.43 2.54 1.58.29.14.46.12.63-.07.19-.22.79-.92.99-1.24.19-.32.4-.26.66-.16.27.1 1.69.8 1.98.95.29.15.49.22.56.34.07.12.07.7-.15 1.31z" />
        </svg>
      </a>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[600px] bg-cover bg-center animate-fadeIn"
        style={{
          backgroundImage: 'url("https://i.ibb.co/1YBXhYrt/3-11zon.jpg")',
        }}
      >
        {/* Overlay de sombra 20% para contraste */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-start pt-16">
          <div className="text-white max-w-md mt-4">
            {[
              {
                key: 'hero',
                title: t('implantsTitle'),
                description: t('heroDescription'),
                buttonText: t('bookAppointment'),
                phone: '+351912092209',
              },
            ].map((hero, index) => (
              <div key={index}>
                <h1 className="text-4xl font-extrabold tracking-wide mb-6 drop-shadow-2xl">
                  {hero.title}
                </h1>
                <p
                  className="text-lg mb-8"
                  dangerouslySetInnerHTML={{ __html: hero.description }}
                />

                {/* Botão para ligação - AGORA COM TAMANHO MENOR */}
                <a
                  href={`tel:${hero.phone}`}
                  className="flex items-center px-4 py-2 text-base font-medium bg-[#0F6C6C] hover:bg-[#0C5A5A] text-white rounded-full shadow-lg transform hover:scale-105 transition w-fit"
                >
                  <PhoneCall className="h-4 w-4 mr-2" />
                  {hero.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gradient-to-b from-primary to-[#015456]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {t('specialties')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                key: 'implants',
                image:
                  'https://i.ibb.co/BN4r6Pn/Whats-App-Image-2025-01-22-at-11-25-56-1-2-11zon.jpg',
              },
              {
                key: 'orthodontics',
                image: 'https://i.ibb.co/KyZhJGM/mmm-11zon.jpg',
              },
              {
                key: 'veneers',
                image:
                  'https://i.ibb.co/bKPs0mN/Imagem-do-Whats-App-de-2025-01-23-s-23-54-00-1b9ad4c3.jpg',
              },
            ].map((specialty, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">
                  <img
                    src={specialty.image}
                    alt={t(`${specialty.key}Title`)}
                    className="w-full h-full object-cover rounded-lg mb-4 transition-transform hover:scale-105"
                    style={{ aspectRatio: '1' }}
                  />
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {t(`${specialty.key}Title`)}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    {t(`${specialty.key}Description`)}
                  </p>
                  <a
                    href="tel:+351912092209"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all hover:scale-105 flex items-center justify-center w-full"
                  >
                    <PhoneCall className="h-5 w-5 mr-2" />
                    <span>{t('callNow')}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Treatments Section */}
      <section id="treatments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('treatmentTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { key: 'whitening', icon: <CheckCircle2 className="h-8 w-8" /> },
              { key: 'braces', icon: <CheckCircle2 className="h-8 w-8" /> },
              {
                key: 'treatment_implants',
                icon: <CheckCircle2 className="h-8 w-8" />,
              },
              {
                key: 'extractions',
                icon: <CheckCircle2 className="h-8 w-8" />,
              },
              {
                key: 'endodontics',
                icon: <CheckCircle2 className="h-8 w-8" />,
              },
              {
                key: 'dentalCleaning',
                icon: <CheckCircle2 className="h-8 w-8" />,
              },
            ].map((treatment, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/20"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {treatment.icon}
                  </div>
                  <h3 className="text-xl font-bold ml-3 text-primary group-hover:text-accent transition-colors">
                    {t(`${treatment.key}`)}
                  </h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors mb-4">
                  {t(`${treatment.key}Description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Diferentials Section */}
      <section className="py-16" style={{ backgroundColor: '#02303f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {t('differentialsTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                key: 'advancedTechnology',
                icon: <Award className="h-8 w-8 text-accent" />,
              },
              {
                key: 'specializedTeam',
                icon: <Users className="h-8 w-8 text-accent" />,
              },
              {
                key: 'humanizedCare',
                icon: <MessageCircle className="h-8 w-8 text-accent" />,
              },
            ].map((differential, index) => (
              <div
                key={index}
                className="bg-primary-light p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary p-4 rounded-full w-fit mb-6">
                  {differential.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t(`${differential.key}`)}
                </h3>
                <p className="text-gray-600">
                  {t(`${differential.key}Description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('testimonialsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { key: 'testimonial1' },
              { key: 'testimonial2' },
              { key: 'testimonial3' },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-light p-8 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-gray-600 mb-4">
                  "{t(`${testimonial.key}`)}"
                </p>
                <p className="font-semibold text-primary">
                  {t(`${testimonial.key}Author`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="flex justify-end pr-16">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  {t('aboutTitle')}
                </h2>
                <p className="text-gray-600">{t('aboutDescription')}</p>
              </div>
            </div>
            <div className="flex justify-start pl-16">
              <img
                src="https://i.ibb.co/DLYFGR5/Whats-App-Image-2025-01-22-at-11-27-47-4-11zon.jpg"
                alt="Equipe Médica"
                className="rounded-lg shadow-xl object-cover"
                style={{ width: '70%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="appointment" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('appointmentTitle')}
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg relative">
            {showSuccess && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg flex items-center space-x-2 animate-fadeIn">
                <CheckCircle2 className="h-5 w-5" />
                <span>Enviado com sucesso!</span>
              </div>
            )}
            {error && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg flex items-center space-x-2 animate-fadeIn">
                <span>{error}</span>
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('namePlaceholder')}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('emailPlaceholder')}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={t('phonePlaceholder')}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={t('messagePlaceholder')}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <MessageCircleMore className="h-5 w-5" />
                )}
                <span>{isSubmitting ? 'Enviando...' : t('sendMessage')}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#015456] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Informações da clínica */}
            <div>
              <div className="flex items-center">
                <Tooth className="h-8 w-8 text-accent" />
                <span className="ml-2 text-2xl font-bold">
                  {t('doctorName')}
                </span>
              </div>
              <p className="mt-4 text-gray-300 whitespace-pre-line">
                {t('footerText')}
              </p>
            </div>

            {/* Horário de funcionamento */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t('scheduleTitle')}
              </h3>
              <p className="text-gray-300">
                {t('scheduleWeek')}
                <br />
                {t('scheduleSaturday')}
                <br />
                {t('scheduleSunday')}
              </p>
            </div>

            {/* Contato para agendamentos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t('appointmentSectionTitle')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 text-accent mr-2" />
                  <span>{t('phoneLabel')}: +351 912 092 209</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 text-accent mr-2" />
                  <span>{t('emailLabel')}: contacto@portoimplantes.pt</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-accent mr-2" />
                  <span>
                    {t('addressLabel')}: {t('clinicAddress')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Direitos reservados e Livro de Reclamações */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-gray-300">
            <p>{t('rightsReserved')}</p>
            <div className="mt-4 flex justify-center items-center gap-8 flex-wrap">
              {/* Widget WhatClinic */}
              <a
                className="whatclinic-service-score-widget dark square"
                style={{ width: '150px', height: '150px', display: 'inline-block' }}
                href="https://www.whatclinic.com/dentists/portugal/porto/dra-katia-fragoso"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatClinic Service Score"
              ></a>
              
              {/* Livro de Reclamações */}
              <a
                href="https://www.livroreclamacoes.pt/inicio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                {/* Imagem do Livro de Reclamações */}
                <img
                  src="https://i.ibb.co/PsskB0bH/reclame-3.png"
                  className="w-20 h-20"
                  alt="Livro de Reclamações"
                />
                {/* Texto "Livro de Reclamações" */}
                <span className="text-red-500 font-semibold text-lg">
                  {t('complaintsBook')}
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
