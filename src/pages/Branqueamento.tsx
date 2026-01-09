import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Clock, ShieldCheck, Sun } from 'lucide-react';

const Branqueamento = () => {
    const { t } = useTranslation();
    return (
        <div>
            {/* 1. Hero Section - Cinematic (Matches others but Right Aligned) */}
            {/* 1. Hero Section - Cinematic (Standard Left Aligned) */}
            <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/assets/uploads/branqueamento_hero_v2.png")' }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center">
                    <div className="max-w-3xl text-white pl-4 border-l-4 border-accent animate-slideIn">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block">Estética Facial</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif drop-shadow-lg leading-tight">
                            Branqueamento<br />Dentário
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 max-w-xl mb-10 font-light leading-relaxed">
                            Recupere a luminosidade natural do seu sorriso com um tratamento seguro, rápido e eficaz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                            >
                                <Sun className="mr-3 w-5 h-5" />
                                Quero um Sorriso Mais Branco
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. O que é (Clean Layout) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative group">
                            <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/uploads/branqueamento_before_after.png"
                                    alt="Sorriso Brilhante Antes e Depois"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                                    <p className="text-white font-medium text-lg border-l-4 border-accent pl-4">Resultados visíveis de forma imediata.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">O Tratamento</span>
                            <h2 className="text-4xl font-bold text-primary mb-8 font-serif leading-tight">
                                Ilumine o seu sorriso
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                O branqueamento dentário é um procedimento estético não invasivo que permite aclarar a cor dos dentes, removendo manchas e pigmentação acumulada ao longo do tempo (café, chá, tabaco, etc.).
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Utilizamos tecnologias avançadas que garantem a proteção do esmalte e das gengivas, proporcionando um resultado natural e duradouro.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Vantagens (Clean Cards) */}
            <section className="py-24 bg-primary-light/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Porquê branquear connosco?</h2>
                        <p className="text-gray-600">Priorizamos a saúde do seu dente acima de tudo.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Clock className="w-10 h-10" />, title: 'Rápido', desc: 'Sessões de consultório com resultados imediatos.' },
                            { icon: <ShieldCheck className="w-10 h-10" />, title: 'Seguro', desc: 'Produtos certificados que não danificam o esmalte.' },
                            { icon: <Sparkles className="w-10 h-10" />, title: 'Eficaz', desc: 'Elimina manchas difíceis e rejuvenesce o sorriso.' }
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

            {/* 7. CTA Final */}
            <section id="contact" className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif">
                        O seu sorriso merece brilhar.
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Agende hoje mesmo o seu branqueamento e veja a diferença.
                    </p>
                    <a
                        href="/#appointment"
                        className="inline-flex items-center px-12 py-6 bg-primary text-white text-xl font-bold rounded-full hover:bg-primary-dark shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                    >
                        Agendar Branqueamento
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Branqueamento;
