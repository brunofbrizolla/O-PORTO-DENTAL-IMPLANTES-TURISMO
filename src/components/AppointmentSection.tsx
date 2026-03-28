import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import {
    PhoneCall,
    CheckCircle2,
    Users,
    Loader2,
    MessageCircleMore,
    Award,
    Sparkles,
    Heart
} from 'lucide-react';
import { logEvent } from '../utils/analytics';

interface AppointmentSectionProps {
    defaultTreatment?: string;
    pageName?: string;
}

const AppointmentSection: React.FC<AppointmentSectionProps> = ({ defaultTreatment = '', pageName = 'Home' }) => {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        treatment: defaultTreatment,
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
            logEvent('Contact', 'Form Submission', `${pageName} Page Appointment`);
            setFormData({ name: '', email: '', phone: '', message: '', treatment: defaultTreatment });
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (err) {
            setError(t('formErrorMessage'));
            console.error('EmailJS Error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const selectTreatment = (treatment: string) => {
        setFormData(prev => ({ ...prev, treatment }));
    };

    const treatmentsList = [
        { id: 'implantes', label: t('cardImplantTitle'), icon: Award },
        { id: 'facetas', label: t('cardVeneersTitle'), icon: Sparkles },
        { id: 'alinhadores', label: t('cardAlignersTitle'), icon: CheckCircle2 },
        { id: 'branqueamento', label: t('whitening'), icon: Sparkles },
        { id: 'prevencao', label: t('preventiveCare'), icon: Heart },
        { id: 'outros', label: 'Outros', icon: MessageCircleMore },
    ];

    return (
        <section id="appointment" className="py-6 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                            {t('appointmentTitle')}
                        </h2>
                        <p className="text-xl mb-8 text-primary-light opacity-90 leading-relaxed">
                            {t('appointmentSubtitle')}
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-full">
                                    <PhoneCall className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{t('callUs')}</h4>
                                    <p className="opacity-80">+351 912 092 209</p>
                                    <br />
                                    <h4 className="font-bold text-lg">{t('emergencyPhone')}</h4>
                                    <p className="opacity-80">963 086 963</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-full">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{t('visitUs')}</h4>
                                    <p className="opacity-80">Rua Arquitecto Marques da Silva, 285<br />4150-484 Porto, Portugal</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl">
                        {showSuccess && (
                            <div className="mb-6 bg-green-50 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3 animate-fadeIn">
                                <CheckCircle2 className="h-5 w-5" />
                                <span className="font-medium">{t('successMessage')}</span>
                            </div>
                        )}

                        {error && (
                            <div className="mb-6 bg-red-50 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3 animate-fadeIn">
                                <span className="font-medium">{error}</span>
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1 text-sm uppercase tracking-wide">{t('name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm"
                                        placeholder={t('namePlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1 text-sm uppercase tracking-wide">{t('email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm"
                                        placeholder={t('emailPlaceholder')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1 text-sm uppercase tracking-wide">{t('phone')}</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm"
                                    placeholder={t('phonePlaceholder')}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1 text-sm uppercase tracking-wide">
                                    Área de Interesse
                                </label>
                                <div className="relative">
                                    <select
                                        name="treatment"
                                        value={formData.treatment}
                                        onChange={(e) => selectTreatment(e.target.value)}
                                        required
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm appearance-none cursor-pointer hover:bg-white"
                                    >
                                        <option value="" disabled>Selecione o tratamento</option>
                                        {treatmentsList.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                {item.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1 text-sm uppercase tracking-wide">{t('message')}</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none text-sm"
                                    placeholder={t('messagePlaceholder')}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <MessageCircleMore className="h-5 w-5" />
                                )}
                                <span>{isSubmitting ? t('sending') : t('sendMessage')}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;
