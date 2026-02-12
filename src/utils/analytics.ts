import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-49PJZM56LY'; // Porto Implantes Web Stream

export const initGA = () => {
    if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
        ReactGA.initialize(GA_MEASUREMENT_ID);
    } else {
        console.warn('Google Analytics Measurement ID not set.');
    }
};

export const logPageView = () => {
    if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
};

export const logEvent = (category: string, action: string, label?: string) => {
    if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
        ReactGA.event({
            category: category,
            action: action,
            label: label,
        });
    } else {
        console.log(`[GA4 Mock] Category: ${category}, Action: ${action}, Label: ${label}`);
    }
};
