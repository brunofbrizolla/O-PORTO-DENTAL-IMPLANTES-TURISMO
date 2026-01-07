import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, PhoneCall, ArrowRight } from 'lucide-react';

const Implantologia = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
                {/* Placeholder for the realistic image - will be replaced by generated image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/assets/images/dental_implants_all_on_4.png")' }} // Will use the generated image path
                ></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-5xl font-bold mb-6 font-serif tracking-wide border-l-4 border-accent pl-6">
                            {t('implantologyTitle') || 'Implantologia Avançada'}
                        </h1>
                        <p className="text-xl opacity-90 mb-8 max-w-xl">
                            {t('implantologyHeroDesc') || 'Recupere o seu sorriso e a sua confiança com as nossas soluções de implantes dentários de última geração.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">
                                All-on-4: {t('allOn4Title') || 'A Revolução no Sorriso Total'}
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                {t('allOn4Desc') || 'O conceito de tratamento All-on-4® é a melhor solução para reabilitação total de maxilares edêntulos. Permite a colocação de dentes fixos imediatos, com elevado conforto e estética, utilizando apenas 4 implantes.'}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    'Sorriso fixo imediato',
                                    'Sem enxertos ósseos na maioria dos casos',
                                    'Menor tempo de recuperação',
                                    'Resultados estéticos naturais',
                                    'Melhoria imediata na mastigação e fala'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <CheckCircle2 className="w-6 h-6 text-accent mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg">
                                {t('bookConsultation') || 'Agendar Avaliação'}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-accent/10 transform translate-x-4 translate-y-4 rounded-lg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                                alt="All on 4 Model"
                                className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-primary-light/50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Porquê Escolher a Porto Implantes?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Features blocks */}
                        {[
                            { title: 'Tecnologia 3D', desc: 'Planeamento digital preciso para cirurgias minimamente invasivas.' },
                            { title: 'Materiais Premium', desc: 'Utilizamos apenas implantes e cerâmicas de marcas líderes mundiais.' },
                            { title: 'Acompanhamento', desc: 'Protocolo rigoroso de manutenção para garantir a longevidade do tratamento.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-accent">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Implantologia;
