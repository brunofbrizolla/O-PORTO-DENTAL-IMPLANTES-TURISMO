import React from 'react';
import { useTranslation } from 'react-i18next';

const Alinhadores = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20">
            <section className="bg-primary-light py-20">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-accent font-bold tracking-wider uppercase mb-2 block">Ortodontia Invisível</span>
                        <h1 className="text-5xl font-bold text-primary mb-6 font-serif">Alinhadores Estéticos</h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Corrige o teu sorriso de forma discreta, confortável e eficaz. Os alinhadores transparentes são a solução moderna para quem procura alinhar os dentes sem o impacto visual dos aparelhos metálicos tradicionais.
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary">
                            <h3 className="font-semibold text-primary mb-2">Vantagens:</h3>
                            <ul className="grid grid-cols-2 gap-2 text-gray-600">
                                <li className="flex items-center">✓ Quase invisíveis</li>
                                <li className="flex items-center">✓ Removíveis</li>
                                <li className="flex items-center">✓ Confortáveis</li>
                                <li className="flex items-center">✓ Higiene fácil</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
                        <img
                            src="/assets/images/clear_aligners_cosmetic.png"
                            alt="Alinhadores"
                            className="relative z-10 w-full rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Alinhadores;
