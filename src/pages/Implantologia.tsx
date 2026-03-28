import { CheckCircle2, PhoneCall, ShieldCheck, Clock, Gem, Smile, Layers, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import SEO from '../components/SEO';
import AppointmentSection from '../components/AppointmentSection';

const Implantologia = () => {
    const { t } = useTranslation();

    const materials = [
        {
            name: t('implantMatResin'),
            description: t('implantMatResinDesc'),
            benefits: [t('implantBenefitCost'), t('implantBenefitRepair')],
            durability: t('implantDur5to7'),
            price: "€",
            icon: Smile,
            borderColor: "border-gray-400",
            iconBg: "bg-gray-100",
            iconColor: "text-gray-600",
            checkColor: "text-accent"
        },
        {
            name: t('implantMatZirconia'),
            description: t('implantMatZirconiaDesc'),
            benefits: [t('implantBenefitNoWear'), t('implantBenefitStain')],
            durability: t('implantDurExceptional'),
            badge: t('implantMatZirconiaBadge'),
            price: "€€€",
            icon: Gem,
            borderColor: "border-accent",
            iconBg: "bg-accent/10",
            iconColor: "text-accent",
            checkColor: "text-primary"
        },
        {
            name: t('implantMatPorcelain'),
            description: t('implantMatPorcelainDesc'),
            benefits: [t('implantBenefitAesthetic'), t('implantBenefitColor')],
            durability: t('implantDur15to20'),
            price: "€€",
            icon: Layers,
            borderColor: "border-primary",
            iconBg: "bg-primary/10",
            iconColor: "text-primary",
            checkColor: "text-accent"
        }
    ];

    return (
        <div className="animate-fadeIn font-sans text-gray-800">
            <SEO
                title={t('metaTitleImplants')}
                description={t('metaDescImplants')}
            />
            {/* 1. Hero Section - Full Screen & Cinematic (Preserved as requested) */}
            <section className="relative h-screen flex items-center justify-end bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-[30%_center] md:bg-center"
                    style={{
                        backgroundImage: 'url("/assets/uploads/doctor_implant_hero_new.jpg")'
                    }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-gray-900/90 via-gray-900/50 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center justify-end">
                    <div className="max-w-xl text-white pr-4 border-r-4 border-accent animate-slideIn text-right flex flex-col items-end">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block text-sm">
                            {t('implantHeroTitle').replace('<br />', ' ')}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('implantHeroTitle') }} />
                            <br />
                            <span className="text-accent">{t('implantHeroSubtitle')}</span>
                        </h1>
                        <p className="text-lg md:text-xl font-light mb-8 text-gray-100 max-w-md leading-relaxed">
                            {t('implantHeroText')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Desktop Button */}
                            <a
                                href="#appointment"
                                className="hidden md:inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-bold text-base shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                            >
                                <PhoneCall className="mr-3 w-5 h-5" />
                                {t('implantCta')}
                            </a>
                            {/* Mobile Button */}
                            <a
                                href="tel:+351912092209"
                                className="inline-flex md:hidden items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-bold text-base shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                            >
                                <PhoneCall className="mr-3 w-5 h-5" />
                                {t('implantCta')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Introduction: The Problem & Solution */}
            <section className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-8">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 block">{t('implantProblemSubtitle')}</span>
                        <h2 className="text-3xl font-bold text-primary mb-6 font-serif leading-tight">
                            {t('implantProblemTitle')}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify md:text-center" dangerouslySetInnerHTML={{ __html: t('implantProblemText') }} />
                    </div>

                    {/* Image Section (Extra Image requested) */}
                    <div className="relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-xl mb-12 group">
                        <img
                            src="/assets/uploads/implantologia_highlight.jpg"
                            alt="Ambiente confortável na Porto Implantes"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-primary mb-6 font-serif">{t('implantConceptTitle')}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: t('implantConceptText1') }} />
                            <p className="text-gray-600 leading-relaxed text-lg mb-6" dangerouslySetInnerHTML={{ __html: t('implantConceptText2') }} />
                        </div>
                        <div className="relative group max-w-md mx-auto">
                            <div className="absolute -inset-2 bg-accent/20 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="/assets/all_on_4_diagram.png"
                                    alt="Esquema All-on-4"
                                    className="w-full bg-black object-contain max-h-[300px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Materials Options */}
            <section className="py-6 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 block">{t('implantMaterialsSubtitle')}</span>
                        <h2 className="text-3xl font-bold text-primary mb-6 font-serif">{t('implantMaterialsTitle')}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {t('implantMaterialsText')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {materials.map((material, index) => {
                            const IconComponent = material.icon;
                            return (
                                <div key={index} className={`bg-white p-6 rounded-2xl shadow-lg border-t-8 ${material.borderColor} ${index === 1 ? 'transform md:-translate-y-4 hover:-translate-y-6 relative' : 'hover:-translate-y-2'} transition-all duration-300`}>
                                    {material.badge && (
                                        <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">{material.badge}</div>
                                    )}
                                    <div className={`w-12 h-12 ${material.iconBg} rounded-full flex items-center justify-center ${material.iconColor} mb-4`}>
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-3">{material.name}</h3>
                                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                                        {material.description}
                                    </p>
                                    <ul className="text-sm space-y-2 mb-3 text-gray-500">
                                        {material.benefits.map((benefit, bIdx) => (
                                            <li key={bIdx} className="flex items-start"><CheckCircle2 className={`w-4 h-4 mr-2 ${material.checkColor} mt-0.5`} /> {benefit}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto pt-3 border-t border-gray-100">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{t('implantDurability')}</span>
                                        <p className="text-primary font-bold">{material.durability}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. Benefits (Why Choose Us) */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl md:text-3xl font-bold text-center mb-16 font-serif">
                        {t('implantBenefitsTitle')}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Clock,
                                title: t('implantBen1Title'),
                                desc: t('implantBen1Desc')
                            },
                            {
                                icon: Smile,
                                title: t('implantBen2Title'),
                                desc: t('implantBen2Desc')
                            },
                            {
                                icon: Activity,
                                title: t('implantBen3Title'),
                                desc: t('implantBen3Desc')
                            },
                            {
                                icon: ShieldCheck,
                                title: t('implantBen4Title'),
                                desc: t('implantBen4Desc')
                            }
                        ].map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                                    <IconComponent className="w-8 h-8 text-accent mb-3" />
                                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-200 text-xs leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. Process Timeline */}
            <section className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 block">{t('implantProcessSubtitle')}</span>
                        <h2 className="text-3xl md:text-3xl font-bold text-primary font-serif mb-4">{t('implantProcessTitle')}</h2>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                        {[
                            {
                                step: "01",
                                title: t('implantStep1Title'),
                                text: t('implantStep1Text')
                            },
                            {
                                step: "02",
                                title: t('implantStep2Title'),
                                text: t('implantStep2Text')
                            },
                            {
                                step: "03",
                                title: t('implantStep3Title'),
                                text: t('implantStep3Text')
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 group-[.is-active]:bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                                    <span className="font-bold text-xs">{item.step}</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-primary text-xl">{item.title}</div>
                                    </div>
                                    <div className="text-gray-600 text-sm leading-relaxed">{item.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Appointment Form */}
            <AppointmentSection defaultTreatment="implantes" pageName="Implantologia" />
        </div>
    );
};

export default Implantologia;
