declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const fireGoogleAdsTag = (eventType: 'form' | 'whatsapp' = 'whatsapp') => {
  if (typeof window === 'undefined') return;

  // Fire specific event based on type
  if (window.gtag) {
    if (eventType === 'form') {
      window.gtag('event', 'conversion', {
          'send_to': 'AW-11336332840/at_8CLGCscAcEKjsyp0q',
          'value': 1.0,
          'currency': 'EUR'
      });
    } else if (eventType === 'whatsapp') {
      window.gtag('event', 'conversion', {
          'send_to': 'AW-11336332840/IoxhCNjxlcAcEKjsyp0q',
          'value': 1.0,
          'currency': 'EUR'
      });
    }
  }
};
