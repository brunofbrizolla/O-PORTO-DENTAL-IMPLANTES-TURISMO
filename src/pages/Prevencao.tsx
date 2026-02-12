import { ShieldCheck, HeartPulse, Sparkles, CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import SEO from '../components/SEO';

const Prevencao = () => {
    const { t } = useTranslation();

    return (
        <div>
            <SEO
                title={t('metaTitlePrevention')}
                description={t('metaDescPrevention')}
            />
            {/* 1. Hero Section - Cinematic */}
            <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-[70%_center] md:bg-center"
                    style={{ backgroundImage: 'url("/assets/uploads/prevencao_hero_new.jpg")' }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center">
                    <div className="max-w-2xl text-white pl-4 border-l-4 border-accent animate-slideIn">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block">{t('preventionHeroSubtitle')}</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('preventionHeroTitle') }} />
                        </h1>
                        <p className="text-xl md:text-2xl font-light mb-8 text-gray-200 leading-relaxed max-w-xl">
                            {t('preventionHeroText')}
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                        >
                            <Stethoscope className="mr-3 w-5 h-5" />
                            {t('preventionCta')}
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                            <img
                                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80"
                                alt="Instrumentos de Higiene Oral"
                                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                            />
                        </div>
                        <div>
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">{t('preventionIntroSubtitle')}</span>
                            <h2 className="text-3xl font-bold text-primary mb-6 font-serif leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: t('preventionIntroTitle') }} />
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                {t('preventionIntroText')}
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                {t('preventionIntroText2')}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <ShieldCheck className="w-8 h-8 text-accent mr-3" />
                                    <span className="font-semibold text-gray-800">{t('preventionTag1')}</span>
                                </div>
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <HeartPulse className="w-8 h-8 text-accent mr-3" />
                                    <span className="font-semibold text-gray-800">{t('preventionTag2')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. What is included */}
            <section className="py-6 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-3xl font-bold text-primary font-serif mb-4">{t('preventionIncludesTitle')}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">{t('preventionIncludesSubtitle')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: t('preventionItem1Title'),
                                desc: t('preventionItem1Desc'),
                                icon: <Sparkles className="w-10 h-10 text-accent" />
                            },
                            {
                                title: t('preventionItem2Title'),
                                desc: t('preventionItem2Desc'),
                                icon: <CheckCircle2 className="w-10 h-10 text-accent" />
                            },
                            {
                                title: t('preventionItem3Title'),
                                desc: t('preventionItem3Desc'),
                                icon: <ShieldCheck className="w-10 h-10 text-accent" />
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CTA Final */}
            <section className="py-6 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-3xl font-bold font-serif mb-6">{t('preventionFinalCtaTitle')}</h2>
                    <p className="text-xl text-primary-light mb-8">
                        {t('preventionFinalCtaSubtitle')}
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                    >
                        {t('preventionFinalCtaButton')} <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Prevencao;
