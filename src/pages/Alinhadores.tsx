import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScanFace, MousePointerClick, Smile, CalendarCheck } from 'lucide-react';

import SEO from '../components/SEO';
import AppointmentSection from '../components/AppointmentSection';

const Alinhadores = () => {
    const { t } = useTranslation();

    return (
        <div className="animate-fadeIn font-sans text-gray-800">
            <SEO
                title={t('metaTitleAligners')}
                description={t('metaDescAligners')}
            />
            {/* 1. Hero Section - Cinematic */}
            <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-[70%_center] md:bg-center"
                    style={{ backgroundImage: 'url("/assets/uploads/alinhadores_hero_new.jpg")' }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center">
                    <div className="max-w-2xl text-white pl-4 border-l-4 border-accent animate-slideIn">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block text-sm">{t('alignersHeroSubtitle')}</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('alignersHeroTitle') }} />
                        </h1>
                        <p className="text-lg md:text-xl font-light mb-8 text-gray-200 leading-relaxed max-w-xl">
                            {t('alignersHeroText')}
                        </p>
                        {/* Desktop Button */}
                        <a
                            href="#appointment"
                            className="hidden md:inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-bold text-base shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                        >
                            <ScanFace className="mr-3 w-5 h-5" />
                            {t('alignersCta')}
                        </a>
                        {/* Mobile Button */}
                        <a
                            href="tel:+351912092209"
                            className="inline-flex md:hidden items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-bold text-base shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                        >
                            <ScanFace className="mr-3 w-5 h-5" />
                            {t('alignersCta')}
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. O que são */}
            <section className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-primary/10 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80"
                                alt="Alinhadores Dentários"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div>
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">{t('alignersIntroSubtitle')}</span>
                            <h2 className="text-3xl font-bold text-primary mb-8 font-serif leading-tight">
                                {t('alignersIntroTitle')}
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                {t('alignersIntroText')}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                {t('alignersIntroHighlight')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Como funciona (Timeline Style) */}
            <section className="py-6 bg-primary-light/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 block">{t('alignersTimelineSubtitle')}</span>
                        <h2 className="text-3xl font-bold text-primary font-serif">{t('alignersTimelineTitle')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { step: '01', title: t('alignersStep1Title'), desc: t('alignersStep1Desc'), icon: <ScanFace className="w-8 h-8" /> },
                            { step: '02', title: t('alignersStep2Title'), desc: t('alignersStep2Desc'), icon: <MousePointerClick className="w-8 h-8" /> },
                            { step: '03', title: t('alignersStep3Title'), desc: t('alignersStep3Desc'), icon: <Smile className="w-8 h-8" /> },
                            { step: '04', title: t('alignersStep4Title'), desc: t('alignersStep4Desc'), icon: <CalendarCheck className="w-8 h-8" /> }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300 relative group">
                                <span className="absolute top-4 right-4 text-3xl font-bold text-gray-100 group-hover:text-accent/20 transition-colors">{item.step}</span>
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Vantagens (Grid) */}
            <section className="py-6 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 font-serif">{t('alignersBenefitsTitle')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { t: t('alignersBen1Title'), d: t('alignersBen1Desc') },
                            { t: t('alignersBen2Title'), d: t('alignersBen2Desc') },
                            { t: t('alignersBen3Title'), d: t('alignersBen3Desc') },
                            { t: t('alignersBen4Title'), d: t('alignersBen4Desc') },
                            { t: t('alignersBen5Title'), d: t('alignersBen5Desc') },
                            { t: t('alignersBen6Title'), d: t('alignersBen6Desc') }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                                <h3 className="text-xl font-bold mb-2 text-accent">{item.t}</h3>
                                <p className="text-gray-200">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Appointment Form */}
            <AppointmentSection defaultTreatment="alinhadores" pageName="Alinhadores" />
        </div>
    );
};

export default Alinhadores;
