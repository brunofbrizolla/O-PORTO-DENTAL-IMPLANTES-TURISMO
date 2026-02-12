import { CheckCircle2, PhoneCall, ShieldCheck, Clock, Gem, Smile, Layers, Activity } from 'lucide-react';

const Implantologia = () => {

    return (
        <div className="animate-fadeIn font-sans text-gray-800">
            {/* SEO Hidden Content */}
            <h1 className="sr-only">Reabilitação Oral All-on-4 Porto - Implantes Dentários e Prótese Fixa</h1>

            {/* 1. Hero Section - Full Screen & Cinematic (Preserved as requested) */}
            <section className="relative h-screen flex items-center justify-end bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/assets/uploads/doctor_implant_hero_new.jpg")'
                    }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-gray-900/90 via-gray-900/50 to-transparent z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full h-full flex items-center justify-end">
                    <div className="max-w-2xl text-white pr-4 border-r-4 border-accent animate-slideIn text-right flex flex-col items-end">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block">Reabilitação Oral Total</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                            Protocolo<br />All-on-4
                        </h2>
                        <p className="text-xl md:text-2xl font-light mb-8 text-gray-100 max-w-lg leading-relaxed">
                            Recupere a função mastigatória e a estética facial com a mais moderna medicina dentária.
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
            <section className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-8">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Solução Definitiva</span>
                        <h2 className="text-3xl font-bold text-primary mb-6 font-serif leading-tight">
                            Recupere o Sorriso e a Confiança
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify md:text-center">
                            Se sofre com a perda total ou parcial de dentes, a técnica <strong>All-on-4</strong> representa o que há de mais moderno na medicina dentária mundial. Na nossa clínica no Porto, oferecemos soluções personalizadas que permitem fixar uma dentadura completa em apenas um dia, devolvendo-lhe a qualidade de vida que merece.
                        </p>
                    </div>

                    {/* Image Section (Extra Image requested) */}
                    <div className="relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-xl mb-12 group">
                        <img
                            src="/assets/uploads/implantologia_highlight.jpg"
                            alt="Ambiente confortável na Porto Implantes"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-primary mb-6 font-serif">O que é o Conceito All-on-4 e All-on-6?</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                A técnica consiste na colocação de uma prótese fixa sobre implantes de titânio. Como o próprio nome indica, o tratamento é realizado a partir de <strong>4 implantes estrategicamente posicionados</strong> para oferecer a máxima estabilidade, mesmo em pacientes com pouca densidade óssea.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                Dependendo da avaliação clínica e da necessidade de suporte adicional, o procedimento também pode ser realizado na modalidade <strong>All-on-6</strong>, utilizando seis implantes para garantir ainda mais robustez à estrutura, especialmente em arcadas maiores ou forças de mastigação mais intensas.
                            </p>
                        </div>
                        <div className="relative group max-w-md mx-auto">
                            <div className="absolute -inset-2 bg-accent/20 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src="/assets/all_on_4_diagram.png"
                                    alt="Esquema All-on-4"
                                    className="w-full bg-black object-contain max-h-[300px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Materials Options */}
            <section className="py-6 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Personalização</span>
                        <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Opções de Materiais: Qualidade e Durabilidade</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Entendemos que cada paciente tem necessidades diferentes. Trabalhamos com os três principais materiais do mercado.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Material 1: Resina */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-gray-400 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-4">
                                <Smile className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-3">1. Resina Acrílica</h3>
                            <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                                Opção acessível e comum. Estrutura interna metálica com acabamento em resina de alta densidade.
                            </p>
                            <ul className="text-sm space-y-2 mb-3 text-gray-500">
                                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-accent mt-0.5" /> Excelente custo-benefício</li>
                                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-accent mt-0.5" /> Facilidade de reparação</li>
                            </ul>
                            <div className="mt-auto pt-3 border-t border-gray-100">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Durabilidade</span>
                                <p className="text-primary font-bold">5 a 7 anos</p>
                            </div>
                        </div>

                        {/* Material 2: Zircónia */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl border-t-8 border-accent transform md:-translate-y-4 hover:-translate-y-6 transition-all duration-300 relative">
                            <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">MAIS PROCURADO</div>
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                                <Gem className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-3">2. Zircónia</h3>
                            <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                                O "diamante" da medicina dentária. Biocompatível, extremamente resistente e com estética superior.
                            </p>
                            <ul className="text-sm space-y-2 mb-3 text-gray-500">
                                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary mt-0.5" /> Não sofre desgaste</li>
                                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary mt-0.5" /> Altamente resistente a manchas</li>
                            </ul>
                            <div className="mt-auto pt-3 border-t border-gray-100">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Durabilidade</span>
                                <p className="text-primary font-bold">Excecional (Décadas)</p>
                            </div>
                        </div>

                        {/* Material 3: Porcelana */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-8 border-primary hover:-translate-y-2 transition-all duration-300">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-3">3. Porcelana (Cerâmica)</h3>
                            <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                                O padrão de excelência em naturalidade. Cada dente é esculpido para mimetizar o esmalte natural.
                            </p>
                            <ul className="text-sm space-y-2 mb-3 text-gray-500">
                                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-accent mt-0.5" /> Estética inigualável</li>
                                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-accent mt-0.5" /> Estabilidade de cor vitalícia</li>
                            </ul>
                            <div className="mt-auto pt-3 border-t border-gray-100">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Durabilidade</span>
                                <p className="text-primary font-bold">15 a 20 anos +</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Benefits (Why Choose Us) */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl md:text-3xl font-bold text-center mb-16 font-serif">Benefícios de Escolher o Tratamento no Porto</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                            <Clock className="w-8 h-8 text-accent mb-3" />
                            <h3 className="text-lg font-bold mb-2">Carga Imediata</h3>
                            <p className="text-gray-200 text-xs leading-relaxed">
                                Em muitos casos, sai da cirurgia com dentes fixos provisórios no próprio dia.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                            <Smile className="w-8 h-8 text-accent mb-3" />
                            <h3 className="text-lg font-bold mb-2">Fim das Próteses Amovíveis</h3>
                            <p className="text-gray-200 text-xs leading-relaxed">
                                Esqueça o desconforto e a insegurança das dentaduras que escorregam ou magoam.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                            <Activity className="w-8 h-8 text-accent mb-3" />
                            <h3 className="text-lg font-bold mb-2">Preservação Óssea</h3>
                            <p className="text-gray-200 text-xs leading-relaxed">
                                Os implantes estimulam o osso maxilar, prevenindo o envelhecimento facial precoce.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                            <ShieldCheck className="w-8 h-8 text-accent mb-3" />
                            <h3 className="text-lg font-bold mb-2">Paladar e Mastigação</h3>
                            <p className="text-gray-200 text-xs leading-relaxed">
                                Recupere totalmente o sabor dos alimentos e a força para comer o que desejar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Process Timeline */}
            <section className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Passo a Passo</span>
                        <h2 className="text-3xl md:text-3xl font-bold text-primary font-serif mb-4">Como funciona o processo?</h2>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                        {[
                            {
                                step: "01",
                                title: "Avaliação Digital",
                                text: "Utilizamos exames de imagem avançados (TAC e scanners intraorais) para planear a posição exata de cada implante."
                            },
                            {
                                step: "02",
                                title: "Cirurgia Minimamente Invasiva",
                                text: "Procedimento seguro, realizado sob anestesia local ou sedação consciente, para garantir o seu conforto total."
                            },
                            {
                                step: "03",
                                title: "Fixação da Prótese",
                                text: "Instalação dos dentes que transformarão a sua fisionomia e devolverão o seu sorriso."
                            }
                        ].map((phase, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 group-[.is-active]:bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                                    <span className="font-bold text-xs">{phase.step}</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-primary text-xl">{phase.title}</div>
                                    </div>
                                    <div className="text-gray-600 text-sm leading-relaxed">{phase.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA Final */}
            <section id="contact" className="py-24 bg-gray-50 text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Dê o primeiro passo</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-serif">
                        Pronto para transformar a sua vida no Porto?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Não permita que a falta de dentes limite a sua felicidade ou a sua saúde. A nossa equipa é especialista em All-on-4 e All-on-6.
                    </p>
                    <p className="text-lg text-primary font-medium mb-12 italic">
                        "O seu novo sorriso, duradouro e natural."
                    </p>
                    <a
                        href="/#appointment"
                        className="inline-flex items-center px-12 py-6 bg-accent text-white text-xl font-bold rounded-full hover:bg-primary shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                    >
                        <PhoneCall className="mr-3 w-6 h-6" />
                        Marcar Consulta de Avaliação
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Implantologia;
