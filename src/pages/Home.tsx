import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
    PhoneCall,
    CheckCircle2,
    Award,
    Users,
    Star,
    Loader2,
    MessageCircleMore,
    ArrowRight,
    Sparkles,
    Heart
} from 'lucide-react';

import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { logEvent } from '../utils/analytics';

const Home = () => {
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
                'service_htj9n8s',
                'template_zzz72ek',
                formRef.current!,
                'meaA1Ni7_dJtElS0x'
            );
            setShowSuccess(true);
            logEvent('Contact', 'Form Submission', 'Home Page Appointment');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (err) {
            setError(t('formErrorMessage'));
            console.error('EmailJS Error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Porto Implantes - Dra. Kátia Fragoso",
        "image": "https://portoimplantes.pt/assets/uploads/logo_header.png",
        "@id": "https://portoimplantes.pt",
        "url": "https://portoimplantes.pt",
        "telephone": "+351912092209",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Arquitecto Marques da Silva, 285",
            "addressLocality": "Porto",
            "postalCode": "4150-484",
            "addressCountry": "PT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.1610424,
            "longitude": -8.6291605
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "13:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/katiabritodentaria",
            "https://www.instagram.com/portoimplantes"
        ]
    };

    return (
        <>
            <SEO
                title={t('metaTitleHome')}
                description={t('metaDescHome')}
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            {/* Hero Section - Full Screen, Cinematic, Emotional */}
            <section
                id="home"
                className="relative h-screen bg-cover bg-center animate-fadeIn"
                style={{
                    backgroundImage: 'url("/assets/uploads/home_hero_new.jpg")',
                    backgroundPosition: 'center top',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Gradient Overlay for sophisticated feel */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

                <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
                    <div className="text-white max-w-2xl animate-slideIn pl-4 border-l-4 border-accent">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block text-sm md:text-base">
                            {t('heroSubtitle')}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('heroTitle') }}></span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light max-w-lg leading-relaxed">
                            {t('heroText')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#appointment"
                                onClick={() => logEvent('CTA', 'Hero Appointment Click', 'Home Hero')}
                                className="flex items-center justify-center px-8 py-4 text-lg font-medium bg-accent hover:bg-white hover:text-primary text-white rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <PhoneCall className="h-5 w-5 mr-3" />
                                {t('heroCtaAppointment')}
                            </a>
                            <a
                                href="#services"
                                className="flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-white text-white hover:bg-white hover:text-primary rounded-full transition-all duration-300"
                            >
                                {t('heroCtaTreatments')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Trust Section (Livedent style: Icons + Whitespace) */}
            <section className="py-6 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary font-serif mb-6">{t('whyChooseTitle')}</h2>
                        <p className="text-gray-600 text-lg">
                            {t('whyChooseSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-primary-light/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-accent transition-colors">
                                <Sparkles className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{t('featureTechnology')}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t('featureTechnologyDesc')}
                            </p>
                        </div>
                        <div className="bg-primary-light/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-accent transition-colors">
                                <Heart className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{t('featureHumanized')}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t('featureHumanizedDesc')}
                            </p>
                        </div>
                        <div className="bg-primary-light/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-accent transition-colors">
                                <Award className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{t('featureSpecialized')}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t('featureSpecializedDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services - Clean, Large Cards */}
            <section id="services" className="py-6 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                        <div className="max-w-2xl">
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">{t('specialtiesSubtitle')}</span>
                            <h2 className="text-3xl font-bold text-primary font-serif">{t('specialtiesTitle')}</h2>
                        </div>
                        <a href="#appointment" className="hidden md:flex items-center text-primary font-semibold hover:text-accent transition-colors mt-4 md:mt-0">
                            {t('bookAppointment')} <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Implantologia */}
                        <Link to="/implantologia" className="group cursor-pointer">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                <img src="/assets/uploads/doctor_implant_hero_new.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Implantologia" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">{t('cardImplantTitle')}</h3>
                                    <p className="text-gray-200 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {t('cardImplantDesc')}
                                    </p>
                                    <span className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform">
                                        {t('knowMore')} <ArrowRight className="ml-2 w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Facetas */}
                        <Link to="/facetas" className="group cursor-pointer">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                <img src="/assets/uploads/facetas_hero_new.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Facetas" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">{t('cardVeneersTitle')}</h3>
                                    <p className="text-gray-200 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {t('cardVeneersDesc')}
                                    </p>
                                    <span className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform">
                                        {t('knowMore')} <ArrowRight className="ml-2 w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Alinhadores */}
                        <Link to="/alinhadores" className="group cursor-pointer">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                <img src="/assets/uploads/alinhadores_hero_new.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Ortodontia" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">{t('cardAlignersTitle')}</h3>
                                    <p className="text-gray-200 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {t('cardAlignersDesc')}
                                    </p>
                                    <span className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform">
                                        {t('knowMore')} <ArrowRight className="ml-2 w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link to="/branqueamento" className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all flex items-center overflow-hidden">
                            <div className="relative z-10 flex-1">
                                <h4 className="text-2xl font-bold text-primary mb-2">{t('whitening')}</h4>
                                <p className="text-gray-600 mb-4">{t('whiteningDescription')}</p>
                                <span className="text-accent font-medium flex items-center group-hover:translate-x-2 transition-transform">
                                    {t('seeDetails')} <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                            </div>
                            <div className="w-24 h-24 bg-primary-light rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Sparkles className="w-10 h-10" />
                            </div>
                        </Link>

                        <Link to="/prevencao" className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all flex items-center overflow-hidden">
                            <div className="relative z-10 flex-1">
                                <h4 className="text-2xl font-bold text-primary mb-2">{t('preventiveCare')}</h4>
                                <p className="text-gray-600 mb-4">{t('preventiveCareDescription')}</p>
                                <span className="text-accent font-medium flex items-center group-hover:translate-x-2 transition-transform">
                                    {t('seeDetails')} <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                            </div>
                            <div className="w-24 h-24 bg-primary-light rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section - Using the specific doctor image requested earlier */}
            <section id="about" className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                        {/* Imagem (Agora menor e mais integrada) */}
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative group max-w-sm w-full">
                                <div className="absolute inset-0 bg-accent rounded-3xl transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                                <img
                                    src="/assets/uploads/clinic_doctor_desk.jpg"
                                    alt="Dra. Diretora Clínica"
                                    loading="lazy"
                                    className="relative rounded-3xl shadow-xl object-cover w-full h-auto max-h-[350px] z-10"
                                />
                            </div>
                        </div>

                        {/* Texto Compacto */}
                        <div className="flex flex-col order-2 lg:order-1 lg:pr-8">
                            <div>
                                <span className="text-accent font-bold uppercase tracking-wider mb-1 block text-sm">{t('clinicDirector')}</span>
                                <h2 className="text-3xl md:text-3xl font-bold mb-4 text-primary font-serif tight-leading">
                                    {t('aboutTitle')}
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-base mb-4 text-justify">
                                    {/* Text rendered via HTML to support line breaks if needed, or just standard */}
                                    <span dangerouslySetInnerHTML={{ __html: t('aboutDescription') }}></span>
                                </p>
                                <div className="flex items-center gap-6 mt-2">
                                    <div className="pl-3 border-l-4 border-accent">
                                        <p className="font-bold text-primary text-2xl">15+</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                                            <span dangerouslySetInnerHTML={{ __html: t('yearsExperience') }}></span>
                                        </p>
                                    </div>
                                    <div className="pl-3 border-l-4 border-accent">
                                        <p className="font-bold text-primary text-2xl">5k+</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                                            <span dangerouslySetInnerHTML={{ __html: t('satisfiedPatients') }}></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinic Gallery Section - "Our Space" (Split Layout) */}
            <section className="py-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Text Content - Left Side */}
                        <div className="order-1">
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">{t('ourSpaceTitle')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-8 leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: t('ourSpaceHeading') }}></span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-loose mb-8 text-justify">
                                <span dangerouslySetInnerHTML={{ __html: t('ourSpaceDesc') }}></span>
                            </p>
                            <div className="flex gap-4">
                                <Link to="/implantologia" className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg">
                                    {t('meetClinic')}
                                </Link>
                            </div>
                        </div>

                        {/* Image Collage - Right Side */}
                        <div className="order-2 grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-8">
                                <div className="h-64 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-500">
                                    <img
                                        src="/assets/uploads/clinic_reception.jpg"
                                        alt="Recepção Porto Implantes"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-48 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-500">
                                    <img
                                        src="/assets/uploads/clinic_waiting_room_1.jpg"
                                        alt="Sala de Espera"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-48 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-500">
                                    <img
                                        src="/assets/uploads/clinic_office.jpg"
                                        alt="Consultório"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-64 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-500">
                                    <img
                                        src="/assets/uploads/clinic_waiting_room_2.jpg"
                                        alt="Área de Conforto"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 text-primary font-serif">
                        {t('testimonialsTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="bg-gray-50 p-10 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
                                <div className="flex mb-6 text-accent">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{t(`testimonial${num}`)}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                                        {t(`testimonial${num}Author`).charAt(0)}
                                    </div>
                                    <p className="font-bold text-primary">{t(`testimonial${num}Author`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Appointment Form */}
            <section id="appointment" className="py-6 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div className="text-white">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                                {t('appointmentTitle')}
                            </h2>
                            <p className="text-xl mb-8 text-primary-light opacity-90 leading-relaxed">
                                {t('appointmentSubtitle')}
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-full">
                                        <PhoneCall className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{t('callUs')}</h4>
                                        <p className="opacity-80">+351 912 092 209</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-full">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{t('visitUs')}</h4>
                                        <p className="opacity-80">Rua Doutor Eduardo Torres 329<br />4450-116 Matosinhos</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl">
                            {showSuccess && (
                                <div className="mb-6 bg-green-50 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3 animate-fadeIn">
                                    <CheckCircle2 className="h-5 w-5" />
                                    <span className="font-medium">{t('successMessage')}</span>
                                </div>
                            )}

                            {error && (
                                <div className="mb-6 bg-red-50 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3 animate-fadeIn">
                                    <span className="font-medium">{error}</span>
                                </div>
                            )}

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">{t('name')}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder={t('namePlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">{t('email')}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder={t('emailPlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">{t('phone')}</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        placeholder={t('phonePlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">{t('message')}</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                                        placeholder={t('messagePlaceholder')}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <MessageCircleMore className="h-5 w-5" />
                                    )}
                                    <span>{isSubmitting ? t('sending') : t('sendMessage')}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
