import { useState, useRef, useEffect } from 'react';
import { X, Send, ChevronDown, Minimize2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { currentSite } from '../config/siteConfig';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
    type?: 'text' | 'options';
    options?: { label: string; value: string }[];
}

interface UserData {
    name: string;
    contact: string;
    interest: string;
}

const ChatBot = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: currentSite.chatConfig.greeting, sender: 'bot' },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [step, setStep] = useState<'GREETING' | 'NAME' | 'MENU' | 'TREATMENTS' | 'EXPLAIN' | 'CONTACT' | 'CONFIRM' | 'SENDING' | 'SUCCESS'>('GREETING');
    const [userData, setUserData] = useState<UserData>({ name: '', contact: '', interest: 'Geral' });
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Visibility logic based on scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const TREATMENTS = {
        'implantes': {
            title: t('chat.treatments.implants.title'),
            text: t('chat.treatments.implants.text')
        },
        'facetas': {
            title: t('chat.treatments.veneers.title'),
            text: t('chat.treatments.veneers.text')
        },
        'alinhadores': {
            title: t('chat.treatments.aligners.title'),
            text: t('chat.treatments.aligners.text')
        },
        'branqueamento': {
            title: t('chat.treatments.whitening.title'),
            text: t('chat.treatments.whitening.text')
        },
        'prevencao': {
            title: t('chat.treatments.prevention.title'),
            text: t('chat.treatments.prevention.text')
        }
    };

    // Update initial message when language changes if it's the only message
    useEffect(() => {
        if (messages.length === 1 && messages[0].sender === 'bot') {
            setMessages([{ id: 1, text: currentSite.chatConfig.greeting, sender: 'bot' }]);
        }
    }, [t]);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    const addBotMessage = (text: string, options?: { label: string; value: string }[]) => {
        setMessages(prev => [...prev, {
            id: Date.now(),
            text,
            sender: 'bot',
            type: options ? 'options' : 'text',
            options
        }]);
    };

    const handleSendMessage = async (text: string = inputValue) => {
        if (!text.trim()) return;

        // User Message
        setMessages(prev => [...prev, { id: Date.now(), text, sender: 'user' }]);
        setInputValue('');

        // Process Logic
        setTimeout(() => processStep(text), 600);
    };

    const processStep = async (input: string) => {
        const lowerInput = input.toLowerCase();

        // Global Navigation / Intents (To allow changing mind at any step)
        if (lowerInput.includes('conhecer tratamentos') ||
            lowerInput.includes('learn about treatments') ||
            lowerInput.includes('connaître les traitements') ||
            lowerInput === 'tratamentos' ||
            lowerInput === 'treatments' ||
            lowerInput === 'traitements') {
            setStep('TREATMENTS');
            addBotMessage(t('chat.treatments.prompt'), [
                { label: t('chat.options.implants'), value: 'implantes' },
                { label: t('chat.options.veneers'), value: 'facetas' },
                { label: t('chat.options.aligners'), value: 'alinhadores' },
                { label: t('chat.options.whitening'), value: 'branqueamento' },
                { label: t('chat.options.prevention'), value: 'prevencao' }
            ].filter(opt => {
                if (opt.value === 'implantes') return currentSite.services.includes('implantologia');
                if (opt.value === 'facetas') return currentSite.services.includes('facetas');
                if (opt.value === 'alinhadores') return currentSite.services.includes('alinhadores');
                if (opt.value === 'branqueamento') return currentSite.services.includes('branqueamento');
                if (opt.value === 'prevencao') return currentSite.services.includes('prevencao');
                return true;
            }));
            return;
        }

        if (lowerInput.includes('falar com a equipa') ||
            lowerInput.includes('talk to the team') ||
            lowerInput.includes('parler à l\'équipe') ||
            lowerInput === 'contacto' ||
            lowerInput === 'contact') {
            setStep('CONTACT');
            setUserData(prev => ({ ...prev, interest: 'Contacto Geral' }));
            addBotMessage(t('chat.flow.askContact'));
            return;
        }

        switch (step) {
            case 'GREETING':
                // Logic handled in startFlow/Initial, usually waiting for NAME
                setUserData(prev => ({ ...prev, name: input }));
                setStep('MENU');
                addBotMessage(t('chat.greetingName', { name: input }), [
                    { label: t('chat.menu.treatments'), value: 'tratamentos' },
                    { label: t('chat.menu.contact'), value: 'contacto' }
                ]);
                break;

            case 'MENU':
                // Logic handled by Global Check primarily, but kept for fallback
                if (input.toLowerCase().includes('tratamento') || input.toLowerCase().includes('treatment')) {
                    setStep('TREATMENTS');
                    addBotMessage(t('chat.treatments.prompt'), [
                        { label: t('chat.options.implants'), value: 'implantes' },
                        { label: t('chat.options.veneers'), value: 'facetas' },
                        { label: t('chat.options.aligners'), value: 'alinhadores' },
                        { label: t('chat.options.whitening'), value: 'branqueamento' },
                        { label: t('chat.options.prevention'), value: 'prevencao' }
                    ].filter(opt => {
                        if (opt.value === 'implantes') return currentSite.services.includes('implantologia');
                        if (opt.value === 'facetas') return currentSite.services.includes('facetas');
                        if (opt.value === 'alinhadores') return currentSite.services.includes('alinhadores');
                        if (opt.value === 'branqueamento') return currentSite.services.includes('branqueamento');
                        if (opt.value === 'prevencao') return currentSite.services.includes('prevencao');
                        return true;
                    }));
                } else {
                    setStep('CONTACT');
                    setUserData(prev => ({ ...prev, interest: 'Contacto Geral' }));
                    addBotMessage(t('chat.flow.askContact'));
                }
                break;

            case 'TREATMENTS':
                // Check both Portuguese and English keywords
                let key: keyof typeof TREATMENTS | undefined;
                if (lowerInput.includes('implant')) key = 'implantes';
                else if (lowerInput.includes('faceta') || lowerInput.includes('veneer')) key = 'facetas';
                else if (lowerInput.includes('alinhador') || lowerInput.includes('aligner')) key = 'alinhadores';
                else if (lowerInput.includes('branqueamento') || lowerInput.includes('whiten') || lowerInput.includes('blanchiment')) key = 'branqueamento';
                else if (lowerInput.includes('preven') || lowerInput.includes('clean') || lowerInput.includes('nettoyage')) key = 'prevencao';

                if (key) {
                    setUserData(prev => ({ ...prev, interest: TREATMENTS[key].title }));
                    setStep('EXPLAIN');
                    addBotMessage(TREATMENTS[key].text);
                    setTimeout(() => {
                        addBotMessage(t('chat.flow.askMore'), [
                            { label: t('chat.options.yes'), value: 'sim' },
                            { label: t('chat.options.others'), value: 'outros' }
                        ]);
                    }, 1000);
                } else {
                    // Fallback or "Outros"
                    if (lowerInput.includes('outros') || lowerInput.includes('other')) {
                        addBotMessage(t('chat.flow.askOther'), [
                            { label: t('chat.options.implants'), value: 'implantes' },
                            { label: t('chat.options.veneers'), value: 'facetas' },
                            { label: t('chat.options.aligners'), value: 'alinhadores' },
                            { label: t('chat.options.whitening'), value: 'branqueamento' },
                            { label: t('chat.options.prevention'), value: 'prevencao' }
                        ].filter(opt => {
                            if (opt.value === 'implantes') return currentSite.services.includes('implantologia');
                            if (opt.value === 'facetas') return currentSite.services.includes('facetas');
                            if (opt.value === 'alinhadores') return currentSite.services.includes('alinhadores');
                            if (opt.value === 'branqueamento') return currentSite.services.includes('branqueamento');
                            if (opt.value === 'prevencao') return currentSite.services.includes('prevencao');
                            return true;
                        }));
                        return;
                    }

                    setStep('CONTACT');
                    setUserData(prev => ({ ...prev, interest: input }));
                    addBotMessage(t('chat.flow.askContactSpecific'));
                }
                break;

            case 'EXPLAIN':
                if (lowerInput.includes('sim') || lowerInput.includes('quero') || lowerInput.includes('yes') || lowerInput.includes('want')) {
                    setStep('CONTACT');
                    addBotMessage(t('chat.flow.askContactYes'));
                } else {
                    setStep('TREATMENTS');
                    addBotMessage(t('chat.flow.askOther'), [
                        { label: t('chat.options.implants'), value: 'implantes' },
                        { label: t('chat.options.veneers'), value: 'facetas' },
                        { label: t('chat.options.aligners'), value: 'alinhadores' },
                        { label: t('chat.options.whitening'), value: 'branqueamento' },
                        { label: t('chat.options.prevention'), value: 'prevencao' }
                    ].filter(opt => {
                        if (opt.value === 'implantes') return currentSite.services.includes('implantologia');
                        if (opt.value === 'facetas') return currentSite.services.includes('facetas');
                        if (opt.value === 'alinhadores') return currentSite.services.includes('alinhadores');
                        if (opt.value === 'branqueamento') return currentSite.services.includes('branqueamento');
                        if (opt.value === 'prevencao') return currentSite.services.includes('prevencao');
                        return true;
                    }));
                }
                break;

            case 'CONTACT':
                setUserData(prev => ({ ...prev, contact: input }));
                setStep('CONFIRM');
                addBotMessage(t('chat.flow.confirmSend'), [
                    { label: t('chat.options.send'), value: 'enviar' }
                ]);
                break;

            case 'CONFIRM':
                if (lowerInput.includes('sim') || lowerInput.includes('enviar') || lowerInput.includes('yes') || lowerInput.includes('send')) {
                    await sendEmail();
                }
                break;
        }
    };

    const startFlow = () => {
        if (messages.length === 1) {
            addBotMessage(t('chat.input.name'));
            setStep('GREETING');
        }
    };

    const sendEmail = async () => {
        setStep('SENDING');
        addBotMessage(t('chat.flow.sending'));

        try {
            // Build Transcript
            const transcript = messages
                .map(m => `[${m.sender.toUpperCase()}]: ${m.text}`)
                .join('\n');

            const templateParams = {
                name: userData.name,
                email: userData.contact,
                phone: userData.contact,
                message: `[VIA CHATBOT] \nInteresse: ${userData.interest}\nContacto: ${userData.contact}\n\n--- Histórico da Conversa ---\n${transcript}`
            };

            await emailjs.send(
                'service_htj9n8s',
                'template_zzz72ek',
                templateParams,
                'meaA1Ni7_dJtElS0x'
            );

            addBotMessage(t('chat.flow.success'));
            setStep('SUCCESS');
        } catch (error) {
            console.error('Erro ao enviar:', error);
            addBotMessage(t('chat.flow.error'));
            setStep('CONFIRM');
        }
    };

    if (!isVisible && !isOpen) return null;

    if (!isOpen) {
        return (
            <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-2 group animate-fadeIn">
                <div className="bg-white px-4 py-2 rounded-xl shadow-xl mb-2 mr-2 relative animate-bounce-slow origin-bottom-right">
                    <p className="text-sm font-medium text-gray-700">{t('chat.helpQuestion')}</p>
                    <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
                </div>

                <button
                    onClick={() => { setIsOpen(true); startFlow(); }}
                    className="bg-primary text-white p-0 rounded-full shadow-2xl hover:bg-primary-dark transition-all duration-300 hover:scale-110 flex items-center justify-center w-16 h-16 relative overflow-hidden ring-4 ring-white"
                >
                    <img
                        src="/assets/uploads/attendant_avatar.jpg"
                        alt="Atendente"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                </button>
            </div>
        );
    }

    return (
        <div className={`fixed z-[60] transition-all duration-300 ${isMinimized ? 'bottom-24 right-6 w-72' : 'bottom-6 right-6 md:bottom-24 md:right-6 w-[90%] md:w-80'} max-w-[350px]`}>
            {isMinimized && (
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute -top-3 -right-3 bg-white text-gray-500 rounded-full p-1 shadow-md hover:bg-red-50 hover:text-red-500 transition-colors z-[60]"
                >
                    <X className="w-4 h-4" />
                </button>
            )}

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col max-h-[550px] h-[500px]">
                {/* Header */}
                <div className="bg-primary p-3 flex justify-between items-center text-white cursor-pointer shadow-md flex-shrink-0" onClick={() => setIsMinimized(!isMinimized)}>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <img
                                src="/assets/uploads/attendant_avatar.jpg"
                                alt="Atendente"
                                className="w-10 h-10 rounded-full object-cover border-2 border-white/50"
                            />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-primary"></div>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm leading-tight">{currentSite.chatConfig.agentName}</h3>
                            <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                <p className="text-[10px] text-primary-light/90 uppercase tracking-wide font-medium">{t('chat.online')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="hover:bg-white/10 p-1 rounded transition-colors">
                            {isMinimized ? <Minimize2 className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="hover:bg-white/10 p-1 rounded transition-colors">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Body */}
                {!isMinimized && (
                    <>
                        <div className="flex-1 overflow-y-auto p-3 bg-gray-50 flex flex-col gap-2">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-slideIn`}>
                                    <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
                                        {msg.sender === 'bot' && (
                                            <img
                                                src="/assets/uploads/attendant_avatar.jpg"
                                                alt="Bot"
                                                className="w-6 h-6 rounded-full object-cover mr-2 self-end mb-1"
                                            />
                                        )}
                                        <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-snug shadow-sm ${msg.sender === 'user'
                                            ? 'bg-primary text-white rounded-br-none'
                                            : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                    {/* Options Buttons */}
                                    {msg.type === 'options' && msg.options && (
                                        <div className="flex flex-wrap gap-2 mt-2 ml-8 max-w-[85%]">
                                            {msg.options.map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    onClick={() => handleSendMessage(opt.label)}
                                                    className="bg-white border border-primary text-primary text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors shadow-sm"
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-white border-t border-gray-100">
                            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-primary transition-colors">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder={step === 'NAME' ? t('chat.input.name') : step === 'CONTACT' ? t('chat.input.contact') : t('chat.input.message')}
                                    className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                                    disabled={step === 'SENDING' || step === 'SUCCESS'}
                                // Remove 'required' if it was present implicitly, just standard input
                                />
                                <button
                                    onClick={() => handleSendMessage()}
                                    disabled={!inputValue.trim() || step === 'SENDING' || step === 'SUCCESS'}
                                    className={`p-2 rounded-full ${inputValue.trim() ? 'text-primary hover:bg-primary-light/20' : 'text-gray-400'} transition-colors`}
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatBot;
