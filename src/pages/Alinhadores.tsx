import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ScanFace, MousePointerClick, Smile, CalendarCheck } from 'lucide-react';

const Alinhadores = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* 1. Hero Section - Cinematic */}
            <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/assets/uploads/alinhadores_hero_new.png")' }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center">
                    <div className="max-w-3xl text-white pl-4 border-l-4 border-accent animate-slideIn">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block">Ortodontia Digital</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight">
                            Alinhamento<br />Invisível
                        </h1>
                        <p className="text-xl md:text-2xl font-light mb-10 text-gray-200 leading-relaxed max-w-2xl">
                            A tecnologia mais avançada para alinhar o seu sorriso de forma discreta, confortável e eficaz.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                        >
                            <ScanFace className="mr-3 w-5 h-5" />
                            Simular o Meu Sorriso
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. O que são */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-primary/10 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80"
                                alt="Alinhadores Dentários"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div>
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Liberdade & Conforto</span>
                            <h2 className="text-4xl font-bold text-primary mb-8 font-serif leading-tight">
                                A evolução do aparelho dentário
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Esqueça os ferros e elásticos. Os alinhadores invisíveis são goteiras transparentes, feitas à medida, que corrigem a posição dos seus dentes progressivamente.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Removíveis para comer e higienizar, oferecem uma liberdade que os aparelhos tradicionais não permitem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Como funciona (Timeline Style) */}
            <section className="py-24 bg-primary-light/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Processo Simples</span>
                        <h2 className="text-4xl font-bold text-primary font-serif">A sua jornada para um sorriso novo</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { step: '01', title: 'Scan Digital', desc: 'Moldes digitais 3D sem massa desconfortável.', icon: <ScanFace className="w-8 h-8" /> },
                            { step: '02', title: 'Planeamento', desc: 'Visualize o resultado final antes de começar.', icon: <MousePointerClick className="w-8 h-8" /> },
                            { step: '03', title: 'Alinhadores', desc: 'Receba os seus kits personalizados.', icon: <Smile className="w-8 h-8" /> },
                            { step: '04', title: 'Sorriso', desc: 'Acompanhamento e resultado final.', icon: <CalendarCheck className="w-8 h-8" /> }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300 relative group">
                                <span className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-accent/20 transition-colors">{item.step}</span>
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
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">Porquê escolher alinhadores?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { t: 'Invisível', d: 'Ninguém nota que está a usar aparelho.' },
                            { t: 'Removível', d: 'Retire para comer e lavar os dentes.' },
                            { t: 'Confortável', d: 'Sem metais que magoam a boca.' },
                            { t: 'Previsível', d: 'Saiba quando termina o tratamento.' },
                            { t: 'Rápido', d: 'Resultados visíveis em poucas semanas.' },
                            { t: 'Higiénico', d: 'Fácil limpeza e manutenção diária.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                                <h3 className="text-xl font-bold mb-2 text-accent">{item.t}</h3>
                                <p className="text-gray-200">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section id="contact" className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif">
                        Alinhe o seu sorriso sem mudar a sua rotina.
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        A tecnologia certa para quem procura resultados excelentes com o máximo conforto.
                    </p>
                    <a
                        href="/#appointment"
                        className="inline-flex items-center px-12 py-6 bg-primary text-white text-xl font-bold rounded-full hover:bg-primary-dark shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                    >
                        Quero o Meu Sorriso Novo
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Alinhadores;
