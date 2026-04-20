import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    CheckCircle2, 
    ArrowRight, 
    Globe, 
    Banknote, 
    Plane, 
    ChevronDown,
    Award,
    Heart,
    Star,
    Sparkles,
    Zap,
    Clock,
    Search,
    Activity,
    MapPin,
    ShieldCheck,
    Compass,
    Landmark,
    Palmtree,
    PhoneCall,
    MessageSquare
} from 'lucide-react';

import SEO from '../../components/SEO';
import AppointmentSection from '../../components/AppointmentSection';

const ImplantologiaTurismo = () => {
    const { t } = useTranslation();
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    const faqItems = [
        { q: t('implantFaqQ1'), a: t('implantFaqA1') },
        { q: t('implantFaqQ2'), a: t('implantFaqA2') },
        { q: t('implantFaqQ3'), a: t('implantFaqA3') },
        { q: t('implantFaqQ4'), a: t('implantFaqA4') },
        { q: t('dentalTourism.faqQ1'), a: t('dentalTourism.faqA1') },
        { q: t('dentalTourism.faqQ2'), a: t('dentalTourism.faqA2') },
        { q: t('dentalTourism.faqQ3'), a: t('dentalTourism.faqA3') },
        { q: t('dentalTourism.faqQ4'), a: t('dentalTourism.faqA4') }
    ];

    return (
        <div className="animate-fadeIn font-sans text-gray-800">
            <SEO
                title={t('metaTitleImplantology')}
                description={t('metaDescImplantology')}
            />
            
            {/* 1. Hero Section - Specialized for Tourism */}
            <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-contain bg-no-repeat bg-right md:bg-right-bottom opacity-40 translate-x-20"
                    style={{ backgroundImage: 'url("/assets/all_on_4_diagram.png")' }}
                ></div>

                {/* Vertical Gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center">
                    <div className="max-w-2xl text-white pl-4 border-l-4 border-accent animate-slideIn">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block text-sm">{t('implantHeroSubtitle')}</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('implantHeroTitle') }} />
                        </h1>
                        <p className="text-lg md:text-xl font-light mb-8 text-gray-200 leading-relaxed max-w-xl">
                            {t('implantHeroText')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#appointment"
                                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-bold text-base shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                            >
                                <Sparkles className="mr-3 w-5 h-5" />
                                {t('implantCta')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Dental Tourism Trust Bar (EXCLUSIVE TO TOURISM VERSION) */}
            <section className="py-12 bg-primary text-white border-y border-white/10 group">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                        <div className="flex items-center space-x-6 border-white/10 md:border-r pr-6 group-hover:scale-105 transition-transform">
                            <div className="bg-accent/20 p-4 rounded-2xl"><Globe className="w-8 h-8 text-accent" /></div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight">Europe's #1 Destination</h3>
                                <p className="text-primary-light/70 text-sm">Experience Portugal's world-class care</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 border-white/10 md:border-r pr-6 group-hover:scale-105 transition-transform duration-500">
                            <div className="bg-accent/20 p-4 rounded-2xl"><Banknote className="w-8 h-8 text-accent" /></div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight">Up to 60% Savings</h3>
                                <p className="text-primary-light/70 text-sm">EU Standards at competitive prices</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 group-hover:scale-105 transition-transform duration-700">
                            <div className="bg-accent/20 p-4 rounded-2xl"><Plane className="w-8 h-8 text-accent" /></div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight">Fly & Smile Protocol</h3>
                                <p className="text-primary-light/70 text-sm">Complete bridge in just 4-7 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Porto (Clean Layout) */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                             <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] transform -rotate-2"></div>
                            <div className="relative h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transition-transform hover:scale-[1.02] duration-500">
                                <img
                                    src="/assets/uploads/implantologia_highlight.jpg"
                                    alt="Modern Dental Technology Porto"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="text-accent font-bold uppercase tracking-widest mb-2 block text-xs">{t('implantIntroSubtitle')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif leading-tight">
                                {t('implantIntroTitle')}
                            </h2>
                            <p className="text-gray-600 mb-8 leading-loose text-lg text-justify">
                                {t('implantIntroText')}
                            </p>
                            <div className="space-y-4 mb-8">
                                <p className="flex items-center text-primary font-bold text-lg">
                                    <CheckCircle2 className="w-6 h-6 text-accent mr-3" /> {t('implantBenefit1Tooltip')}
                                </p>
                                <p className="flex items-center text-primary font-bold text-lg">
                                    <CheckCircle2 className="w-6 h-6 text-accent mr-3" /> {t('implantBenefit2Tooltip')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* INFINITE RESULTS STRIP (From Home) */}
             <section className="py-16 bg-gray-50 overflow-hidden border-y border-gray-100">
                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-infinite-scroll-custom {
                        animation: scroll 35s linear infinite;
                    }
                `}} />
                <div className="text-center mb-12 px-4">
                    <span className="text-accent font-bold uppercase tracking-widest mb-3 block text-sm italic">{t('dentalTourism.whyPortugalPortoSubtitle')}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif tracking-tight">{t('dentalTourism.whyPortugalPortoTitle')}</h2>
                </div>
                
                <div className="relative flex overflow-hidden group">
                    <div className="flex gap-6 animate-infinite-scroll-custom py-2 whitespace-nowrap">
                        {[1, 2, 3, 4, 1, 2, 3, 4].map((idx, i) => (
                            <div key={i} className="flex gap-1.5 bg-white p-2.5 rounded-3xl shadow-md border border-gray-50 hover:border-accent/30 transition-all duration-500 flex-shrink-0">
                                <div className="w-[120px] h-[120px] rounded-2xl overflow-hidden relative shadow-inner">
                                    <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=300&auto=format&fit=crop" alt="Before Treatment" className="w-full h-full object-cover grayscale-[0.3] opacity-80" loading="lazy" />
                                    <div className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-sm text-[7px] text-white px-2 py-0.5 rounded-full uppercase font-black tracking-tighter">Case</div>
                                </div>
                                <div className="w-[120px] h-[120px] rounded-2xl overflow-hidden relative shadow-sm">
                                    <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=300&auto=format&fit=crop" alt="After Treatment" className="w-full h-full object-cover" loading="lazy" />
                                    <div className="absolute top-1.5 left-1.5 bg-accent text-[7px] text-white px-2 py-0.5 rounded-full uppercase font-black tracking-tighter">Result</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* PATIENT GUIDE / THE PROCESS (From Home) */}
             <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold uppercase tracking-widest mb-2 block">{t('dentalTourism.processSubtitle')}</span>
                        <h2 className="text-4xl font-bold font-serif">{t('dentalTourism.processTitle')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="relative group">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:bg-accent transition-all">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('dentalTourism.phase1Title')}</h3>
                            <p className="text-primary-light/80 text-sm leading-relaxed">{t('dentalTourism.phase1Desc')}</p>
                        </div>
                        <div className="relative group">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:bg-accent transition-all">
                                <Plane className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('dentalTourism.phase2Title')}</h3>
                            <p className="text-primary-light/80 text-sm leading-relaxed">{t('dentalTourism.phase2Desc')}</p>
                        </div>
                        <div className="relative group">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:bg-accent transition-all">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('dentalTourism.phase3Title')}</h3>
                            <p className="text-primary-light/80 text-sm leading-relaxed">{t('dentalTourism.phase3Desc')}</p>
                        </div>
                        <div className="relative group">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:bg-accent transition-all">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('dentalTourism.phase4Title')}</h3>
                            <p className="text-primary-light/80 text-sm leading-relaxed">{t('dentalTourism.phase4Desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ECONOMY TABLE (From Home) */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gray-50 rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
                        <div className="grid lg:grid-cols-3">
                            <div className="lg:col-span-1 bg-primary p-12 text-white flex flex-col justify-center">
                                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                    <Banknote className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold font-serif mb-6 leading-tight">{t('dentalTourism.economySubtitle')}</h3>
                                <p className="text-primary-light/80 text-lg mb-8 leading-relaxed italic">
                                    World-class dental treatment at a fraction of the cost in UK/France. 
                                </p>
                            </div>
                            <div className="lg:col-span-2 p-8 lg:p-12">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr>
                                                <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">{t('dentalTourism.tableProcedure')}</th>
                                                <th className="py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">{t('dentalTourism.tableHomeCountry')}</th>
                                                <th className="py-4 px-4 text-xs font-bold text-accent uppercase tracking-widest text-center">{t('dentalTourism.tablePorto')}</th>
                                                <th className="py-4 text-xs font-bold text-green-600 uppercase tracking-widest text-right">{t('dentalTourism.tableSavings')}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {[
                                                { proc: t('dentalTourism.starImplantsTitle') + " Unit.", home: "€2,800", porto: "€950", save: t('dentalTourism.implantSaving') },
                                                { proc: "All-on-4 (Full Arch)", home: "€14,000", porto: "€5,500", save: t('dentalTourism.allOn4Saving') },
                                                { proc: "Full Mouth (Zirconia Bridge)", home: "€22,000", porto: "€8,900", save: "Save ~60%" },
                                                { proc: "Bone Graft / Sinus Lift", home: "€1,200", porto: "€450", save: "Save ~60%" }
                                            ].map((row, i) => (
                                                <tr key={i} className="group hover:bg-white transition-colors">
                                                    <td className="py-6 font-bold text-primary">{row.proc}</td>
                                                    <td className="py-6 px-4 text-gray-400 text-center font-mono">{row.home}</td>
                                                    <td className="py-6 px-4 text-primary font-extrabold text-center bg-accent/5 rounded-lg group-hover:bg-accent/10 transition-colors">{row.porto}</td>
                                                    <td className="py-6 text-green-600 font-black text-right">{row.save}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* DISCOVER PORTUGAL (From Home) */}
             <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-64 rounded-3xl overflow-hidden shadow-lg group relative">
                                    <img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800&auto=format&fit=crop" alt="Porto Ribeira" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-primary shadow-sm tracking-wider">PORTO & DOURO</div>
                                </div>
                                <div className="h-48 rounded-3xl overflow-hidden shadow-lg group relative">
                                    <img src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&auto=format&fit=crop" alt="Lisbon Alfama" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-primary shadow-sm tracking-wider">LISBON</div>
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="h-48 rounded-3xl overflow-hidden shadow-lg group relative">
                                    <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop" alt="Santorini like Algarve" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-primary shadow-sm tracking-wider">ALGARVE</div>
                                </div>
                                <div className="h-64 rounded-3xl overflow-hidden shadow-lg group relative">
                                    <img src="https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=800&auto=format&fit=crop" alt="Pena Palace Sintra" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-primary shadow-sm tracking-wider">SINTRA</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                             <span className="text-accent font-bold uppercase tracking-widest mb-2 block">{t('dentalTourism.portoSubtitle')}</span>
                             <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-8 leading-tight">
                                {t('dentalTourism.portoTitle')}
                             </h2>
                             <p className="text-gray-600 text-lg leading-relaxed mb-10 text-justify">
                                {t('dentalTourism.portoText')}
                             </p>
                             <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                                        <Compass className="w-5 h-5" />
                                    </div>
                                    <p className="font-bold text-primary">{t('dentalTourism.portoItem1')}</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                                        <Landmark className="w-5 h-5" />
                                    </div>
                                    <p className="font-bold text-primary">{t('dentalTourism.portoItem2')}</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                                        <Palmtree className="w-5 h-5" />
                                    </div>
                                    <p className="font-bold text-primary">{t('dentalTourism.portoItem3')}</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* WARRANTY & AFTERCARE (From Home) */}
             <section className="py-24 bg-primary overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold uppercase tracking-widest mb-2 block">{t('dentalTourism.aftercareSubtitle')}</span>
                        <h2 className="text-4xl font-bold font-serif">{t('dentalTourism.aftercareTitle')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[2rem] border border-white/10 hover:border-accent group transition-all">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                                <Globe className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t('dentalTourism.aftercareItem1Title')}</h3>
                            <p className="text-primary-light/80 leading-relaxed font-light">
                                {t('dentalTourism.aftercareItem1Desc')}
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[2rem] border border-white/10 hover:border-accent group transition-all">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t('dentalTourism.aftercareItem2Title')}</h3>
                            <p className="text-primary-light/80 leading-relaxed font-light">
                                {t('dentalTourism.aftercareItem2Desc')}
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[2rem] border border-white/10 hover:border-accent group transition-all">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                                <PhoneCall className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t('dentalTourism.aftercareItem3Title')}</h3>
                            <p className="text-primary-light/80 leading-relaxed font-light">
                                {t('dentalTourism.aftercareItem3Desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* 5. Benefits Summary */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 font-serif">{t('implantBenefitsTitle')}</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                         {[
                            { title: t('implantBen1Title'), desc: t('implantBen1Desc'), icon: <Award /> },
                            { title: t('implantBen2Title'), desc: t('implantBen2Desc'), icon: <Star /> },
                            { title: t('implantBen3Title'), desc: t('implantBen3Desc'), icon: <Heart /> }
                         ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/20 hover:-translate-y-2 transition-all">
                                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mx-auto mb-8">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-primary-light/80 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                         ))}
                    </div>
                </div>
            </section>

            {/* 6. Our Space / Gallery (MANDATORY) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-slideIn">
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block text-xs">{t('ourSpaceTitle')}</span>
                             <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-8 leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: t('ourSpaceHeading') }}></span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-loose mb-10 text-justify">
                                <span dangerouslySetInnerHTML={{ __html: t('ourSpaceDesc') }}></span>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:scale-105"><img src="/assets/uploads/clinic_reception.jpg" alt="Clinic 1" className="w-full h-full object-cover" /></div>
                                <div className="h-48 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:scale-105"><img src="/assets/uploads/clinic_waiting_room_1.jpg" alt="Clinic 2" className="w-full h-full object-cover" /></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-48 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:scale-105"><img src="/assets/uploads/clinic_office.jpg" alt="Clinic 3" className="w-full h-full object-cover" /></div>
                                <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:scale-105"><img src="/assets/uploads/clinic_waiting_room_2.jpg" alt="Clinic 4" className="w-full h-full object-cover" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section (MANDATORY) */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold uppercase tracking-widest mb-2 block text-xs">{t('implantFaqSubtitle')}</span>
                        <h2 className="text-4xl font-bold text-primary font-serif">{t('implantFaqTitle')}</h2>
                    </div>
                    <div className="space-y-4">
                        {faqItems.map((item, idx) => (
                            <div key={idx} className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-8 text-left bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-primary lg:text-lg pr-4">{item.q}</span>
                                    <ChevronDown className={`w-6 h-6 text-accent transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === idx && (
                                    <div className="p-8 pt-0 bg-gray-50/50 text-gray-600 leading-relaxed border-t border-gray-100">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <AppointmentSection defaultTreatment="implantologia" pageName="Implantologia Turismo" />
        </div>
    );
};

export default ImplantologiaTurismo;
