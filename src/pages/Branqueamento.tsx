import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Clock, ShieldCheck, Sun } from 'lucide-react';

import SEO from '../components/SEO';
import AppointmentSection from '../components/AppointmentSection';

const Branqueamento = () => {
    const { t } = useTranslation();
    return (
        <div className="animate-fadeIn font-sans text-gray-800">
            <SEO
                title={t('metaTitleWhitening')}
                description={t('metaDescWhitening')}
            />
            {/* 1. Hero Section - Cinematic (Standard Left Aligned) */}
            <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-[70%_center] md:bg-center"
                    style={{ backgroundImage: 'url("/assets/uploads/branqueamento_hero_v2.png")' }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center">
                    <div className="max-w-2xl text-white pl-4 border-l-4 border-accent animate-slideIn">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block text-sm">{t('whiteningHeroSubtitle')}</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif drop-shadow-lg leading-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('whiteningHeroTitle') }} />
                        </h1>
                        <p className="text-lg md:text-xl opacity-90 max-w-lg mb-8 font-light leading-relaxed">
                            {t('whiteningHeroText')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Desktop Button */}
                            <a
                                href="#appointment"
                                className="hidden md:inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-bold text-base shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                            >
                                <Sun className="mr-3 w-5 h-5" />
                                {t('whiteningCta')}
                            </a>
                            {/* Mobile Button */}
                            <a
                                href="tel:+351912092209"
                                className="inline-flex md:hidden items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-bold text-base shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                            >
                                <Sun className="mr-3 w-5 h-5" />
                                {t('whiteningCta')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. O que é (Clean Layout) */}
            <section className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="order-2 md:order-1 relative group">
                            <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/uploads/branqueamento_before_after.png"
                                    alt="Sorriso Brilhante Antes e Depois"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                                    <p className="text-white font-medium text-lg border-l-4 border-accent pl-4">{t('whiteningImageCaption')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">{t('whiteningIntroSubtitle')}</span>
                            <h2 className="text-3xl font-bold text-primary mb-8 font-serif leading-tight">
                                {t('whiteningIntroTitle')}
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                {t('whiteningIntroText')}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                {t('whiteningIntroHighlight')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Vantagens (Clean Cards) */}
            <section className="py-6 bg-primary-light/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-4 font-serif">{t('whiteningWhyTitle')}</h2>
                        <p className="text-gray-600">{t('whiteningWhySubtitle')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Clock className="w-10 h-10" />, title: t('whiteningBen1Title'), desc: t('whiteningBen1Desc') },
                            { icon: <ShieldCheck className="w-10 h-10" />, title: t('whiteningBen2Title'), desc: t('whiteningBen2Desc') },
                            { icon: <Sparkles className="w-10 h-10" />, title: t('whiteningBen3Title'), desc: t('whiteningBen3Desc') }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300 text-center">
                                <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Appointment Form */}
            <AppointmentSection defaultTreatment="branqueamento" pageName="Branqueamento" />
        </div>
    );
};

export default Branqueamento;
