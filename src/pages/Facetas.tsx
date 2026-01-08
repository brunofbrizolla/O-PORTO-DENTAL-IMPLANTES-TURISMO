import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Facetas = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20">
            {/* 1. Introdução (Hero) */}
            <section className="relative h-[600px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10"></div>
                <div
                    className="absolute inset-0 bg-cover"
                    style={{ backgroundImage: 'url("/assets/uploads/uploaded_image_1_1767830169024.jpg")', backgroundPosition: 'center 20%' }}
                ></div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
                    <div className="max-w-3xl text-white ml-auto text-right">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif tracking-wide leading-tight">
                            FACETAS
                        </h1>
                        <h2 className="text-3xl font-light mb-8 text-secondary">
                            Porcelana e resina para uma estética sublime
                        </h2>
                        <div className="bg-primary/80 backdrop-blur-sm p-8 rounded-l-2xl shadow-xl ml-auto border-r-4 border-accent">
                            <p className="text-xl leading-relaxed">
                                O sorriso é um dos principais elementos da expressão facial. Pequenas imperfeições podem ter um grande impacto na autoestima.
                            </p>
                            <p className="mt-4 text-lg font-light text-gray-100">
                                As facetas dentárias são uma solução estética moderna que permite transformar o sorriso de forma rápida, segura e personalizada.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. O que são facetas dentárias */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80"
                                alt="Facetas Dentárias Close-up"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6 font-serif border-l-4 border-accent pl-4">
                                O que são facetas dentárias
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                As facetas são lâminas finas aplicadas sobre a superfície dos dentes, concebidas para melhorar a forma, a cor, o alinhamento visual e a harmonia do sorriso.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                São indicadas para correções estéticas sem necessidade de tratamentos invasivos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Facetas de porcelana vs facetas de resina */}
            <section className="py-20 bg-primary-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 text-primary font-serif">Porcelana vs. Resina</h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Porcelana */}
                        <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-accent relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-9xl font-serif font-bold text-primary">P</span>
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-6 relative z-10">Facetas de Porcelana</h3>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Maior durabilidade</li>
                                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Elevada resistência a manchas</li>
                                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Estética altamente natural</li>
                            </ul>
                        </div>

                        {/* Resina */}
                        <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-primary relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-9xl font-serif font-bold text-accent">R</span>
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-6 relative z-10">Facetas de Resina</h3>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Procedimento mais rápido</li>
                                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Custo mais acessível</li>
                                <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Boa solução para correções estéticas pontuais</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 text-lg font-medium italic">
                        "A escolha depende das necessidades e expectativas de cada paciente."
                    </p>
                </div>
            </section>

            {/* 4. Indicações do tratamento */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 font-serif">Indicações do Tratamento</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            'Manchas permanentes',
                            'Dentes desgastados ou fraturados',
                            'Espaços entre dentes',
                            'Assimetrias no sorriso',
                            'Correções estéticas sem ortodontia'
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center text-center h-32">
                                <span className="font-semibold text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Como é realizado e 6. Durabilidade */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Como é realizado o procedimento</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    O tratamento começa com uma avaliação estética detalhada. Após o planeamento, as facetas são desenhadas à medida, respeitando a fisionomia e a naturalidade do sorriso.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Durabilidade e Cuidados</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Com higiene oral adequada e visitas regulares, as facetas mantêm-se bonitas e funcionais durante muitos anos.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80"
                                alt="Planeamento Digital"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Chamada para ação */}
            <section className="py-24 bg-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-50"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-6 font-serif">
                        Descubra o sorriso que sempre quis, com naturalidade e elegância.
                    </h2>
                    <p className="text-2xl text-white/90 mb-10 font-light">
                        Marque a sua consulta de avaliação estética.
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

export default Facetas;
