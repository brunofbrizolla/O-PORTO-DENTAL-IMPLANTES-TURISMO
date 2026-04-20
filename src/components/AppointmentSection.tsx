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
        <section id="appointment" className="py-16 md:py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="text-white text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif leading-tight">
                            {t('appointmentTitle')}
                        </h2>
                        <p className="text-lg md:text-xl mb-12 text-primary-light opacity-90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                            {t('appointmentSubtitle')}
                        </p>
                        <div className="space-y-8 max-w-md mx-auto lg:mx-0">
                            <div className="flex items-start gap-5 text-left group">
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-accent transition-colors">
                                    <PhoneCall className="w-6 h-6 text-white" />
                                </div>
                                <div className="pt-1">
                                    <h4 className="font-bold text-lg mb-1">{t('callUs')}</h4>
                                    <p className="opacity-80 text-base">+351 912 092 209</p>
                                    <div className="mt-2 pt-2 border-t border-white/10">
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-1">{t('emergencyPhone')}</h4>
                                        <p className="opacity-80 text-xl font-bold">963 086 963</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 text-left group">
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-accent transition-colors">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div className="pt-1">
                                    <h4 className="font-bold text-lg mb-1">{t('visitUs')}</h4>
                                    <p className="opacity-80 text-base leading-relaxed">Rua Arquitecto Marques da Silva, 285<br />4150-484 Porto, Portugal</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-10 -translate-y-1/2 bg-accent text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                            {t('freeConsultation') || 'Free Assessment'}
                        </div>
                        
                        {showSuccess && (
                            <div className="mb-8 bg-green-50 text-green-700 px-6 py-5 rounded-2xl flex items-center gap-4 animate-fadeIn border border-green-100">
                                <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                                <span className="font-bold">{t('successMessage')}</span>
                            </div>
                        )}

                        {error && (
                            <div className="mb-8 bg-red-50 text-red-700 px-6 py-5 rounded-2xl flex items-center gap-4 animate-fadeIn border border-red-100">
                                <span className="font-bold">{error}</span>
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-primary font-black mb-2 text-[10px] uppercase tracking-[0.2em] ml-2">{t('name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent/50 focus:bg-white focus:border-accent transition-all outline-none text-base"
                                        placeholder={t('namePlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label className="block text-primary font-black mb-2 text-[10px] uppercase tracking-[0.2em] ml-2">{t('email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent/50 focus:bg-white focus:border-accent transition-all outline-none text-base"
                                        placeholder={t('emailPlaceholder')}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-primary font-black mb-2 text-[10px] uppercase tracking-[0.2em] ml-2">{t('phone')}</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent/50 focus:bg-white focus:border-accent transition-all outline-none text-base"
                                        placeholder={t('phonePlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label className="block text-primary font-black mb-2 text-[10px] uppercase tracking-[0.2em] ml-2">
                                        {t('interestArea') || 'Interest Area'}
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="treatment"
                                            value={formData.treatment}
                                            onChange={(e) => selectTreatment(e.target.value)}
                                            required
                                            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent/50 focus:bg-white focus:border-accent transition-all outline-none text-base appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>{t('selectTreatment') || 'Select treatment'}</option>
                                            {treatmentsList.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.label}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-accent">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-primary font-black mb-2 text-[10px] uppercase tracking-[0.2em] ml-2">{t('message')}</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent/50 focus:bg-white focus:border-accent transition-all outline-none resize-none text-base"
                                    placeholder={t('messagePlaceholder')}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-accent hover:bg-primary text-white font-black py-5 px-8 rounded-2xl transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-4 uppercase tracking-widest text-sm"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-6 w-6 animate-spin" />
                                ) : (
                                    <MessageCircleMore className="h-6 w-6" />
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
