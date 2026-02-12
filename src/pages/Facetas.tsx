import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Wand2, Calculator } from 'lucide-react';

import SEO from '../components/SEO';

const Facetas = () => {
    const { t } = useTranslation();

    return (
        <div>
            <SEO
                title={t('metaTitleVeneers')}
                description={t('metaDescVeneers')}
            />
            {/* 1. Hero Section - Cinematic */}
            <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-[70%_center] md:bg-center"
                    style={{ backgroundImage: 'url("/assets/uploads/facetas_hero_new.jpg")' }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center">
                    <div className="max-w-xl text-white pl-4 border-l-4 border-accent animate-slideIn">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block text-sm">{t('veneersHeroSubtitle')}</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('veneersHeroTitle') }} />
                        </h1>
                        <p className="text-lg md:text-xl font-light mb-8 text-gray-200 leading-relaxed">
                            {t('veneersHeroText')}
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-bold text-base shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                        >
                            <Sparkles className="mr-3 w-5 h-5" />
                            {t('veneersCta')}
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. O que são (Clean Layout) */}
            <section className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="/assets/uploads/facetas_hero_new.png"
                                alt="Facetas Dentárias Close-up"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                                <p className="text-white font-medium text-lg border-l-4 border-accent pl-4">{t('veneersImageCaption')}</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">{t('veneersDefinitionSubtitle')}</span>
                            <h2 className="text-3xl font-bold text-primary mb-8 font-serif leading-tight">
                                {t('veneersDefinitionTitle')}
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                {t('veneersDefinitionText')}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                {t('veneersDefinitionHighlight')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Comparação (Modern Cards) */}
            <section className="py-6 bg-primary-light/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary font-serif">{t('veneersComparisonTitle')}</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Porcelana */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-accent relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute top-6 right-6 p-3 bg-accent/10 rounded-full text-accent">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-6">{t('veneersPorcelainTitle')}</h3>
                            <p className="text-gray-500 mb-8 italic">{t('veneersPorcelainDesc')}</p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>{t('veneersPorcelainBen1')}</li>
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>{t('veneersPorcelainBen2')}</li>
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>{t('veneersPorcelainBen3')}</li>
                            </ul>
                        </div>

                        {/* Resina */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-primary relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute top-6 right-6 p-3 bg-primary/10 rounded-full text-primary">
                                <Wand2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-6">{t('veneersResinTitle')}</h3>
                            <p className="text-gray-500 mb-8 italic">{t('veneersResinDesc')}</p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>{t('veneersResinBen1')}</li>
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>{t('veneersResinBen2')}</li>
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>{t('veneersResinBen3')}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 text-lg">
                            {t('veneersAdviceText')}
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Indicações (Grid) */}
            <section className="py-6 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 font-serif">{t('veneersIndicationsTitle')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            t('veneersInd1'),
                            t('veneersInd2'),
                            t('veneersInd3'),
                            t('veneersInd4'),
                            t('veneersInd5'),
                            t('veneersInd6')
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all text-center flex items-center justify-center min-h-[140px]">
                                <span className="font-semibold text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section id="contact" className="py-6 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif">
                        {t('veneersFinalCtaTitle')}
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        {t('veneersFinalCtaText')}
                    </p>
                    <a
                        href="/#appointment"
                        className="inline-flex items-center px-12 py-6 bg-primary text-white text-xl font-bold rounded-full hover:bg-primary-dark shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                    >
                        {t('veneersFinalCtaButton')}
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Facetas;
