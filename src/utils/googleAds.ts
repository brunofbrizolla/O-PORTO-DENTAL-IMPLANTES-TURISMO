declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const fireGoogleAdsTag = (eventType: 'form' | 'whatsapp' = 'whatsapp') => {
  if (typeof window === 'undefined') return;

  if (!document.getElementById('google-ads-script')) {
    const script = document.createElement('script');
    script.id = 'google-ads-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11336332840';
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'AW-11336332840');
    `;
    document.head.appendChild(inlineScript);
  }

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
