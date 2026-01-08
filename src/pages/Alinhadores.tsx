import React from 'react';
import { useTranslation } from 'react-i18next';

const Alinhadores = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20">
            {/* 1. Introdução (Hero) */}
            <section className="relative h-[600px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10"></div>
                <div
                    className="absolute inset-0 bg-cover"
                    style={{ backgroundImage: 'url("/assets/uploads/uploaded_image_2_1767830169024.jpg")', backgroundPosition: 'center top' }}
                ></div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
                    <div className="max-w-3xl text-white ml-auto text-right">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif tracking-wide leading-tight">
                            ALINHADORES
                        </h1>
                        <h2 className="text-3xl font-light mb-8 text-secondary">
                            A revolução da ortodontia invisível
                        </h2>
                        <div className="bg-primary/80 backdrop-blur-sm p-8 rounded-l-2xl shadow-xl ml-auto border-r-4 border-accent">
                            <p className="text-xl leading-relaxed">
                                Corrigir o alinhamento dentário já não implica aparelhos metálicos visíveis.
                            </p>
                            <p className="mt-4 text-lg font-light text-gray-100">
                                Os alinhadores transparentes permitem alinhar os dentes de forma discreta, confortável e eficaz, adaptando-se ao seu estilo de vida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. O que são alinhadores dentários */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-primary/10 z-10"></div>
                            <img
                                src="/assets/images/clear_aligners_cosmetic.png"
                                alt="Alinhadores Dentários"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6 font-serif border-l-4 border-accent pl-4">
                                O que são alinhadores dentários?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Os alinhadores são dispositivos transparentes, removíveis e personalizados que movem os dentes gradualmente até à posição desejada.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Cada conjunto é utilizado durante um período específico, seguindo um plano digital previamente definido.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Como funciona o tratamento */}
            <section className="py-20 bg-primary-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 text-primary font-serif">Como funciona o tratamento</h2>
                    <div className="relative">
                        {/* Connecting Line (Hidden on mobile) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/20 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                            {[
                                { step: 1, title: 'Avaliação', desc: 'Planeamento digital' },
                                { step: 2, title: 'Criação', desc: 'Alinhadores personalizados' },
                                { step: 3, title: 'Uso Diário', desc: 'Conforme orientação' },
                                { step: 4, title: 'Follow-up', desc: 'Acompanhamento regular' },
                                { step: 5, title: 'Finalização', desc: 'Contenção e sorriso novo' }
                            ].map((item) => (
                                <div key={item.step} className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-md">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold text-primary mb-2 line-clamp-1">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Para quem são indicados & 6. Duração */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-primary/5 rounded-3xl p-10 border border-primary/10">
                            <h3 className="text-2xl font-bold text-primary mb-6">Para quem são indicados?</h3>
                            <ul className="space-y-4">
                                {['Adultos e adolescentes', 'Casos leves a moderados de desalinhamento', 'Pessoas que procuram discrição e conforto'].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 bg-white p-4 rounded-lg shadow-sm">
                                        <ArrowRight className="w-5 h-5 text-accent mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-accent/5 rounded-3xl p-10 border border-accent/10 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-primary mb-6">Duração e Resultados</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                A duração do tratamento varia conforme cada caso, mas os resultados são progressivos, previsíveis e altamente satisfatórios.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Vantagens dos alinhadores */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 font-serif">Vantagens dos Alinhadores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            'Quase invisíveis',
                            'Removíveis (refeições/higiene)',
                            'Maior conforto',
                            'Planeamento previsível',
                            'Menos consultas de urgência'
                        ].map((advantage, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all text-center flex flex-col items-center justify-center min-h-[160px] group">
                                <div className="w-2 h-2 bg-accent rounded-full mb-4 group-hover:scale-150 transition-transform"></div>
                                <span className="font-semibold">{advantage}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Chamada para ação */}
            <section className="py-24 bg-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-50"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-6 font-serif">
                        Alinhe o seu sorriso sem comprometer a sua imagem.
                    </h2>
                    <p className="text-2xl text-white/90 mb-10 font-light">
                        Agende a sua consulta de ortodontia invisível.
                    </p>
                    <a
                        href="/#appointment"
                        className="inline-flex items-center px-10 py-5 bg-white text-primary text-xl font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all shadow-2xl"
                    >
                        <span className="mr-3">📅</span>
                        Agendar Consulta
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Alinhadores;
