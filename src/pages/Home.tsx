import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
    PhoneCall,
    CheckCircle2,
    Award,
    Users,
    MessageCircle,
    Star,
    Quote,
    Loader2,
    MessageCircleMore
} from 'lucide-react';

const Home = () => {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            await emailjs.sendForm(
                'service_htj9n8s',
                'template_zzz72ek',
                formRef.current!,
                'meaA1Ni7_dJtElS0x'
            );
            setShowSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (err) {
            setError('Erro ao enviar a mensagem. Por favor, tente novamente.');
            console.error('EmailJS Error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="relative h-[600px] bg-cover bg-center animate-fadeIn"
                style={{
                    backgroundImage: 'url("/assets/uploads/uploaded_image_0_1767826009596.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>

                <div className="relative max-w-7xl mx-auto px-4 h-full flex items-start pt-32">
                    <div className="text-white max-w-lg mt-4 animate-slideIn">
                        <h1 className="text-5xl font-extrabold tracking-wide mb-6 drop-shadow-2xl font-serif">
                            {t('implantsTitle')}
                        </h1>
                        <p
                            className="text-xl mb-8 leading-relaxed font-light"
                            dangerouslySetInnerHTML={{ __html: t('heroDescription') }}
                        />
                        <a
                            href="tel:+351912092209"
                            className="flex items-center px-8 py-4 text-lg font-medium bg-accent hover:bg-white hover:text-primary text-white rounded-full shadow-lg transform hover:scale-105 transition-all w-fit duration-300"
                        >
                            <PhoneCall className="h-5 w-5 mr-3" />
                            {t('bookAppointment')}
                        </a>
                    </div>
                </div>
            </section>

            {/* Specialties Services Linking */}
            <section className="py-20 bg-primary-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 text-primary font-serif">A Excelência em Cada Detalhe</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Implantologia */}
                        <Link to="/implantologia" className="group cursor-pointer">
                            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                                <img src="/assets/uploads/uploaded_image_2_1767826009596.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Implantologia" />
                                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-3xl font-bold text-white mb-2">Implantologia</h3>
                                    <p className="text-white/90">Sorrisos fixos e duradouros com a técnica All-on-4.</p>
                                    <span className="mt-4 px-6 py-2 border border-white text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Saiba mais</span>
                                </div>
                            </div>
                        </Link>

                        {/* Facetas */}
                        <Link to="/facetas" className="group cursor-pointer">
                            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                                <img src="/assets/uploads/uploaded_image_3_1767826009596.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Facetas" />
                                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-3xl font-bold text-white mb-2">Facetas</h3>
                                    <p className="text-white/90">Porcelana e Resina para uma estética sublime.</p>
                                    <span className="mt-4 px-6 py-2 border border-white text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Saiba mais</span>
                                </div>
                            </div>
                        </Link>

                        {/* Alinhadores */}
                        <Link to="/alinhadores" className="group cursor-pointer">
                            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                                <img src="/assets/uploads/uploaded_image_4_1767826009596.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Ortodontia" />
                                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-3xl font-bold text-white mb-2">Alinhadores</h3>
                                    <p className="text-white/90">A revolução da ortodontia invisível.</p>
                                    <span className="mt-4 px-6 py-2 border border-white text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Saiba mais</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Secondary Services Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
                        <Link to="/branqueamento" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-between group border-l-4 border-accent">
                            <div>
                                <h4 className="text-xl font-bold text-primary">Branqueamento</h4>
                                <p className="text-gray-600 text-sm">Ilumine o seu sorriso com segurança.</p>
                            </div>
                            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary group-hover:text-accent transition-colors">→</div>
                        </Link>
                        <Link to="/prevencao" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-between group border-l-4 border-accent">
                            <div>
                                <h4 className="text-xl font-bold text-primary">Prevenção</h4>
                                <p className="text-gray-600 text-sm">Manutenção e higiene para a saúde oral.</p>
                            </div>
                            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary group-hover:text-accent transition-colors">→</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Treatments Section (Kept as overview) */}
            <section id="treatments" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                        {t('treatmentTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { key: 'whitening', icon: <CheckCircle2 className="h-8 w-8" /> },
                            { key: 'braces', icon: <CheckCircle2 className="h-8 w-8" /> },
                            { key: 'treatment_implants', icon: <CheckCircle2 className="h-8 w-8" /> },
                            { key: 'extractions', icon: <CheckCircle2 className="h-8 w-8" /> },
                            { key: 'endodontics', icon: <CheckCircle2 className="h-8 w-8" /> },
                            { key: 'dentalCleaning', icon: <CheckCircle2 className="h-8 w-8" /> },
                        ].map((treatment, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/20"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        {treatment.icon}
                                    </div>
                                    <h3 className="text-xl font-bold ml-3 text-primary group-hover:text-accent transition-colors">
                                        {t(`${treatment.key}`)}
                                    </h3>
                                </div>
                                <p className="text-gray-600 group-hover:text-gray-800 transition-colors mb-4">
                                    {t(`${treatment.key}Description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Diferentials Section */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        {t('differentialsTitle')}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { key: 'advancedTechnology', icon: <Award className="h-8 w-8 text-white" /> },
                            { key: 'specializedTeam', icon: <Users className="h-8 w-8 text-white" /> },
                            { key: 'humanizedCare', icon: <MessageCircle className="h-8 w-8 text-white" /> },
                        ].map((differential, index) => (
                            <div key={index} className="bg-white/10 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 backdrop-blur-sm">
                                <div className="bg-accent p-4 rounded-full w-fit mb-6">
                                    {differential.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-white">
                                    {t(`${differential.key}`)}
                                </h3>
                                <p className="text-gray-200">
                                    {t(`${differential.key}Description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                        {t('testimonialsTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="bg-primary-light p-8 rounded-lg shadow-lg">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-primary mb-4" />
                                <p className="text-gray-600 mb-4">"{t(`testimonial${num}`)}"</p>
                                <p className="font-semibold text-primary">{t(`testimonial${num}Author`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                        <div className="flex justify-end pr-8">
                            <div className="max-w-md">
                                <span className="text-accent font-bold uppercase tracking-wider mb-2 block">A Nossa Equipa</span>
                                <h2 className="text-4xl font-bold mb-6 text-primary font-serif">
                                    {t('aboutTitle')}
                                </h2>
                                <div className="w-20 h-1 bg-accent mb-6 rounded-full"></div>
                                <p className="text-gray-600 leading-relaxed text-lg">{t('aboutDescription')}</p>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="relative">
                                <div className="absolute -inset-4 border-2 border-accent/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                                <img
                                    src="/assets/uploads/uploaded_image_1_1767826009596.jpg"
                                    alt="Equipe Médica"
                                    className="relative rounded-lg shadow-2xl object-cover w-[400px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Appointment Form */}
            <section id="appointment" className="py-24 bg-primary-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl relative">
                        <h2 className="text-3xl font-bold text-center mb-8 text-primary font-serif">
                            {t('appointmentTitle')}
                        </h2>

                        {showSuccess && (
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg flex items-center space-x-2 animate-fadeIn z-50">
                                <CheckCircle2 className="h-5 w-5" />
                                <span>Enviado com sucesso!</span>
                            </div>
                        )}

                        {error && (
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg z-50">
                                <span>{error}</span>
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">{t('name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        placeholder={t('namePlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">{t('email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                        placeholder={t('emailPlaceholder')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">{t('phone')}</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                    placeholder={t('phonePlaceholder')}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">{t('message')}</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                                    placeholder={t('messagePlaceholder')}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <MessageCircleMore className="h-5 w-5" />
                                )}
                                <span>{isSubmitting ? 'Enviando...' : t('sendMessage')}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
