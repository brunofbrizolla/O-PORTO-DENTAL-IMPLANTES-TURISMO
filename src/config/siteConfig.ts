export interface SiteConfig {
  id: 'porto-implantes' | 'dental-tourism';
  name: string;
  logo: string;
  primaryColor: string;
  accentColor: string;
  contactPhone: string;
  contactEmail: string;
  whatsappNumber: string;
  chatConfig: {
    agentName: string;
    greeting: string;
    initialStep: string;
    whatsappPrompt: string;
  };
  homePage: string;
}

const portoConfig: SiteConfig = {
  id: 'porto-implantes',
  name: 'Porto Implantes',
  logo: '/assets/uploads/logo_header.png',
  primaryColor: '#003844',
  accentColor: '#B8860B',
  contactPhone: '+351 912 092 209',
  contactEmail: 'contacto@portoimplantes.pt',
  whatsappNumber: '351912092209',
  chatConfig: {
    agentName: 'Sofia',
    greeting: 'Olá! 👋 Sou a assistente virtual da Porto Implantes.',
    initialStep: 'Como posso ajudar com o seu sorriso hoje?',
    whatsappPrompt: 'Falar com a Equipa no Porto'
  },
  homePage: 'Home',
  services: ['implantologia', 'facetas', 'alinhadores', 'branqueamento', 'prevencao']
};

const tourismConfig: SiteConfig = {
  id: 'dental-tourism',
  name: 'Porto Dental Savings',
  logo: '/assets/uploads/logo_header.png',
  primaryColor: '#004B57',
  accentColor: '#DAA520',
  contactPhone: '+351 912 092 209',
  contactEmail: 'savings@portoimplantes.pt',
  whatsappNumber: '351912092209',
  chatConfig: {
    agentName: 'Elena',
    greeting: 'Hi! Looking to save up to 60% on your dental treatment? 👋',
    initialStep: 'I can help you get a free remote quote. Shall we start?',
    whatsappPrompt: 'Get My Free Quote Now'
  },
  homePage: 'TurismoDentario',
  services: ['implantologia', 'facetas', 'alinhadores']
};

// Aqui definimos qual site carregar baseado em uma variável de ambiente
const siteMode = import.meta.env.VITE_SITE_MODE || 'porto-implantes';

export const currentSite = siteMode === 'dental-tourism' ? tourismConfig : portoConfig;
