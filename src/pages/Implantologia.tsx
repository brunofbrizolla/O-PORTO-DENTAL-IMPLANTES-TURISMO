import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, PhoneCall, ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

const Implantologia = () => {
    const { t } = useTranslation();

    return (
        <div className="animate-fadeIn">
            {/* SEO Hidden Content */}
            <h1 className="sr-only">Implantes Dentários All-on-4 Porto - Dentes Fixos em um Dia</h1>

            {/* 1. Hero Section - Full Screen & Cinematic */}
            <section className="relative h-screen flex items-center justify-end bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-[center_top]"
                    style={{ backgroundImage: 'url("/assets/uploads/doctor_implant_hero_new.png")' }}
                ></div>

                {/* Gradient Overlay - Darker on Right for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-l from-gray-900/90 via-gray-900/50 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center justify-end">
                    <div className="max-w-2xl text-white pr-4 border-r-4 border-accent animate-slideIn text-right flex flex-col items-end">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block">Reabilitação Oral Total</span>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight">
                            Protocolo<br />All-on-4
                        </h2>
                        <p className="text-xl md:text-2xl font-light mb-10 text-gray-100 max-w-lg leading-relaxed">
                            A solução definitiva para recuperar os seus dentes fixos, a estética e a função mastigatória com segurança e conforto.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                            >
                                <PhoneCall className="mr-3 w-5 h-5" />
                                Agendar Avaliação
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Introduction: The Problem & Solution */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative group">
                            <div className="absolute -inset-4 bg-gray-900/5 rounded-3xl transform -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">
                                <img
                                    src="/assets/all_on_4_diagram.png"
                                    alt="Esquema Protocolo All-on-4 Implantes Porto"
                                    className="w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <p className="text-white font-medium text-lg border-l-4 border-accent pl-4">A excelência da técnica All-on-4: Apenas 4 implantes para um sorriso completo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Liberdade de Sorrir</span>
                            <h2 className="text-4xl font-bold text-primary mb-8 font-serif leading-tight">
                                Gostaria de voltar a ter dentes fixos?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg text-justify">
                                Sente incómodo sempre que tenta comer ou falar com a sua prótese removível? O <strong>Protocolo All-on-4</strong> é a resposta que procura. Um tratamento revolucionário de reabilitação total com prótese fixa que lhe devolve a segurança imediata ao sorrir, falar e mastigar.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6 text-justify">
                                Muitas pessoas sofrem com a perda dentária total. As próteses removíveis (dentaduras) tradicionais, embora comuns, acabam por não ser a solução mais confortável, causando insegurança e exigindo substituições frequentes, novas moldagens e desconforto contínuo.
                            </p>
                            <div className="bg-primary-light/30 p-6 rounded-xl border-l-4 border-primary">
                                <p className="text-primary font-medium italic">
                                    "A Implantodontia renovou este tratamento para ser mais seguro e confortável para si, através do protocolo All-on-4."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Detailed Explanation & Advantages */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Tecnologia Avançada</span>
                        <h2 className="text-4xl font-bold text-primary mb-6 font-serif">O que é o Protocolo All-on-4?</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            É uma técnica inovadora onde a prótese dentária total é fixada por <strong>apenas quatro implantes</strong>, colocados em pontos estratégicos do osso maxilar, dois deles com uma inclinação de 45°. Isto permite que utilize uma única prótese fixa para toda a arcada, sem necessidade de a retirar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Conforto Total',
                                text: 'Esqueça a necessidade de colas ou o desconforto das próteses móveis que oscilam.',
                                icon: <Star className="w-8 h-8" />
                            },
                            {
                                title: 'Segurança ao Comer',
                                text: 'Volte a mastigar os seus alimentos favoritos com a firmeza de dentes naturais.',
                                icon: <ShieldCheck className="w-8 h-8" />
                            },
                            {
                                title: 'Menos Invasivo',
                                text: 'Ideal para pacientes com pouca estrutura óssea, muitas vezes dispensando enxertos complexos.',
                                icon: <CheckCircle2 className="w-8 h-8" />
                            },
                            {
                                title: 'Procedimento Rápido',
                                text: 'Cirurgia otimizada com poucas horas de recuperação e possibilidade de carga imediata.',
                                icon: <Clock className="w-8 h-8" />
                            },
                            {
                                title: 'Previsibilidade',
                                text: 'Planeamento digital avançado que permite visualizar o seu novo sorriso antes do procedimento.',
                                icon: <ArrowRight className="w-8 h-8" />
                            },
                            {
                                title: 'Solução Definitiva',
                                text: 'Com os devidos cuidados, é um tratamento desenhado para durar uma vida inteira.',
                                icon: <ShieldCheck className="w-8 h-8" />
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Who is it for? */}
            <section className="py-24 bg-[#197E8C] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif leading-tight">Quem pode realizar este tratamento?</h2>
                            <p className="text-primary-light text-lg mb-8 leading-relaxed">
                                O protocolo All-on-4 é especialmente indicado para pacientes que perderam todos os dentes de uma arcada e que atualmente utilizam dentaduras.
                            </p>
                            <p className="text-primary-light text-lg mb-8 leading-relaxed">
                                É inclusive uma excelente opção para quem tem <strong>pouca qualidade óssea</strong>, pois a angulação dos implantes permite fixação em osso de maior densidade, dispensando muitas vezes a necessidade de enxerto ósseo prévio. Mesmo pacientes com condições como diabetes (controlada) podem ser candidatos elegíveis.
                            </p>
                            <a href="#contact" className="inline-flex items-center text-white font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
                                Agende a sua avaliação hoje <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                                <img src="/assets/uploads/senior_smiling_dental.png" alt="Paciente sénior a sorrir na Porto Implantes" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Process Timeline */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">Como funciona o tratamento?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Um processo transparente e acompanhado em cada etapa.</p>
                    </div>

                    <div className="space-y-12">
                        {[
                            {
                                step: "01",
                                title: "Avaliação e Diagnóstico",
                                text: "Na primeira consulta, o Implantodontista realiza exames detalhados (TAC, fotografias e vídeos) para avaliar a sua saúde oral e estrutura óssea."
                            },
                            {
                                step: "02",
                                title: "Planeamento Digital",
                                text: "Com base nos exames, planeamos a cirurgia e a prótese ao pormenor. Poderá ver uma previsão de como ficará o seu novo sorriso."
                            },
                            {
                                step: "03",
                                title: "O Procedimento",
                                text: "Realiza-se a fixação dos 4 implantes. Em muitos casos, o paciente sai da clínica já com uma prótese fixa provisória no mesmo dia (Carga Imediata)."
                            },
                            {
                                step: "04",
                                title: "Osseointegração",
                                text: "Durante cerca de 4 a 6 meses, os implantes integram-se no osso. É um período de cicatrização fundamental para a estabilidade a longo prazo."
                            },
                            {
                                step: "05",
                                title: "Prótese Definitiva",
                                text: "Após a cicatrização, é colocada a prótese fixa final, desenhada para ser esteticamente perfeita e duradoura (10 a 15 anos ou mais, com os devidos cuidados)."
                            }
                        ].map((phase, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row gap-6 items-center md:items-start max-w-4xl mx-auto group">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg group-hover:bg-accent transition-colors">
                                    {phase.step}
                                </div>
                                <div className="flex-1 bg-gray-50 p-6 rounded-2xl hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-primary mb-2">{phase.title}</h3>
                                    <p className="text-gray-600">{phase.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ / Aftercare */}
            <section className="py-24 bg-primary-light/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary font-serif mb-8">Cuidados e Durabilidade</h2>
                    <div className="bg-white p-8 rounded-3xl shadow-lg text-left">
                        <div className="mb-8">
                            <h3 className="font-bold text-xl text-primary mb-3 flex items-center">
                                <ShieldCheck className="w-6 h-6 mr-2 text-accent" /> Quanto tempo dura?
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Estima-se uma durabilidade média de <strong>10 a 15 anos</strong> para a prótese, podendo os implantes durar uma vida inteira. A longevidade depende diretamente dos cuidados de manutenção e das particularidades fisiológicas de cada paciente.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-primary mb-3 flex items-center">
                                <Star className="w-6 h-6 mr-2 text-accent" /> Cuidados Essenciais
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Para garantir o sucesso a longo prazo, é fundamental manter uma higiene oral rigorosa:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg"><CheckCircle2 className="w-4 h-4 mr-2 text-accent" /> Escovagem correta após as refeições</li>
                                <li className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg"><CheckCircle2 className="w-4 h-4 mr-2 text-accent" /> Uso de fio dental específico ou irrigador oral</li>
                                <li className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg"><CheckCircle2 className="w-4 h-4 mr-2 text-accent" /> Visitas regulares ao dentista (6 em 6 meses)</li>
                                <li className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg"><CheckCircle2 className="w-4 h-4 mr-2 text-accent" /> Evitar hábitos como fumar</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA Final */}
            <section id="contact" className="py-24 bg-white text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Dê o primeiro passo</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif">
                        Sorria com Confiança
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Agende uma avaliação na Porto Implantes e descubra se o Protocolo All-on-4 é a solução ideal para si.
                    </p>
                    <a
                        href="/#appointment"
                        className="inline-flex items-center px-12 py-6 bg-accent text-white text-xl font-bold rounded-full hover:bg-primary shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                    >
                        <PhoneCall className="mr-3 w-6 h-6" />
                        Marcar Consulta
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Implantologia;
