import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Facetas = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20">
            <section className="relative h-[400px] flex items-center bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/assets/images/dental_veneers_smile.png")' }}
                ></div>
                <div className="relative z-20 max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold text-white mb-4 font-serif">
                        {t('veneersTitle') || 'Facetas Dentárias'}
                    </h1>
                    <p className="text-xl text-white/90 max-w-xl">
                        {t('veneersHeroDesc') || 'A arte de desenhar sorrisos perfeitos. Transforme a cor, forma e tamanho dos seus dentes.'}
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Porcelana */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all z-10"></div>
                            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf4722e12?auto=format&fit=crop&q=80" alt="Porcelana" className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                                <h3 className="text-2xl font-bold mb-2">Facetas de Porcelana</h3>
                                <p className="mb-4 opacity-90">Alta durabilidade, resistência a manchas e estética inigualável. A escolha premium para um sorriso definitivo.</p>
                                <span className="inline-flex items-center text-accent font-semibold group-hover:underline">
                                    Saber mais <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                            </div>
                        </div>

                        {/* Resina */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all z-10"></div>
                            <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80" alt="Resina" className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                                <h3 className="text-2xl font-bold mb-2">Facetas em Resina</h3>
                                <p className="mb-4 opacity-90">Solução versátil e minimamente invasiva. Excelentes resultados estéticos em apenas uma consulta.</p>
                                <span className="inline-flex items-center text-accent font-semibold group-hover:underline">
                                    Saber mais <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facetas;
