import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, Wand2, Calculator } from 'lucide-react';

const Facetas = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* 1. Hero Section - Cinematic */}
            <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-[center_top]"
                    style={{ backgroundImage: 'url("/assets/uploads/facetas_hero_new.jpg")' }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center">
                    <div className="max-w-2xl text-white pl-4 border-l-4 border-accent animate-slideIn">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block">Estética Dentária</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                            A Arte de<br />Criar Sorrisos
                        </h1>
                        <p className="text-xl md:text-2xl font-light mb-8 text-gray-200 leading-relaxed">
                            Transforme a cor, a forma e a harmonia dos seus dentes com facetas de alta precisão.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                        >
                            <Sparkles className="mr-3 w-5 h-5" />
                            Agendar Design de Sorriso
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
                                <p className="text-white font-medium text-lg border-l-4 border-accent pl-4">Perfeição em cada detalhe.</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Definição</span>
                            <h2 className="text-3xl font-bold text-primary mb-8 font-serif leading-tight">
                                O que são facetas?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                As facetas são "lentes" ultrafinas personalizadas que aderem à superfície frontal dos dentes. São a solução ideal para corrigir pequenas imperfeições, manchas ou espaços, proporcionando um sorriso naturalmente radiante.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Um tratamento minimamente invasivo com resultados estéticos imediatos e transformadores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Comparação (Modern Cards) */}
            <section className="py-6 bg-primary-light/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary font-serif">Porcelana ou Resina?</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Porcelana */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-accent relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute top-6 right-6 p-3 bg-accent/10 rounded-full text-accent">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-6">Cerâmica (Porcelana)</h3>
                            <p className="text-gray-500 mb-8 italic">A escolha "Premium" para máxima durabilidade.</p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Inalterável com o tempo (não mancha)</li>
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Brilho e textura idênticos ao dente natural</li>
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Elevadíssima resistência</li>
                            </ul>
                        </div>

                        {/* Resina */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-primary relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute top-6 right-6 p-3 bg-primary/10 rounded-full text-primary">
                                <Wand2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-6">Resina Composta</h3>
                            <p className="text-gray-500 mb-8 italic">Solução versátil e rápida.</p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Realizado numa única consulta</li>
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Maior facilidade de reparação</li>
                                <li className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Investimento inicial menor</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 text-lg">
                            Na sua avaliação, aconselharemos a melhor opção para o seu caso e expectativas.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Indicações (Grid) */}
            <section className="py-6 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 font-serif">Quando recomendamos facetas?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            'Dentes com manchas profundas',
                            'Desgaste dentário acentuado',
                            'Pequenos espaços (diastemas)',
                            'Dentes com formato irregular',
                            'Fraturas dentárias ligeiras',
                            'Correção de "Sorriso Triste"'
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
                        Um novo sorriso pode mudar tudo.
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Venha desenhar o seu sorriso connosco. Tecnologia digital e visão artística ao seu dispor.
                    </p>
                    <a
                        href="/#appointment"
                        className="inline-flex items-center px-12 py-6 bg-primary text-white text-xl font-bold rounded-full hover:bg-primary-dark shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                    >
                        Criar o Meu Sorriso
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Facetas;
