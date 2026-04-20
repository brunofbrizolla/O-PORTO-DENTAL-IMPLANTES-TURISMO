import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    ArrowRight, 
    Sparkles, 
    Heart, 
    Award, 
    PhoneCall, 
    Star, 
    CheckCircle2, 
    Globe, 
    Banknote, 
    ShieldCheck, 
    Clock, 
    Search, 
    Plane, 
    Activity, 
    MessageSquare,
    Zap,
    MapPin,
    HelpCircle,
    ChevronDown,
    Utensils,
    Camera,
    Waves,
    Lock,
    Palmtree,
    Compass,
    Landmark,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AppointmentSection from '../components/AppointmentSection';

const TurismoDentario = () => {
    const { t } = useTranslation();
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    const results = [
        // Case 1: Whitening (Real Before/After from Assets)
        { 
            before: "/assets/uploads/branqueamento_before_after.png", 
            after: "/assets/uploads/branqueamento_hero_new.png" 
        },
        // Case 2: Implants (Senior Patient from Assets)
        { 
            before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop", 
            after: "/assets/uploads/senior_smiling_dental.png" 
        },
        // Case 3: Veneers (Real Veneers Hero)
        { 
            before: "https://images.unsplash.com/photo-1461611030354-94677939103b?q=80&w=400&auto=format&fit=crop", 
            after: "/assets/uploads/facetas_hero_new.jpg" 
        },
        // Case 4: Aligners (Real Aligners Hero)
        { 
            before: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=400&auto=format&fit=crop", 
            after: "/assets/uploads/alinhadores_hero_new.jpg" 
        },
        // Case 5: Clinical Excellence
        { 
            before: "/assets/uploads/clinic_office.jpg", 
            after: "/assets/uploads/implantologia_highlight.jpg" 
        },
    ];

    // Doubling for seamless infinite loop
    const infiniteResults = [...results, ...results];

    const faqItems = [
        { q: t('dentalTourism.faqQ1'), a: t('dentalTourism.faqA1') },
        { q: t('dentalTourism.faqQ2'), a: t('dentalTourism.faqA2') },
        { q: t('dentalTourism.faqQ3'), a: t('dentalTourism.faqA3') },
        { q: t('dentalTourism.faqQ4'), a: t('dentalTourism.faqA4') }
    ];

    return (
        <div className="animate-fadeIn font-sans text-gray-800 overflow-x-hidden max-w-full">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-250px * ${results.length} - 1.5rem * ${results.length})); }
                }
                .animate-infinite-scroll {
                    animation: scroll 35s linear infinite;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}} />
            
            <SEO
                title={t('dentalTourism.metaTitle')}
                description={t('dentalTourism.metaDesc')}
            />

            {/* 1. Hero Section */}
            <section className="relative min-h-[100svh] flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ 
                        backgroundImage: 'url("/assets/uploads/home_hero_new.jpg")',
                        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20 pb-12">
                    <div className="max-w-2xl text-white pl-4 border-l-4 border-accent animate-slideIn break-words overflow-x-hidden">
                        <span className="text-accent font-black tracking-[0.3em] uppercase mb-4 block text-[10px] md:text-sm">
                            {t('dentalTourism.heroSubtitle')}
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('dentalTourism.heroTitle') }} />
                        </h1>
                        <p className="text-base md:text-xl font-light mb-10 text-gray-200 leading-relaxed max-w-xl">
                            {t('dentalTourism.heroText')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#remote-quote"
                                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 bg-accent text-white rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:bg-white hover:text-primary transition-all duration-300 active:scale-95"
                            >
                                <MessageSquare className="mr-3 w-5 h-5" />
                                {t('dentalTourism.remoteQuoteButton')}
                            </a>
                            <a
                                href="#why-portugal"
                                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 border-2 border-white/30 text-white rounded-2xl font-bold text-sm sm:text-base backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300"
                            >
                                {t('knowMore')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. MINIMALIST INFINITE RESULTS STRIP with CUSTOM TITLE & CLINIC ASSETS */}
            <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
                <div className="text-center mb-12 px-4">
                    <span className="text-accent font-bold uppercase tracking-widest mb-3 block text-sm italic">{t('dentalTourism.whyPortugalPortoSubtitle')}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif tracking-tight">{t('dentalTourism.whyPortugalPortoTitle')}</h2>
                </div>
                
                <div className="relative flex overflow-hidden group">
                    <div className="flex gap-6 animate-infinite-scroll py-2">
                        {infiniteResults.map((item, idx) => (
                            <div key={idx} className="flex gap-1.5 bg-white p-2.5 rounded-3xl shadow-md border border-gray-50 hover:border-accent/30 transition-all duration-500">
                                <div className="w-[120px] h-[120px] rounded-2xl overflow-hidden relative shadow-inner">
                                    <img src={item.before} alt="Before Treatment" className="w-full h-full object-cover grayscale-[0.3] opacity-80" loading="lazy" />
                                    <div className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-sm text-[7px] text-white px-2 py-0.5 rounded-full uppercase font-black tracking-tighter">Bef.</div>
                                </div>
                                <div className="w-[120px] h-[120px] rounded-2xl overflow-hidden relative shadow-sm">
                                    <img src={item.after} alt="After Treatment" className="w-full h-full object-cover" loading="lazy" />
                                    <div className="absolute top-1.5 left-1.5 bg-accent text-[7px] text-white px-2 py-0.5 rounded-full uppercase font-black tracking-tighter">Aft.</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why Portugal & Quality Objection */}
            <section id="why-portugal" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative order-1 lg:order-2">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                            <span className="text-accent font-black uppercase tracking-[0.2em] mb-4 block text-xs">PORTUGAL #1 DESTINATION</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif mb-6 md:mb-8 leading-tight">
                                {t('dentalTourism.whyTitle')}
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 md:p-8 bg-white rounded-3xl border-l-8 border-accent shadow-xl shadow-primary/5">
                                    <h3 className="text-xl font-bold text-primary mb-3">Premium Quality, Portuguese Costs</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
                                        {t('dentalTourism.qualityObjectionText')}
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                                    <div className="flex sm:flex-col items-center gap-4 sm:gap-0 sm:text-center">
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 text-primary flex-shrink-0">
                                            <Banknote className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">{t('dentalTourism.advantage1Title')}</h4>
                                            <p className="text-xs text-gray-400">{t('dentalTourism.advantage1Desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex sm:flex-col items-center gap-4 sm:gap-0 sm:text-center">
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 text-primary flex-shrink-0">
                                            <Zap className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">{t('dentalTourism.advantage2Title')}</h4>
                                            <p className="text-xs text-gray-400">{t('dentalTourism.advantage2Desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex sm:flex-col items-center gap-4 sm:gap-0 sm:text-center">
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 text-primary flex-shrink-0">
                                            <Clock className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">{t('dentalTourism.advantage3Title')}</h4>
                                            <p className="text-xs text-gray-400">{t('dentalTourism.advantage3Desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
                            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                                <img src="/assets/uploads/clinic_office.jpg" alt="Porto Implantes Office" className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="absolute -bottom-4 md:-bottom-6 -right-2 md:-right-6 bg-white p-4 md:p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-gray-100 animate-bounce-slow">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-black text-primary text-xs md:text-sm">EU Standards Certified</p>
                                    <p className="text-[10px] md:text-xs text-gray-400">Maximum Safety Guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Star Treatments Section */}
            <section id="treatments" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold uppercase tracking-widest mb-2 block">TECHNICAL EXCELLENCE</span>
                        <h2 className="text-4xl font-bold text-primary font-serif">{t('dentalTourism.starTreatmentsTitle')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:-translate-y-2 transition-all border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{t('dentalTourism.starImplantsTitle')}</h3>
                            <p className="text-accent font-bold text-sm mb-4">{t('dentalTourism.starImplantsSubtitle')}</p>
                            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                                {t('dentalTourism.starImplantsDesc')}
                            </p>
                            <Link to="/implantologia" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                                LEARN TECHNICAL DETAILS <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:-translate-y-2 transition-all border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{t('dentalTourism.starVeneersTitle')}</h3>
                            <p className="text-accent font-bold text-sm mb-4">{t('dentalTourism.starVeneersSubtitle')}</p>
                            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                                {t('dentalTourism.starVeneersDesc')}
                            </p>
                            <Link to="/facetas" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                                DESIGN MY SMILE <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:-translate-y-2 transition-all border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{t('dentalTourism.starAlignersTitle')}</h3>
                            <p className="text-accent font-bold text-sm mb-4">{t('dentalTourism.starAlignersSubtitle')}</p>
                            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                                {t('dentalTourism.starAlignersDesc')}
                            </p>
                            <Link to="/alinhadores" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                                START 3D PLANNING <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Patient Guide (The Process) */}
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

            {/* 6. Discover Portugal Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-48 md:h-64 rounded-3xl overflow-hidden shadow-lg group relative">
                                    <img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800&auto=format&fit=crop" alt="Porto Ribeira" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-primary shadow-sm tracking-wider">PORTO & DOURO</div>
                                </div>
                                <div className="h-40 md:h-48 rounded-3xl overflow-hidden shadow-lg group relative">
                                    <img src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&auto=format&fit=crop" alt="Lisbon Alfama" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-primary shadow-sm tracking-wider">LISBON</div>
                                </div>
                            </div>
                            <div className="space-y-4 sm:pt-12">
                                <div className="h-40 md:h-48 rounded-3xl overflow-hidden shadow-lg group relative">
                                    <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop" alt="Santorini like Algarve" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-primary shadow-sm tracking-wider">ALGARVE</div>
                                </div>
                                <div className="h-48 md:h-64 rounded-3xl overflow-hidden shadow-lg group relative">
                                    <img src="https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=800&auto=format&fit=crop" alt="Pena Palace Sintra" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-primary shadow-sm tracking-wider">SINTRA</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 overflow-x-hidden">
                             <span className="text-accent font-black uppercase tracking-[0.2em] mb-2 block text-xs">{t('dentalTourism.portoSubtitle')}</span>
                             <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif mb-6 md:mb-8 leading-tight">
                                {t('dentalTourism.portoTitle')}
                             </h2>
                             <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 text-left md:text-justify">
                                {t('dentalTourism.portoText')}
                             </p>
                             <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                                        <Compass className="w-5 h-5" />
                                    </div>
                                    <p className="font-bold text-primary text-sm">{t('dentalTourism.portoItem1')}</p>
                                </div>
                                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                                        <Landmark className="w-5 h-5" />
                                    </div>
                                    <p className="font-bold text-primary text-sm">{t('dentalTourism.portoItem2')}</p>
                                </div>
                                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                                        <Palmtree className="w-5 h-5" />
                                    </div>
                                    <p className="font-bold text-primary text-sm">{t('dentalTourism.portoItem3')}</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Economy Table Section */}
            <section id="economy" className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
                        <div className="grid lg:grid-cols-3">
                            <div className="lg:col-span-1 bg-primary p-8 md:p-12 text-white flex flex-col justify-center text-center lg:text-left">
                                <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mb-8 shadow-xl mx-auto lg:mx-0">
                                    <Banknote className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4 md:mb-6 leading-tight">{t('dentalTourism.economySubtitle')}</h3>
                                <p className="text-primary-light/80 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed italic">
                                    "Your dental treatment shouldn't just be an expense. Let it fund your Portuguese dream trip."
                                </p>
                            </div>
                            <div className="lg:col-span-2 p-4 md:p-12 relative overflow-hidden">
                                <div className="absolute top-4 right-8 flex items-center gap-2 text-primary/30 animate-pulse md:hidden">
                                     <span className="text-[10px] font-black uppercase tracking-widest">Swipe for more</span>
                                     <ArrowRight className="w-3 h-3" />
                                </div>
                                <div className="overflow-x-auto pb-4 scrollbar-hide">
                                    <table className="w-full text-left min-w-[500px]">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th className="py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{t('dentalTourism.tableProcedure')}</th>
                                                <th className="py-6 px-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center">{t('dentalTourism.tableHomeCountry')}</th>
                                                <th className="py-6 px-4 text-[10px] font-black text-accent uppercase tracking-[0.2em] text-center">{t('dentalTourism.tablePorto')}</th>
                                                <th className="py-6 text-[10px] font-black text-green-600 uppercase tracking-[0.2em] text-right">{t('dentalTourism.tableSavings')}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {[
                                                { proc: t('cardImplantTitle') + " Unit.", home: "€2.800", porto: "€950", save: t('dentalTourism.implantSaving') },
                                                { proc: "All-on-4 (Full Arch)", home: "€14.000", porto: "€5.500", save: t('dentalTourism.allOn4Saving') },
                                                { proc: t('cardVeneersTitle') + " (Set 6)", home: "€6.000", porto: "€2.400", save: t('dentalTourism.veneersSaving') }
                                            ].map((row, i) => (
                                                <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-8 font-bold text-primary text-sm md:text-base leading-tight pr-4">{row.proc}</td>
                                                    <td className="py-8 px-4 text-gray-400 text-center font-mono text-sm">{row.home}</td>
                                                    <td className="py-8 px-4">
                                                        <div className="bg-accent/5 rounded-2xl py-3 px-4 text-primary font-black text-center text-sm md:text-base border border-accent/10 group-hover:bg-accent/10 transition-colors">
                                                            {row.porto}
                                                        </div>
                                                    </td>
                                                    <td className="py-8 text-green-600 font-black text-right text-sm md:text-base">{row.save}</td>
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

             {/* 8. Warranty & Aftercare Section */}
             <section className="py-24 bg-primary overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                     <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                     </svg>
                </div>
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

             {/* 9. About Section */}
             <section id="about" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-accent font-bold uppercase tracking-widest mb-2 block">{t('clinicDirector')}</span>
                            <h2 className="text-2xl md:text-4xl font-bold font-serif mb-4 md:mb-6 text-primary">{t('aboutTitle')}</h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-lg mb-8 text-left md:text-justify break-words">
                                <span dangerouslySetInnerHTML={{ __html: t('aboutDescription') }}></span>
                            </p>
                            <div className="flex gap-12">
                                <div className="pl-4 border-l-4 border-accent">
                                    <p className="font-bold text-primary text-3xl">15+</p>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">Experience</p>
                                </div>
                                <div className="pl-4 border-l-4 border-accent">
                                    <p className="font-bold text-primary text-3xl">5k+</p>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">Success Stories</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                             <div className="relative group mx-auto max-sm">
                                <div className="absolute inset-0 bg-accent rounded-[3rem] transform lg:translate-x-4 lg:translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                                <img
                                    src="/assets/katiafragoso.jpeg"
                                    alt="Dra. Kátia Fragoso"
                                    className="relative rounded-[3rem] shadow-2xl object-cover w-full h-[500px] z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold uppercase tracking-widest mb-2 block">{t('dentalTourism.faqTitle')}</span>
                        <h2 className="text-4xl font-bold text-primary font-serif">Any doubts left?</h2>
                    </div>

                    <div className="space-y-4">
                        {faqItems.map((item, idx) => (
                            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                <button 
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-primary lg:text-lg pr-4">{item.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-accent transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === idx && (
                                    <div className="p-6 pt-0 bg-gray-50/50 text-gray-600 leading-relaxed border-t border-gray-100">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Final CTA */}
            <section id="remote-quote" className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center mb-12">
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                        <PhoneCall className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-8 leading-tight">
                        {t('implantFinalCtaTitle')}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {t('dentalTourism.remoteQuoteDesc')}
                    </p>
                </div>
                <div className="max-w-5xl mx-auto px-4 bg-white rounded-[3rem] shadow-2xl p-4 lg:p-12 border border-gray-100">
                   <AppointmentSection pageName="Tourism Landing Final" defaultTreatment="implantes" />
                </div>
            </section>
        </div>
    );
};

export default TurismoDentario;
