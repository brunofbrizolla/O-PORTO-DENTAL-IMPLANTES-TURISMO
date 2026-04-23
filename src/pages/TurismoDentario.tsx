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
    ChevronRight,
    Target,
    Microscope,
    UserCircle,
    Shield
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
            before: "/assets/uploads/branqueamento_before_after.png", 
            after: "/assets/uploads/senior_smiling_dental.png" 
        },
        // Case 3: Veneers (Real Veneers Hero)
        { 
            before: "/assets/uploads/clinic_waiting_room_1.jpg", 
            after: "/assets/uploads/facetas_hero_new.jpg" 
        },
        // Case 4: Aligners (Real Aligners Hero)
        { 
            before: "/assets/uploads/clinic_office.jpg", 
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
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                            <span dangerouslySetInnerHTML={{ __html: t('dentalTourism.heroTitle') }} />
                        </h1>
                        <p className="text-lg md:text-xl font-light mb-10 text-gray-200 leading-relaxed max-w-xl">
                            {t('dentalTourism.heroSubtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#remote-quote"
                                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 bg-accent text-white rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:bg-white hover:text-primary transition-all duration-300 active:scale-95"
                            >
                                <MessageSquare className="mr-3 w-5 h-5" />
                                {t('dentalTourism.heroCta1')}
                            </a>
                            <a
                                href="#remote-quote"
                                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 border-2 border-white/30 text-white rounded-2xl font-bold text-sm sm:text-base backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300"
                            >
                                {t('dentalTourism.heroCta2')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROVA IMEDIATA */}
            <section className="py-8 bg-primary text-white border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm font-semibold tracking-wide">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-accent"/> 
                            {t('dentalTourism.immediateProof1')}
                        </div>
                        <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-accent"/> 
                            {t('dentalTourism.immediateProof2')}
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent"/> 
                            {t('dentalTourism.immediateProof3')}
                        </div>
                        <div className="flex items-center gap-2">
                            <UserCircle className="w-5 h-5 text-accent"/> 
                            {t('dentalTourism.immediateProof4')}
                        </div>
                        <div className="flex items-center gap-2">
                            <Search className="w-5 h-5 text-accent"/> 
                            {t('dentalTourism.immediateProof5')}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY PORTUGAL */}
            <section id="why-portugal" className="py-20 md:py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-accent font-black uppercase tracking-[0.2em] mb-4 block text-xs">DESTINATION</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-8">{t('dentalTourism.whyPortugalTitle')}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl text-justify md:text-center">
                        {t('dentalTourism.whyPortugalText')}
                    </p>
                </div>
            </section>

            {/* 4. DIFERENCIAL CLÍNICO */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif">{t('dentalTourism.clinicalDiffTitle')}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center group p-6 rounded-3xl hover:bg-gray-50 transition-colors">
                            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                                <Microscope className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{t('dentalTourism.clinicalDiff1Title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('dentalTourism.clinicalDiff1Desc')}</p>
                        </div>
                        <div className="text-center group p-6 rounded-3xl hover:bg-gray-50 transition-colors">
                            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                                <Award className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{t('dentalTourism.clinicalDiff2Title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('dentalTourism.clinicalDiff2Desc')}</p>
                        </div>
                        <div className="text-center group p-6 rounded-3xl hover:bg-gray-50 transition-colors">
                            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                                <Heart className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{t('dentalTourism.clinicalDiff3Title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('dentalTourism.clinicalDiff3Desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Star Treatments Section */}
            <section id="treatments" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold uppercase tracking-widest mb-2 block">TECHNICAL EXCELLENCE</span>
                        <h2 className="text-4xl font-bold text-primary font-serif">{t('dentalTourism.starTreatmentsTitle')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Implantologia */}
                        <Link to="/implantologia" className="group cursor-pointer">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                <img src="/assets/uploads/doctor_implant_hero_new.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Implantologia" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">{t('dentalTourism.starImplantsTitle')}</h3>
                                    <p className="text-gray-200 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {t('dentalTourism.starImplantsSubtitle')}
                                    </p>
                                    <span className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform">
                                        LEARN TECHNICAL DETAILS <ArrowRight className="ml-2 w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Facetas */}
                        <Link to="/facetas" className="group cursor-pointer">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                <img src="/assets/uploads/facetas_hero_new.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Facetas" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">{t('dentalTourism.starVeneersTitle')}</h3>
                                    <p className="text-gray-200 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {t('dentalTourism.starVeneersSubtitle')}
                                    </p>
                                    <span className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform">
                                        DESIGN MY SMILE <ArrowRight className="ml-2 w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Alinhadores */}
                        <Link to="/alinhadores" className="group cursor-pointer">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                <img src="/assets/uploads/alinhadores_hero_new.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Ortodontia" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">{t('dentalTourism.starAlignersTitle')}</h3>
                                    <p className="text-gray-200 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {t('dentalTourism.starAlignersSubtitle')}
                                    </p>
                                    <span className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform">
                                        START 3D PLANNING <ArrowRight className="ml-2 w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. EXPERIÊNCIA */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-8">{t('dentalTourism.experienceTitle')}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                        {t('dentalTourism.experienceText')}
                    </p>
                </div>
            </section>

            {/* 7. PROVA SOCIAL */}
            <section className="py-20 bg-gray-50 overflow-hidden">
                <div className="text-center mb-12 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif tracking-tight">{t('dentalTourism.socialProofTitle')}</h2>
                </div>
                
                <div className="relative flex overflow-hidden group">
                    <div className="flex gap-6 animate-infinite-scroll py-4">
                        {infiniteResults.map((item, idx) => (
                            <div key={idx} className="flex gap-1.5 bg-white p-3 rounded-3xl shadow-lg border border-gray-100 hover:border-accent/30 transition-all duration-500">
                                <div className="w-[140px] h-[140px] rounded-2xl overflow-hidden relative shadow-inner">
                                    <img src={item.before} alt="Before Treatment" className="w-full h-full object-cover grayscale-[0.3] opacity-80" loading="lazy" />
                                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-[8px] text-white px-2 py-0.5 rounded-full uppercase font-black tracking-tighter">Bef.</div>
                                </div>
                                <div className="w-[140px] h-[140px] rounded-2xl overflow-hidden relative shadow-sm">
                                    <img src={item.after} alt="After Treatment" className="w-full h-full object-cover" loading="lazy" />
                                    <div className="absolute top-2 left-2 bg-accent text-[8px] text-white px-2 py-0.5 rounded-full uppercase font-black tracking-tighter">Aft.</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Patient Guide (The Process) */}
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

            {/* 8.5 Concierge / Worry-Free Experience */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-accent font-bold uppercase tracking-widest mb-2 block">{t('dentalTourism.conciergeSubtitle')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-8 leading-tight">
                                {t('dentalTourism.conciergeTitle')}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10 text-justify">
                                {t('dentalTourism.conciergeText')}
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent flex-shrink-0 border border-gray-100 group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Landmark className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-xl mb-1">{t('dentalTourism.conciergeHotelTitle')}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{t('dentalTourism.conciergeHotelDesc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent flex-shrink-0 border border-gray-100 group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Plane className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-xl mb-1">{t('dentalTourism.conciergeTravelTitle')}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{t('dentalTourism.conciergeTravelDesc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent flex-shrink-0 border border-gray-100 group-hover:bg-accent group-hover:text-white transition-colors">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-xl mb-1">{t('dentalTourism.conciergeTransferTitle')}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{t('dentalTourism.conciergeTransferDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <div className="absolute inset-0 bg-accent rounded-[3rem] transform translate-x-4 translate-y-4"></div>
                            <img src="/assets/uploads/clinic_waiting_room_2.jpg" alt="Premium Experience" className="relative rounded-[3rem] shadow-2xl object-cover w-full h-[500px] z-10" />
                            <div className="absolute top-8 -left-4 md:-left-8 bg-white p-5 md:p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-gray-100">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                                </div>
                                <div>
                                    <p className="font-bold text-primary text-sm md:text-base">All-Inclusive</p>
                                    <p className="text-xs md:text-sm text-gray-500">Premium Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Discover Portugal Section */}
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

             {/* 10. Warranty & Aftercare Section */}
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

             {/* 11. About Section */}
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

            {/* 11.5 Clinic Gallery Section - "Our Space" (Split Layout) */}
            <section className="py-24 bg-white overflow-hidden border-b border-gray-100">
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
                                {/* Desktop Button */}
                                <button
                                    onClick={() => document.getElementById('remote-quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="hidden md:inline-flex px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg"
                                >
                                    {t('bookAppointment')}
                                </button>
                                {/* Mobile Button */}
                                <a
                                    href="tel:+351912092209"
                                    className="inline-flex md:hidden px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg"
                                >
                                    {t('bookAppointment')}
                                </a>
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

            {/* 12. FAQ Section */}
            <section className="py-24 bg-gray-50 border-b border-gray-100">
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

            {/* 13. Final CTA */}
            <section id="remote-quote" className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6 leading-tight">
                        {t('dentalTourism.finalCtaTitle')}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {t('dentalTourism.finalCtaText')}
                    </p>
                    <a
                        href="#remote-quote"
                        className="inline-flex items-center justify-center px-8 py-5 bg-accent text-white rounded-full font-bold shadow-xl hover:bg-primary transition-all duration-300"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('remote-quote-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        {t('dentalTourism.finalCtaButton')} <ArrowRight className="ml-3 w-5 h-5" />
                    </a>
                </div>
                <div id="remote-quote-form" className="max-w-5xl mx-auto px-4 bg-white rounded-[3rem] shadow-2xl p-4 lg:p-12 border border-gray-100">
                   <AppointmentSection pageName="Tourism Landing Final" defaultTreatment="implantes" />
                </div>
            </section>
        </div>
    );
};

export default TurismoDentario;
