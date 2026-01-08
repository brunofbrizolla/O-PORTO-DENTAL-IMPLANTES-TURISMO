import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, PhoneCall, ArrowRight } from 'lucide-react';

const Implantologia = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-20">
            {/* 1. Introdução (Hero) */}
            <section className="relative h-[600px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10"></div>
                <div
                    className="absolute inset-0 bg-cover"
                    style={{ backgroundImage: 'url("/assets/uploads/uploaded_image_0_1767830169024.jpg")', backgroundPosition: 'center top' }}
                ></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
                    <div className="max-w-3xl text-white ml-auto text-right">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif tracking-wide leading-tight">
                            IMPLANTOLOGIA
                        </h1>
                        <h2 className="text-3xl font-light mb-8 text-secondary">
                            Sorrisos fixos e duradouros com a técnica All-on-4
                        </h2>
                        <div className="bg-primary/80 backdrop-blur-sm p-8 rounded-l-2xl shadow-xl ml-auto border-r-4 border-accent">
                            <p className="text-xl leading-relaxed">
                                A perda de dentes afeta muito mais do que a estética. Compromete a mastigação, a fala, a saúde oral e a confiança.
                                <br /><br />
                                A implantologia dentária oferece uma solução segura, moderna e duradoura para substituir dentes perdidos e recuperar um sorriso funcional e natural.
                            </p>
                            <p className="mt-4 text-lg font-light text-gray-100">
                                Com a técnica All-on-4, é possível reabilitar uma arcada completa de forma eficiente, muitas vezes com dentes fixos no próprio dia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. O que é a Implantologia */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/images/dental_implants_all_on_4.png"
                                    alt="Implante Dentário Esquema"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                                    <p className="text-white font-medium">Soluções biocompatíveis e duradouras.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-primary mb-6 font-serif border-l-4 border-accent pl-4">
                                O que é a Implantologia?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                A implantologia é a área da medicina dentária dedicada à substituição de dentes através de implantes dentários. Estes implantes são pequenas estruturas em titânio, biocompatíveis, que funcionam como raízes artificiais, integrando-se no osso de forma segura e estável.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Sobre estes implantes são colocadas coroas ou próteses fixas, devolvendo a função e a estética do sorriso.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Técnica All-on-4 */}
            <section className="py-20 bg-primary-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-6 font-serif">Técnica All-on-4</h2>
                        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                            A técnica All-on-4 permite a colocação de uma prótese fixa completa suportada por apenas quatro implantes estrategicamente posicionados. Esta abordagem reduz a necessidade de enxertos ósseos e acelera todo o processo de reabilitação.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-8">Principais vantagens:</h3>
                            <div className="space-y-6">
                                {[
                                    { title: 'Menor tempo de tratamento', desc: 'Recupere o seu sorriso mais rapidamente.' },
                                    { title: 'Recuperação mais rápida', desc: 'Procedimento otimizado para o seu conforto.' },
                                    { title: 'Dentes fixos e naturais', desc: 'Estabilidade total para comer e falar.' },
                                    { title: 'Solução duradoura', desc: 'Conforto e segurança a longo prazo.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-accent">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                                        <div>
                                            <h4 className="font-bold text-gray-800">{item.title}</h4>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                                alt="All on 4"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Para quem é indicado */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                        <h2 className="text-3xl font-bold mb-10 text-center font-serif">Para quem é indicado?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                'Pessoas que perderam vários dentes ou todos os dentes',
                                'Utilizadores de próteses removíveis desconfortáveis',
                                'Pacientes que procuram uma solução fixa e definitiva',
                                'Casos com perda óssea moderada'
                            ].map((item, idx) => (
                                <div key={idx} className="bg-primary-dark/50 p-6 rounded-xl text-center hover:bg-white/10 transition-colors">
                                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                        {idx + 1}
                                    </div>
                                    <p className="font-medium text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Como funciona e 6. Resultados */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Como funciona o tratamento</h2>
                            <div className="space-y-0 relative border-l-2 border-primary/20 ml-4 pl-8 pb-4">
                                {[
                                    'Avaliação clínica e exames digitais',
                                    'Planeamento personalizado',
                                    'Colocação dos implantes',
                                    'Fixação da prótese provisória',
                                    'Acompanhamento e prótese definitiva'
                                ].map((step, idx) => (
                                    <div key={idx} className="relative mb-10 last:mb-0">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-white shadow-sm"></div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-2">{step}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Resultados e Durabilidade</h2>
                            <div className="bg-primary-light p-8 rounded-2xl mb-8">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Com os cuidados adequados e acompanhamento regular, os implantes dentários podem durar muitos anos, oferecendo conforto, segurança e um sorriso natural.
                                </p>
                            </div>
                            <div className="h-64 rounded-xl overflow-hidden shadow-lg relative">
                                <img src="/assets/uploads/uploaded_image_1_1767830169024.jpg" alt="Equipa em consulta" className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                                    <p className="font-medium">Confiança recuperada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Chamada para ação */}
            <section className="py-24 bg-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-50"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-6 font-serif">
                        Recupere o prazer de sorrir, falar e comer com confiança.
                    </h2>
                    <p className="text-2xl text-white/90 mb-10 font-light">
                        Marque a sua avaliação e descubra se a implantologia é a solução ideal para si.
                    </p>
                    <a
                        href="/#appointment"
                        className="inline-flex items-center px-10 py-5 bg-white text-primary text-xl font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all shadow-2xl"
                    >
                        <PhoneCall className="mr-3 w-6 h-6" />
                        Agendar Avaliação
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Implantologia;
